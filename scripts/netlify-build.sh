#!/bin/bash

echo "🔍 Verificando variables de entorno de Firebase..."

# Verificar variables críticas
if [ -z "$VITE_FIREBASE_API_KEY" ]; then
  echo "❌ ERROR: VITE_FIREBASE_API_KEY no está configurada"
  exit 1
fi

if [ -z "$VITE_FIREBASE_PROJECT_ID" ]; then
  echo "❌ ERROR: VITE_FIREBASE_PROJECT_ID no está configurada" 
  exit 1
fi

if [ -z "$VITE_FIREBASE_AUTH_DOMAIN" ]; then
  echo "❌ ERROR: VITE_FIREBASE_AUTH_DOMAIN no está configurada"
  exit 1
fi

echo "✅ Variables de Firebase configuradas correctamente"
echo "🚀 Iniciando build..."

# Ejecutar el build
npm run build