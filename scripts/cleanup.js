const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function cleanup() {
  console.log('🧹 Iniciando limpieza del proyecto...');

  try {
    // Directorios a limpiar
    const dirsToClean = ['.next', 'node_modules'];
    const filesToClean = ['package-lock.json'];

    // Limpiar directorios
    dirsToClean.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        console.log(`Eliminando ${dir}...`);
        fs.rmSync(dirPath, { recursive: true, force: true });
      }
    });

    // Limpiar archivos
    filesToClean.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        console.log(`Eliminando ${file}...`);
        fs.unlinkSync(filePath);
      }
    });

    // Limpiar caché de npm
    console.log('Limpiando caché de npm...');
    execSync('npm cache clean --force', { stdio: 'inherit' });

    // Reinstalar dependencias
    console.log('Reinstalando dependencias...');
    execSync('npm install', { stdio: 'inherit' });

    console.log('✅ Limpieza completada exitosamente');
  } catch (error) {
    console.error('❌ Error durante la limpieza:', error);
    process.exit(1);
  }
}

cleanup();