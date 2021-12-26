// this file will give this declaration to every file in its folder but not child folders and files.
// if this type is needed to be used in more than one spot, a different solution must be found

export {};

declare global {
    interface Window {
        BLARG: string,
        filesys: {
            readSync: (dir: string, name: string) => string
        }
    }
}
