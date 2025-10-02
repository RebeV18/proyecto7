# PROYECTO 7 - E-commerce con Firebase

## 🔥 Migración a Firebase

Este proyecto ha sido migrado de MongoDB a **Firebase** como backend principal, aprovechando Firebase Authentication para la gestión de usuarios y Firestore como base de datos NoSQL.

### Características principales:
- 🛍️ **Catálogo de productos** que permite a los usuarios explorar artículos disponibles
- 🛒 **Carrito de compras** para seleccionar y gestionar compras
- 💳 **Pasarela de pago** integrada con MercadoPago
- 🔐 **Autenticación de usuarios** con Firebase Authentication
- 👤 **Gestión de perfiles** de usuario
- 📱 **Diseño responsivo** con TailwindCSS

## 🚀 Stack Tecnológico

### Frontend
- **React** (con Vite)
- **Firebase SDK** (Authentication, Firestore)
- **React Router DOM** para el enrutado
- **TailwindCSS** para estilos
- **Axios** para llamadas a APIs externas
- **useContext y useReducer** para manejo de estado

### Backend (Firebase)
- **Firebase Authentication** - Gestión de usuarios
- **Firestore** - Base de datos NoSQL
- **Firebase Storage** - Almacenamiento de archivos

### Servicios Externos
- **MercadoPago** - Pasarela de pagos

## ⚙️ Configuración

### 1. Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=tu_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyectoid
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_FIREBASE_MEASUREMENT_ID=G-ABCDEF123

# Currency Configuration
VITE_CURRENCY=CLP
VITE_LOCALE=es-CL
VITE_MINIMUM_FRACTION_DIGITS=0
VITE_MAXIMUM_FRACTION_DIGITS=0

# MercadoPago Configuration
VITE_MP_PUBLIC_KEY=tu_mercadopago_public_key
```

### 2. Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita **Authentication** con el proveedor de Email/Password
3. Crea una base de datos **Firestore** en modo de prueba
4. Obtén la configuración del proyecto en Project Settings > General > Your apps

### 3. Estructura de Firestore

El proyecto utiliza las siguientes colecciones:

```
firestore/
├── users/           # Información adicional de usuarios
│   ├── {uid}/
│   │   ├── nombre
│   │   ├── apellido
│   │   ├── pais
│   │   ├── telefono
│   │   ├── email
│   │   ├── createdAt
│   │   └── updatedAt
│   
└── products/        # Catálogo de productos
    ├── {productId}/
    │   ├── title
    │   ├── description
    │   ├── price
    │   ├── category
    │   ├── imageUrl
    │   ├── featured (boolean)
    │   ├── createdAt
    │   └── updatedAt
```

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```

## 🔧 Servicios Migrados

### Autenticación (`authApiService.jsx`)
- ✅ **Login** con Firebase Authentication
- ✅ **Registro** con almacenamiento adicional en Firestore
- ✅ **Actualización de perfil** con sincronización Auth/Firestore
- ✅ **Logout** y gestión de sesiones
- ✅ **Observador de estado** de autenticación

### Productos (`productApiService.js`)
- ✅ **Obtener todos los productos** desde Firestore
- ✅ **Obtener producto por ID**
- ✅ **Agregar nuevos productos**
- ✅ **Actualizar productos existentes**
- ✅ **Eliminar productos**
- ✅ **Filtrar por categoría**
- ✅ **Productos destacados**

### Cliente API (`apiClient.js`)
- ✅ **Interceptor automático** para tokens de Firebase
- ✅ **Compatibilidad** con APIs externas
- ✅ **Helpers de autenticación** Firebase

## 🚨 Consideraciones Importantes

```

## 📦 Deployment

El proyecto puede ser desplegado en cualquier servicio de hosting estático como:
- **Netlify**
- **Firebase Hosting**

Asegúrate de configurar las variables de entorno en tu plataforma de deployment.

## 🔗 Links

- Frontend Deployment: [luisgerardoaquino.netlify.app](https://luisgerardoaquino.netlify.app)
