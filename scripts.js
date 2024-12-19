function showVideo(video){
    let div = document.getElementById('popup');
    div.innerHTML=" <iframe width='420' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY' class='centreClass' allow='fullscreen;'> </iframe>"
    div.style.display="block"
}

function hidePopup(){
    let div = document.getElementById('popup');
        div.style.display="none"
}