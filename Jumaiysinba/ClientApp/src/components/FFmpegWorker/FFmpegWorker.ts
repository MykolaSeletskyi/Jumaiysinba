import { createFFmpeg, fetchFile, FFmpeg } from '@ffmpeg/ffmpeg';
import { v4 as uuidv4 } from 'uuid';
export class FFmpegWorker {
    private static instance:FFmpegWorker;
    private static ffmpegLoadPromise:Promise<void>;
    private static ffmpegInstance:FFmpeg;
    
    private constructor() { }
    
    public static get(): any {
        if (!FFmpegWorker.ffmpegInstance) {
            FFmpegWorker.instance = new FFmpegWorker();
            FFmpegWorker.ffmpegInstance = createFFmpeg({
                log: false,
            });;
            FFmpegWorker.ffmpegLoadPromise = FFmpegWorker.ffmpegInstance.load();
        }
        return FFmpegWorker.instance;
    }

    public async FixDurationBlobWebm(webm:Blob):Promise<Blob>{
        await FFmpegWorker.ffmpegLoadPromise;
        let arrayBuffer = await webm.arrayBuffer();
        let tempFileName = uuidv4();
        FFmpegWorker.ffmpegInstance.FS('writeFile', `${tempFileName}.webm`, new Uint8Array(arrayBuffer));
        await FFmpegWorker.ffmpegInstance.run('-i', `${tempFileName}.webm`, '-c', 'copy', `${tempFileName}new.webm`);
        const data = FFmpegWorker.ffmpegInstance.FS('readFile',`${tempFileName}new.webm`);
        return new Blob([data.buffer]);
    }
    
    public SaveBlob(blob:Blob, fileName:string):void {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    
}