# 🚀 Configuración para Deployment en Netlify

## ⚠️ PROBLEMA ACTUAL
El build falla en Netlify con código de salida 2, muy probablemente por **variables de entorno faltantes**.

## ✅ SOLUCIÓN - Configurar Variables en Netlify

### 📝 **Paso 1: Ir a Netlify Dashboard**
1. Ve a tu sitio en Netlify
2. **Site settings** > **Environment variables**
3. Agrega **TODAS** estas variables:

```
VITE_FIREBASE_API_KEY=AIzaSyAGk2MUf-VONzoA_A_vnocSsnnQ2k-EVvI
VITE_FIREBASE_AUTH_DOMAIN=lgsongs-7.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=lgsongs-7
VITE_FIREBASE_STORAGE_BUCKET=lgsongs-7.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=271736756531
VITE_FIREBASE_APP_ID=1:271736756531:web:224b5c89e82ace5e058646
VITE_CURRENCY=CLP
VITE_LOCALE=es-CL
VITE_MINIMUM_FRACTION_DIGITS=2
VITE_MAXIMUM_FRACTION_DIGITS=2
VITE_MP_PUBLIC_KEY=TEST-72bc63de-42b7-4cfd-8c21-b93e401fd78c
VITE_BACKEND_URL=https://proyecto6-sgv2.onrender.com/api/v1/
```

### 🔧 **Paso 2: Configuración ya implementada**
✅ **netlify.toml** - Configurado con:
- Build command con validación de variables
- Publish directory: `dist`
- Node.js 18
- Redirects para React Router
- Headers de seguridad

✅ **Validaciones agregadas**:
- Verificación de variables Firebase en build time
- Mensajes de error descriptivos
- Optimizaciones de memoria para Node.js

### 🚀 **Paso 3: Deploy**
1. **Commit y push** los cambios:
   ```bash
   git add .
   git commit -m "Add Netlify build config and Firebase validation"
   git push origin main
   ```

2. **El script automáticamente**:
   - ✅ Verificará que las variables estén configuradas
   - ✅ Mostrará errores específicos si faltan
   - ✅ Ejecutará el build optimizado

## 🔍 **Debugging del Build**

### **Si el build sigue fallando:**

1. **Revisa los logs de Netlify** para ver el mensaje específico
2. **Variables más críticas**:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_PROJECT_ID` 
   - `VITE_FIREBASE_AUTH_DOMAIN`

3. **El script mostrará** qué variable específica falta

### **Verificar variables en Netlify:**
- Ve a **Site settings** > **Environment variables**
- Asegúrate de que todas las variables `VITE_*` estén configuradas
- **NO** incluyas comillas en los valores

## 📋 **Checklist Final**

- [ ] **Variables de entorno configuradas** en Netlify
- [ ] **Commit y push** de cambios locales
- [ ] **Redeploy** desde Netlify dashboard
- [ ] **Verificar logs** del build en tiempo real

## 🎯 **El error debería resolverse** una vez que configures las variables de entorno en Netlify.

Si persiste el problema, el script te dirá exactamente qué variable falta.