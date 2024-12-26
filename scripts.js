function showVideo(video){
    let div = document.getElementById('popup');
    if (video == 'foryou'){
        div.innerHTML="<iframe width='420' height='345' src=' https://www.youtube.com/embed/QNJ6KpKofUo?si=t4JxK2Xc7_huCyBp' class='centreClass' allow='fullscreen;' anonymous> </iframe>"
        div.style.display="block"
       
    }
    else{
    div.innerHTML=" <iframe width='420' height='345' src='https://www.youtube.com/embed/tgbNymZ7vqY' class='centreClass' allow='fullscreen;'> </iframe>"
    div.style.display="block"
    }
}

function hidePopup(){
    let div = document.getElementById('popup');
        div.style.display="none"
}