var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
desaparecer = document.getElementById('desaparecer'),
src = document.getElementById('src'),
h3 = document.getElementById('h3'),
h4 = document.getElementById('h4');
video = document.getElementById('video');
aparecer = document.getElementById('aparecer');



btnAbrirPopup.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    h3.classList.add('active');
   // video.add('active');
   
    
    // video.classList.add('video');
    // vi.classList.add('active');
});


btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    
    // video.classList.remove('video');
    // video.classList.removeAttr('active');
  //  video.pause();
  //  video.currentTime = 0;
    
    // enlace.classList.removeAttr('src');

});

desaparecer.addEventListener('click',function(){  
    document.getElementById('h3').style.display = 'none';
    document.getElementById('video').style.display = 'none';
    document.getElementById('video');
});

aparecer.addEventListener('click',function(){
    document.getElementById('h3').style.display = 'block';
    document.getElementById('video').style.display = 'block';
    document.getElementById('video');
});
// desaparecer.addEventListener('click',function(){  
//    h3.remove();   
// });

// aparecer.addEventListener('click',function(){
//    h3.after('active');
//    h3.add('active');

// });

// function pauseVid() { 
//     video.pause(); 
// } 

// var video = document.getElementById("video");
// function stopVideo(){
//      video.stopVideo();
//      video.currentTime = 0;
// }





//////////////////////////////////2//////////////////////////////////////////


// var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
// overlay2 = document.getElementById('overlay2'),
// popup2 = document.getElementById('popup2'),
// btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');



// btnAbrirPopup2.addEventListener('click',function(){
//     overlay2.classList.add('active');
//     popup2.classList.add('active');
// });

// btnCerrarPopup2.addEventListener('click',function(){
//     overlay2.classList.remove('active');
//     popup2.classList.remove('active');
// });


















