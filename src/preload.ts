import { contextBridge, ipcRenderer } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

let isPackaged: boolean;
ipcRenderer.invoke('isPackaged').then((result) => isPackaged = result);

contextBridge.exposeInMainWorld('BLARG', process.resourcesPath);

contextBridge.exposeInMainWorld('filesys', {
    readSync: (dir: string, name: string): string => {
        let filePrefix: string;
        // isPackaged returns true when in "production"
        if (isPackaged) {
            filePrefix = process.resourcesPath.replace('\\\\', '\\');
        } else {
            filePrefix = '.'
        }
        const filePath = filePrefix + path.sep + dir + path.sep + name;

        const fileContents = fs.readFileSync(filePath, {encoding: 'utf-8'});
        
        return fileContents;
    }
})
