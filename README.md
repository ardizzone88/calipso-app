

 CALIPSO APP - FORMULARIO DINÁMICO (Vue 3 + Vuetify 3 + Pinia)
==================================================

Este proyecto consiste en una aplicación SPA con Vue 3 que genera un formulario dinámico desde una estructura JSON. 
Permite ingresar datos, mostrarlos en tiempo real, y ver un listado de registros enviados.

----------------------------------------
✅ REQUISITOS PREVIOS
----------------------------------------
Antes de instalar el proyecto, asegúrate de tener instalado:

1. Node.js (recomendado: versión 18 o superior)
   Descargar desde: https://nodejs.org/

2. npm o yarn (npm viene con Node.js)

3. Git (opcional, si deseas clonar desde un repositorio remoto)

----------------------------------------
📦 INSTALACIÓN DEL PROYECTO
----------------------------------------

1. Clonar o descargar el repositorio en tu máquina local:

   Usando Git:
   > git clone https://github.com/usuario/calipso-app.git
   > cd calipso-app/calipso-app

   O simplemente descarga el ZIP y descomprímelo.

2. Instalar las dependencias del proyecto:

   Usando npm:
   > npm install

   O usando yarn:
   > yarn install

----------------------------------------
🚀 LEVANTAR EL PROYECTO EN DESARROLLO
----------------------------------------

Usando npm:
> npm run dev

Usando yarn:
> yarn dev

Esto iniciará la aplicación en:  
http://localhost:5173/  
(La URL puede variar según tu configuración local)

----------------------------------------
🛠 ESTRUCTURA PRINCIPAL DEL PROYECTO
----------------------------------------

src/
├── components/
│   ├── DynamicField.vue          # Componente que renderiza campos individuales del formulario
│   ├── FormView.vue              # Componente principal del formulario dinámico
│   └── SubmittedRecordsDialog.vue # Modal que muestra los registros enviados
│
├── stores/
│   └── formStore.ts              # Store de Pinia que maneja el estado global del formulario
│
├── plugins/
│   └── vuetify.ts                # Configuración y tema de Vuetify
│
├── App.vue                       # Componente raíz
├── main.ts                       # Punto de entrada de la app

----------------------------------------
🧩 DEPENDENCIAS CLAVE
----------------------------------------

- vue@3.x
- vuetify@3.x
- pinia
- typescript
- @mdi/font (Material Design Icons para íconos)



----------------------------------------
📌 COMANDOS ÚTILES
----------------------------------------

- npm run dev       → Ejecuta la app en modo desarrollo
- npm run build     → Compila la app para producción
- npm run lint      → Linter para revisar el código (si configurado)

----------------------------------------
