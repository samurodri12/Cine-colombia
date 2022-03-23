let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(evento){
    if(evento.target.classlist.contains("w-100")){

        evento.target.src="imagenes/rojo.png"
    }
})


let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDeFault()
    let asiento=document.getElementById("asiento").value
    let cantidad=document.getElementById("cantidad").value

    let valorPrefrencial=22000
    let valorGeneral=15000

    if(asiento=="preferencial"){

    alert("el total de su compra es:"+(valorPrefrencial*cantidad))

    }else {
    alert("el total de su compra:"+(valorGeneral*cantidad))
    }
})
