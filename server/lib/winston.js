//importanto el core de winstonm
import winston, {format} from 'winston'
import path from 'node:path'
import fs from 'node:fs'
import DailyRotateFile from 'winston-daily-rotate-file';

//desestructurar funciones utiles de format
const {combine,timestamp,label,printf,colorize,prettyPrint}=
format

//creando variable del directorio raiz
const __rootdir = path.resolve(process.cwd());

//creando directorio de Logs
const logsDir= path.join(__rootdir,"logs");
if(!fs.existsSync(logsDir)){
  fs.mkdirSync(logsDir,{recursive:true})
}

//definiendo esquema de colores
const colors= { 
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',

};

// agregando ese esquema de winston
winston.addColor(colors);

//creando plantillas para los formatos 

//formato de consola
const myConsoleformat = combine()
//colores dek formato
colorize({all:true}),
// agregando una etiqueta
label({label:  :})

//funcion de impresion
printf((info) => `${info.level} > ${info.label}`)