$(document).ready(main);

var contador = 1;

function main() {
$('.menu_bar').click(function(){
//$('nav').toggle();
if(contador == 1){
    $('nav').animate({
        left:'0'
    });
    contador = 0;
}else{
    contador = 1;
    $('nav').animate({
        left:'-100%'
    });

}
});}




let ubicacionPrincipal  = window.pageYOffset; 
window.onscroll = function()
{
    let Desplazamiento_actual = window.pageYOffset; 
    if(ubicacionPrincipal >= Desplazamiento_actual)
    {
        document.getElementById('navbar').style.top = '0';
    }
    else
     {
        document.getElementById('navbar').style.top = '100%';
     }

     if(ubicacionPrincipal <= Desplazamiento_actual)
     {
         document.getElementById('navbar').style.top = '100%';
     }
     else
      {
         document.getElementById('navbar').style.top = '0';
      }
    //if(ubicacionPrincipal <= Desplazamiento_actual)
   // {
   //     document.getElementById('navbar').style.top = '-100%';
   // }
    // else
    // {
    //     document.getElementById('navbar').style.top = '100%';
    // }
  
    ubicacionPrincipal = Desplazamiento_actual;
}
