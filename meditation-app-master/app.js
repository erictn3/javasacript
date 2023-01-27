const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')

    // sounds
    const sounds = document.querySelectorAll('.sound-picker button')
    // time display
    const timeDisplay = document.querySelector('.time-display')
    // get length of outline
    const outlineLength = outline.getTotalLength();
    // duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;

    outline.style.strokeDashoffset = outlineLength;

    // play sound 
    play.addEventListener('click', () => {
        checkPlaying(song)
    })

    // create a function to specific to stop and play the sounds
    const checkPlaying = song => {
        if (song.paused) {
            video.play();
            song.play();
            play.src = './svg/pause.svg'
        }
        else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg'
        }
    }

    // we can animate the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
    }

}


app();