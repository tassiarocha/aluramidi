function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
            elemento.play();
            //  console.log(elemento.localName === 'audio'); 
    }
    else{
        alert('Elemento não encontrado ou seletor invalido')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//enquanto
/* while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template String
    const idAudio = `#som_${instrumento}`;
   // console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    contador ++; }*/

    //console.log(contador);

//PARA  
for(let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template String
   
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){

       // console.log(evento.code == 'Space')

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}    


