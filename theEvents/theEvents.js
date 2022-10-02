window.onload = function () {  
    var images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
    images[i].onclick = showImage;
    images[i].onmouseover = showImage;
    }
}

function showImage(eventObj) { 
    var image = eventObj.target;
    var name = image.id;
    name = name + '.jpg';
    image.src = name;

    setTimeout(reblur, 2000, image);
}

function reblur(image) { 
    var name = image.id;
    name = name + 'blur.jpg';
    image.src = name;
}