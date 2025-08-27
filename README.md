# Social-Network-Conecta

Red social minimalista construida con React, TypeScript y Vite. Permite crear publicaciones, comentar y responder comentarios de forma anidada (threaded comments). Incluye skeleton loaders, diseño responsive, despliegue con Docker/Nginx y tests end-to-end con Cypress.

## Características

- Publicaciones y comentarios anidados (hilos de conversación)
- UI modular y componentes reutilizables (SCSS, React)
- Skeleton loaders para mejor UX
- Responsive design
- Deploy listo para Docker/Nginx
- Tests automáticos con Cypress

## Requisitos

- Node.js >= 18
- npm >= 9
- Docker (opcional para deploy)

## Instalación y uso local

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Tests end-to-end (Cypress)

1. Asegúrate de que la app esté corriendo (`npm run dev`).
2. En otra terminal, ejecuta:
   ```sh
   npx cypress open
   ```
   o para modo headless:
   ```sh
   npx cypress run
   ```

## Deploy con Docker

1. Construye la imagen:
   ```sh
   docker build -t social-red .
   ```
2. Corre el contenedor:
   ```sh
   docker run -p 80:80 social-red
   ```
3. Accede a la app en [http://localhost](http://localhost)

## Estructura principal

- `src/` - Código fuente (componentes, páginas, servicios, tipos)
- `public/` - Archivos estáticos
- `cypress/` - Tests end-to-end
- `Dockerfile`, `nginx.conf` - Configuración para deploy

---
Hecho con ❤️ por Alejandro Santini
