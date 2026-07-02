# Huelli Frontend

## Descripción

Interfaz web para el proyecto PetHogar, construida con React y Vite. El frontend está diseñado para gestionar adopciones, chat en tiempo real, perfiles de usuario, reportes y experiencia de bienvenida.

## Arquitectura del proyecto

- React 19 con Vite para desarrollo rápido y compilación eficiente.
- Tailwind CSS v4 con el plugin oficial de Vite para estilos utilitarios.
- Material UI (`@mui/material` y `@mui/icons-material`) para componentes de UI accesibles y con diseño consistente.
- Zustand para el estado global de autenticación y datos de usuario.
- React Router DOM para navegación entre páginas.
- Estructura modular en `src/features` para separar dominios de aplicación.
- Layouts reutilizables en `src/components/layout` para rutas públicas y privadas.

## Estructura principal

- `src/main.jsx`: punto de entrada de la aplicación.
- `src/App.jsx`: configuración de rutas y layout principal.
- `src/store/useAuthStore.jsx`: lógica de estado global de autenticación.
- `src/features/*`: módulos de dominio para cada sección de la aplicación.
- `Dockerfile`: build multi-stage para generar y servir la aplicación con Nginx.
- `nginx.conf`: configuración personalizada del servidor.

## Dependencias destacadas

- `react`, `react-dom`
- `react-router-dom`
- `@mui/material`, `@mui/icons-material`
- `tailwindcss`, `@tailwindcss/vite`
- `@emotion/react`, `@emotion/styled`
- `lucide-react`
- `zustand`

## Dependencias de desarrollo

- `vite`
- `@vitejs/plugin-react`
- `eslint`, `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `autoprefixer`, `postcss`
- `@types/react`, `@types/react-dom`

## Requisitos previos

- Node.js 24.x o superior
- npm 10.x o superior
- Docker instalado para despliegue en contenedor

## Instalación local

1. Clona el repositorio:

   ```bash
   git clone <tu-repositorio>
   cd frontend_huelli
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la aplicación en el navegador:

   - `http://localhost:5173`

## Uso en producción local

1. Compila la aplicación:

   ```bash
   npm run build
   ```

2. Previsualiza el build:

   ```bash
   npm run preview
   ```

3. Abre la URL indicada en consola (`http://localhost:4173` por defecto).

## Despliegue con Docker

1. Construye la imagen de Docker:

   ```bash
   docker build -t huelli-frontend .
   ```

2. Ejecuta el contenedor:

   ```bash
   docker run -d -p 80:80 --name huelli-frontend huelli-frontend
   ```

3. Accede a la aplicación desde:

   - `http://localhost`

## Notas adicionales

- El contenedor usa Nginx para servir los archivos estáticos generados en `dist`.
- Si agregas rutas nuevas o ajustas navegación, revisa `nginx.conf` para mantener el enrutamiento correcto.
- Usa los layouts de `src/components/layout` para separar vistas públicas de privadas.

## Comandos útiles

- `npm run dev`: iniciar desarrollo.
- `npm run build`: crear build de producción.
- `npm run preview`: servir build localmente.
- `npm run lint`: validar código con ESLint.

---

Frontend preparado para desarrollo rápido y despliegue en Docker con una arquitectura modular y escalable.
