let precio = 400000
let contador = 1

cantidad = document.querySelector('.cantidad')
precioBase = document.querySelector('.precio-inicial')
precioBase.innerHTML = precio 
valorTotal2 = document.querySelector('.valor-total')


btnPlus.addEventListener("click", ()=>{
    contador +=1
    cantidad.innerHTML = contador
    valorTotal = contador * precio
    valorTotal2.innerHTML= valorTotal
})

btnMinus.addEventListener("click", () =>{
    contador -=1
    if (contador < 1)
        contador = 1

    cantidad.innerHTML = contador
    valorTotal = contador * precio
    valorTotal2.innerHTML= valorTotal
})

