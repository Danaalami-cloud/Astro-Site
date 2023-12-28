// const player = document.querySelector('.player');
// const video = document.querySelector('video');
// const iframe = document.querySelector('iframe-video');

// import wires from "../assets/wires.mp4";
// const iframe = document.querySelector('iframe-video');


// function togglePlay() {
//     if(video.paused) {
//         video.play();
//         AnimationPlaybackEvent.classList.replace('fa-play')
//     }
// }

// if (typeof video.loop == 'boolean') {
//     video.loop = true;
// }
// video.play();
 

// if (typeof iframe.loop === 'boolean') {
//     iframe.loop = true;
// }
// iframe.play();
// document.addEventListener('DOMContentLoaded', function() {
    // iframe.onload = function() {
    //     iframe.contentWindow.document.body.innerHTML = '<iframe src="wires.mp4" autoplay loop></iframe>';
    // };




    // function playIframeVideoOnLoop(overlayIframe) {
    //     const iframe = document.getElementById(overlayIframe);
    //     iframe.src = iframe.src + "&loop=1";
    // }

    // playIframeVideoOnLoop("overlayIframe"); 

    window.playIframeVideoOnLoop = function(overlayIframe) {
        const iframe = document.getElementById(overlayIframe);
        iframe.src = iframe.src + "&loop=1";
      };