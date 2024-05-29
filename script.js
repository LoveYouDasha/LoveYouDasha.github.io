document.getElementById('loveButton').addEventListener('click', function() {
    document.getElementById('loveMessage').style.display = 'block';
    var audio = new Audio('click.mp3'); 
    audio.play();
});

document.getElementById('cwuaButton').addEventListener('click', function() {
    document.getElementById('cwuaMessage').style.display = 'block';
    var audio = new Audio('cwua.mp3'); 
    audio.play();
});

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.visibles');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
});

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.visiblesimage');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.getElementById('ImageButton1').addEventListener('click', function() {
    var imageUrl = 'dasha.png';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButton2').addEventListener('click', function() {
    var imageUrl = 'meme1.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButton3').addEventListener('click', function() {
    var imageUrl = 'meme2.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButton4').addEventListener('click', function() {
    var imageUrl = 'meme3.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButtonPlak').addEventListener('click', function() {
    var imageUrl = 'sad.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButtonNMT').addEventListener('click', function() {
    var imageUrl = 'NMT.png';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButtonNMT2').addEventListener('click', function() {
    var imageUrl = 'NMT2.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButtonSisi').addEventListener('click', function() {
    var imageUrl = 'sisi.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButtonHen').addEventListener('click', function() {
    var imageUrl = 'hen.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});

document.getElementById('ImageButtonHen2').addEventListener('click', function() {
    var imageUrl = 'hen2.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});


document.getElementById('ImageButton5').addEventListener('click', function() {
    var imageUrl = 'meme4.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});
document.getElementById('ImageButton6').addEventListener('click', function() {
    var imageUrl = 'meme5.jpg';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});
document.getElementById('ImageButton7').addEventListener('click', function() {
    var imageUrl = 'meme6.png';
    var newTab = window.open(imageUrl, '_blank');
    newTab.focus();
});