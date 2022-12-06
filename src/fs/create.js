import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); //путь к файлу create.js D:\NODEJS\node-nodejs-basics\src\fs\create.js
const __dirname = dirname(__filename); //путь к родительской папке (тоесть fs) D:\NODEJS\node-nodejs-basics\src\fs

const create = async () => {
    const src = join(__dirname, 'files', 'fresh.txt') //join - склеивает две части пути
    const textContent = 'I am fresh and young';
    const textError = 'FS operation failed';

    try { 
        await  writeFile(src, textContent,  { flag: 'wx' });
    }
    catch (err) {
        throw new Error(textError);

    }    
};

create();