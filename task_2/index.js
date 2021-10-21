// yourProgram ../../folder/ => удалить папку (рекурсивно удалить внутренние папки)
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirRm = path.join(__dirname, process.argv[2]);

fs.opendir(dirRm, (err, dir) => {
  if (err) {
    console.log(err.message);
  }
  fs.rm(dir.path, { recursive: true, force: true }, (errRm) => {
    if (errRm) {
      console.log(errRm.message);
    }
  });
});
