// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
process.env.FLUENTFFMPEG_COV = false
//console.log(process.env)
import fluentFfmpeg from 'fluent-ffmpeg'
const ffmpegCommand = fluentFfmpeg()

console.log('Hello World!');



export function stop() {
  return 0
}

