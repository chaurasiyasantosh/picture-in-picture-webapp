const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try {
        const meadiaSelect =  await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject= meadiaSelect;
        videoElement.onloadeddata =() =>{
            videoElement.play();
        }



    } catch (error) {
        
    }
}

button.addEventListener('click',  async ()=>{

    // button disabled
 button.disabled =true;
//  start picture in picture.
 await videoElement.requestPictureInPicture();
//  reset button
 button.requestPictureInPicture= false;

})



// on load
selectMediaStream();