### SECCION 8:   MODULOS Y WEBPACK

#  83  INTRODUCCION
#  udemy.com/course/javascript-fernando-herrera/learn/lecture/17620660#overview

#  84  CREANDO UN PROYECTO DE NODE
#  https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17626914#overview

#  85  EXPOSICION DEL PROBLEMA Y NECESIDAD DE WEBPACK   

* ------------------------------------------------
- CREANDO UN PROYECTO DE NODE
* Línea de Comando
- node version & npm version

> npm  y responder las preguntas o npm init para evitar preguntas

* ------------------------------------------------
# 86    INSTALACION Y CONFIGURACION DE WEBPACK POR DEFAULT
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17629432#overview

* https://webpack.js.org/guides/getting-started/
* mkdir webpack-demo
    cd webpack-demo
    npm init -y
    npm install webpack webpack-cli --save-dev

* En el directorio que se encuentra package.json:
> npm install webpack webpack-cli --save-dev

* NPM Scripts
    Given it's not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut. 
    Let's  adjust our package.json by adding an npm script:



# ------------------------------------------------  CREACION Y EJECUCION
- modificar package.json:   "build": "webpack" 

> npm run build
    - CREA CARPETA "dist"  (con el archivo main.js que es conocido como BUNDLE.)

> npm start
    - ARRANCA SERVIDOR WEBPACK.. quedando en modo watch

# ------------------------------------------------


* ------------------------------------------------
# 87    ARCHIVO DE CONFIGURACION DEL WEBPACK 
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17630722#overview

:  --save-dev es equivalente  -D
- Esto le indica a webpack que el html debe pasarlo a la carpeta "dist"
- y que se icruste el html en bundle
> npm i -D html-loader html-webpack-plugin

# WEBPACK.CONFIG.JS
    rules: [
        {
            test: /\.html$/i,       -> expresiones Regulares de búsqueda
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: true      -> permite minizar el html, comprimiendo y eliminando espacios y comentarios
            }
        }
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',   -> que archivo se quiere tomar
            filename: './index.html'        -> y donde se quiere colocar, además agrega una línea de script en el html
        })
    ]

* ------------------------------------------------
# 88    WEBPACK DEV SERVER
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17630986#overview

* Servidor de Desarollo de Webpack
> npm i -D webpack-dev-server

* PACKAGE.JSON:  
    "start": "webpack serve"    
    "start": "webpack serve --port=8081"    

* ------------------------------------------------
# 89    IMPORTANDO ESTILOS DE FORMA DINAMICA:
#  https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17681198#questions

> npm i -D css-loader style-loader

# -----------------------------------------------
# 90    IMPORTANDO ESTILOS DE FORMA GLOBAL:
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17681564#questions

> npm i -D mini-css-extract-plugin

* PRODUCCION; Optimización de código CSS
> npm i -D optimize-css-assets-webpack-plugin

# webpack.config.js
// Para PRODUCTION: esto previene que el navegador mantenga estos archivos en el cache
// contentHash: entrega una serie de números que se agregan al nombre del Css, hacíendolo único
// new MiniCssExtractPlugin({
//     filename: '[name].[contentHash].css',
//     ignoreOrder: false
// })
// ]

# -----------------------------------------------
# 91    IMAGENES:
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/18611528#questions

* Webpack, requiere saber como importar imágenes y archivos

> npm i -D file-loader

NOTA: para versiones antes de la "file-loader": "^6.0.0",
- Funcionaba así:
            {
                test: /\.(png |svg | jpg | gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            Module: false
                        }
                    }
                ]
            }

- para versiones superiores:

> npm i copy-webpack-plugin --save-dev



-    NOTA
-    En la próxima clase trabajaremos con el Webpack CopyPlugin, 
-    el cual nos sirve para copiar y mover los assets, pero la sintaxis cambió un poco:
-    En el video verán:
        new CopyPlugin([
            { from: 'src/assets', to: 'assets/' },
        ]),

-    Y ahora se recomienda:
        new CopyPlugin({
            patterns: [
            { from: 'src/assets', to: 'assets/' },
        ],
-    Como ven, se agregó un nivel adicional de patterns, 
-    y ahí se añade lo mismo que veremos en la próxima clase.

# -----------------------------------------------
# 92    WEBPACK - PRODUCTION MODE
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17693146#questions

- package.json
    producción: "build": "webpack --config webpack.prod.js",
    > npm run build
    desarrallo: "build:dev": "webpack --config webpack.config.js",
    > npm run build:dev
# -----------------------------------------------
# 93    INSTALACION Y CONFIGURACION DE BABEL
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17693668#notes

* Links
https://babeljs.io/
https://babeljs.io/setup#installation

> npm install --save-dev babel-loader @babel/core   o  npm i -D babel-loader @babel/core
> npm install @babel/preset-env --save-dev

    revisar configuración puntos 1 2 3,
    4: Create babel.config.json configuration file
    {
     "presets": ["@babel/preset-env"]
    }

https://babeljs.io/docs/en/babel-preset-minify

> npm install babel-preset-minify --save-dev

    With a configuration file (Recommended)
    {
    "presets": ["minify"]
    }

https://github.com/webpack-contrib/babel-minify-webpack-plugin

> npm install babel-minify-webpack-plugin --save-dev

https://babeljs.io/docs/en/babel-preset-env

> npm install --save-dev @babel/preset-env

# -----------------------------------------------
# 95    LIMPIANDO CARPETA DIST
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17694322#notes

- https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder

> npm install --save-dev clean-webpack-plugin
    * esto tb se podría agregar al webpack.config.js - desarrollo
    * EL HASH que se crea en la carpeta es nuevo - SI Y SOLO SI .. HAY CAMBIOS EN LOS FUENTES

# 96    FUENTES SECCION
# https://www.udemy.com/course/javascript-fernando-herrera/learn/lecture/17704718#notes