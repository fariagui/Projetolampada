const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1 //retorna maior que -1 para manter a imagem quebrada

}


function lampOn (){
    if( !isLampBroken () )  { // ! significa não
      lamp.src = 'ligadaa.jpg';
    }

}

function lampOff (){
    if(!isLampBroken() ){
    lamp.src = 'desligadaa.jpg';
    }
}

function lampBroken(){
    lamp.src = 'quebradaa.jpg';

}
turnOn.addEventListener( 'click' , lampOn);
turnOff.addEventListener( 'click' , lampOff);
lamp.addEventListener( 'mouseover' , lampOn);
lamp.addEventListener( 'mouseleave', lampOff);
lamp.addEventListener( 'dblclick' , lampBroken);

