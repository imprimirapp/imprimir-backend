# imprimir-backend - Imprimir.co

## ENG
**Disclaimer:** Backend system for sell online printing products. All the code and logo and "imprimir" trademark are property of Imprimir.co. Unless you're authorized, you can not use, share or modify any part of this code. 
Currently is in development stage. Imprimir.co will not responsible by malfunction in your system if you download this code illegally. 

## ESP

**Limitación de responsabilidad:** Sistema backend para vender productos de litografía online. Todo el código, el logo y la marca "imprimir" son propiedad de Imprimir.co. A menos que esté autorizado no puede usar, descargar o modificar niguna parte de este código.
Actualmente se encuentra en fase de desarrollo. Imprimir.co no se hará responsable por mal funcionamiento en su sistema si descarga este código ilegalmente.


### Instructions / Instrucciones

1. Install dependencies / Instalar dependencias

`npm install`

2. Ask for `firebase.json` file to system admin. Put it in root folder. / Pedir archivo `firebase.json` al administrador del sistema. Colocar en directorio raíz.

3. Move to folder `functions` and install dependencies / Moverse a la carpeta `functions` e instalar dependencias

`cd functions` 
`npm install`


4. Move to root folder, Init server / Moverse a carpeta raíz e Inicializar servidor 

`cd ..`
`firebase serve --only functions` or / o  `npm start` or / o `nodemon`

> Note: In order to execute `nodemon` you need have installed Nodemon globally: `npm install -g nodemon`

> Nota: Para ejecutar `nodemon` necesita tener instalado Nodemon globalmente: `npm install -g nodemon`

5. If you want deploy functions in hosting / Si quiere hacer deploy de las funciones en el hosting

`firebase deploy --only functions,hosting`
