# Web Chat

Web Chat es una aplicación de chat en tiempo real que permite a los usuarios enviar mensajes desde el localhost. Además, el nombre de usuario se obtiene mediante una cookie. Esta aplicación utiliza tecnologías como Express, Socket.IO y Cookie Parser.

## Requisitos

- Node.js (versión X.X.X)
- NPM (versión X.X.X)

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/AndruTRADX/web-chat.git
```

2. Navega al directorio del proyecto:

```bash
cd web-chat
```

3. Instala las dependencias:

```bash
npm install
```

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar el puerto en el archivo index.js. Por defecto, está configurado para ejecutarse en el puerto 3000.

## Uso

1. Inicia la aplicación:

```bash
npm run dev
```

2. Abre tu navegador web y visita <http://localhost:3000>.

3. Para comenzar a chatear, ingresa un nombre de usuario en la página de inicio. Si ya tienes una cookie con el nombre de usuario, serás redirigido automáticamente al chat.

4. Escribe tu mensaje en el campo de texto y presiona el botón "Enviar" para enviarlo.

5. Puedes abrirlo en otros navegadores o desde tu dirección IP ingresar desde otro dispositivo en tu misma red para empezar a chatear.

## Estructura de archivos

- **index.js**: El punto de entrada del servidor de Express.
- **realtime.server.js**: Configuración del servidor de Socket.IO para el chat en tiempo real.
- **routes/index.js**: Definición de las rutas del servidor.
- **middlewares/isLogin.js**: Middleware para verificar si el usuario ha iniciado sesión.
- **views/**: Carpeta que contiene los archivos HTML para las vistas de la aplicación.
- **public/**: Carpeta que contiene los archivos estáticos (CSS, imágenes, etc.) utilizados en la aplicación.
