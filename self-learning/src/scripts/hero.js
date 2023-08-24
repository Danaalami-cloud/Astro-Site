const player = document.querySelector('.player');
const video = document.querySelector('video');

// function togglePlay() {
//     if(video.paused) {
//         video.play();
//         AnimationPlaybackEvent.classList.replace('fa-play')
//     }
// }

if (typeof video.loop == 'boolean') {
    video.loop = true;
}
video.play();