// function mensajeAleatorio(){
//     const mensaje=["Elige el camino que te llene de alegría", "Confía en tu intuición", "Aprende a escuchar tu voz interior.", "Un viejo amigo pasará por aquí", "La felicidad no es una meta, es un camino"];
//     const aleatorio=mensaje[Math.floor(Math.random()*mensaje.length)];
//     const button = document.querySelector("button");
//     elementoP.innerHTML = mensajeAleatorio

//     console.log(elementoP);


// }


const frases = [
      "Elige el camino que te llene de alegría",
      "Confía en tu intuición",
      "Aprende a escuchar tu voz interior.",
      "Un viejo amigo pasará por aquí",
      "La felicidad no es una meta, es un camino"
    ];

    const btn = document.getElementById('btnFrase');
    const pFrase = document.getElementById('frase');

    btn.addEventListener('click', () => {
      const indice = Math.floor(Math.random() * frases.length);
      pFrase.textContent = frases[indice]; 
         
    });


   