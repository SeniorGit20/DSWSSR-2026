//importando configurador de vite
import {defineConfig} from 'vite'

import {resolve}  from 'node:path'

export default defineConfig({
    //directorio raiz de los archivos fuente del front.end
    root:'src',
    //configurando un servidor de desarrollo
    server:{
        //puerto de escucha
        port:5173,
        // rigidez del puerto
        strict: true

    },

    //configurando el build
    build:{
        //directorio de salida del js de produccion
        outDir: "../dist",
        //asegurando limpieza del folder de produccion
        emptyOutDir: true,
        //generar manifiesto para el servidor
        manifiest: true,
        //opciones de empaquetado
        rollupOptions: {
            input:{
                main: resolve(__dirname,'src/main.js')
            }
        }
    },
    //configuracion para el desarrollo
    publicDir:false

})