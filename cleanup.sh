#!/bin/bash

# Detener procesos de Node
echo "Deteniendo procesos de Node..."
pkill -f node || true

# Limpiar caché de npm
echo "Limpiando caché de npm..."
npm cache clean --force

# Eliminar directorios y archivos
echo "Eliminando directorios y archivos..."
rm -rf .next
rm -rf node_modules
rm -f package-lock.json

# Limpiar caché del sistema
echo "Limpiando caché del sistema..."
sync
echo 3 > /proc/sys/vm/drop_caches || true

# Reinstalar dependencias
echo "Reinstalando dependencias..."
npm install

# Construir el proyecto
echo "Construyendo el proyecto..."
npm run build

echo "¡Proceso de limpieza completado!"