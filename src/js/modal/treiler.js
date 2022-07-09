const btnTreilerYouTube = document.querySelector('.btn__trailer');
const modal = document.querySelector('.modal');
const video = document.querySelector('.video-treiler')

btnTreilerYouTube.addEventListener('click', openTreiler)
function openTreiler (){
    let a = `https://www.youtube.com/watch?v=TheLedgeofficialtrailer`

    
    modal.classList.add('is-hidden');
    video.classList.remove('is-hidden');
}