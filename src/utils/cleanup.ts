import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const cleanupProject = async () => {
  try {
    // Detener procesos de Node
    await execAsync('pkill -f node || true');
    
    // Limpiar caché
    await execAsync('npm cache clean --force');
    
    // Eliminar directorios y archivos
    await execAsync('rm -rf .next');
    await execAsync('rm -rf node_modules');
    await execAsync('rm -f package-lock.json');
    
    // Reinstalar dependencias
    await execAsync('npm install');
    
    return { success: true, message: 'Limpieza completada exitosamente' };
  } catch (error) {
    return { 
      success: false, 
      message: 'Error durante la limpieza',
      error: error instanceof Error ? error.message : 'Error desconocido'
    };
  }
};