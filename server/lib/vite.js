//biblioteca file Stream
import fs from 'node:fs'
//biblioteca de rutas
import path from 'node:path'

import { fileURLToPath} from 'node:url'
import { dirname} from 'node:path'

import { fileURLToPath} from 'node:url'
//creando las variables de rutas
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * helper para handlebars que genera las etiquetas de vite
 * EN DESARROLLO:conecta al servidor de desarrollo de vite 
 * EN PRODUCCION: usa los compilados de vite
 * 
 */

export function viteAssets(){
    //obtener modo de ejecusion
    const isDev = process.env.NODE_ENV !== 'production'
    //rescatando la url del servidor del desarrollo
    const viteDevServer = process.env.VITE_DEV_SERVER || 'http://localhost:5173'

    //si estamos en modo de dearrollo

    if(isDev){
        //en desarroll, cargamos los archivos
        // del frontend directamente del servidor
        // de desarrollo de vite
        return  `
        <script type="module" src="${viteDevServer}/@vite/client"></script>
        <script type="module" src="${viteDevServer}/main.js"></script>
        `
    }

    // En produccion leemos el manifest
    // y generamos las etiquetas finales de produccion
    const manifestPath = path.join(__dirname,'..','..','dist','.vite','manifest.json')

    // Si no existe el manifiesto
    if(!fs.existsSync(manifestPath)){
        console.warn("Vite manifest not found. Run 'npm run build")
        return ''
    }
    //leyendo y parseando el archivo de manifiesto que maneja vite en
    // la compilacion de los archivos del front end

    const manifest = JSON.parce(fs.readfileSync(manifestPath,'utf-8'))
    const mainEntry = manifest ['main.js']

    if(!mainEntry){
        console.warn('Archivo main.js no esta disponible en el manifiesto de Vite')
        return ''
    }

    let tags = '';
    // css files
    if(mainEntry.css){
        mainEntry.css.forEach(cssfile =>{
            tags += `<link rel="stylesheet" href="/$
           {cssfile}">\n`
        });
    }

    // JS file
    tags += `<script type = "module" src="/${mainEntry.file}" defer></scripts>`;
    return tags;
}
    /*
    *funcion registradora del helper de mandlebars
    */

    export function registerViteHelper(hbs){
        hbs.registerhelper('ViteAssets', ()=> {
            //sanitizando la salida del helper
            return new hbs.SafeString(viteAssets())
        })
    }
    









