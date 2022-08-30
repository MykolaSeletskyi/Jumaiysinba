import { createFFmpeg, fetchFile, FFmpeg } from '@ffmpeg/ffmpeg';
import { v4 as uuidv4 } from 'uuid';
export class FFmpegWorker {
    private static instance:FFmpegWorker;
    private static ffmpegLoadPromise:Promise<void>;
    private static ffmpegInstance:FFmpeg;
    
    private constructor() { }
    
    public static get(): any {
        if (!FFmpegWorker.ffmpegInstance) {
            console.log("ffpmeg is creating")
            FFmpegWorker.instance = new FFmpegWorker();
            FFmpegWorker.ffmpegInstance = createFFmpeg({
                log: false,
            });;
            FFmpegWorker.ffmpegLoadPromise = FFmpegWorker.ffmpegInstance.load();
        }else{
            console.log("ffpmeg is created")
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

}