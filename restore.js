const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read source directory
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Recursively copy directories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

function restore() {
  console.log('Starting restoration process...');
  
  const backupDir = path.join(__dirname, 'backup-2024-03-19');
  const projectDir = __dirname;

  // List of directories and files to restore
  const itemsToRestore = [
    'app',
    'components',
    'contexts',
    'hooks',
    'lib',
    'public',
    'src',
    '.eslintrc.json',
    '.vscode',
    'components.json',
    'next.config.js',
    'package.json',
    'postcss.config.js',
    'tailwind.config.ts',
    'tsconfig.json'
  ];

  // Restore each item
  itemsToRestore.forEach(item => {
    const sourcePath = path.join(backupDir, item);
    const destPath = path.join(projectDir, item);

    if (fs.existsSync(sourcePath)) {
      if (fs.lstatSync(sourcePath).isDirectory()) {
        copyDirectory(sourcePath, destPath);
      } else {
        fs.copyFileSync(sourcePath, destPath);
      }
      console.log(`Restored: ${item}`);
    }
  });

  console.log('Restoration complete!');
  console.log('Installing dependencies...');
  
  // Install dependencies
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('Project has been restored to March 19, 2024 backup point.');
}

// Run restoration if script is executed directly
if (require.main === module) {
  restore();
}

module.exports = restore;