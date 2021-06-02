  
import React from 'react';
import {RecordRTCPromisesHandler}  from 'recordrtc';

const constraints={
   audio:true,
   video:{
       width:1280, height:720
   }
}
class RecordPage extends React.Component {
  
async startRecord() {
    try{
      
      const video = document.getElementById('video');
        var stream = await  navigator.mediaDevices.getUserMedia(constraints)
        window.stream = stream
        video.srcObject = stream
        var recorder = new RecordRTCPromisesHandler(stream,{type:'video' , MimeType:"video/webm"} , video)
        recorder.startRecording();
    }catch(e){
console.log(e)
    }
}
 async stopRecord(){
    const sleep = m => new Promise(r => setTimeout(r, m));
    await sleep(3000);
    await this.recorder.stopRecording();
    let blob = await  this.start.recorder.getBlob();
}

  render(){
    return(
      <div>
         <figure class="figure">
            <video id="video" controls="true" autoPlay="true"></video>
        </figure>
            <div>
        <button id="snap" onClick={this.startRecord}>Start Record</button>
            </div>

            <div>
        <button onClick={this.stopRecord.bind(this)}>Stop Record</button>
            </div>
      </div>
    )
  }
  
}


export default RecordPage;