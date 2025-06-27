const imagenes={
    naturaleza:[
        "img/img1.jpg",
        "img/img2.jpg",
    ], 
    ciudad:[
        "img/img3.jpg",
        "img/img4.jpg",
    ]
};

function mostrarCategoria(categoria){
    const galeria=document.getElementById("galeria");
    galeria.innerHTML="";
    imagenes[categoria].forEach(element => { 
        const img=document.createElement("img");
        img.src=element
        galeria.appendChild(img);
        
    });
}

function cambiarColor(){
    const colores=["#e74c3c", "#8e44ad", "#27a60", "#f39c12", "#1abc9c"];
    const aleatorio=colores[Math.floor(Math.random()*colores.length)];
    document.getElementById("miTarjeta").style.backgroundColor=aleatorio;
}



mostrarCategoria('naturaleza')




