//biblioteca file Stream
import fs from 'node:fs'
//biblioteca de rutas
import path from 'node:path'

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
}
