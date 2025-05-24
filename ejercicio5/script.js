const constructora = $('constructora')
const resultado = $('resultado')

constructora.addEventListener('submit', (e)=> {
    const ladoA = +constructora['ladoA'].value
    const ladoB = +constructora['ladoB'].value
    const ladoC = +constructora['ladoC'].value
    if (ladoA > ladoC){
    const AreaTriangulo = (ladoB * (ladoA-ladoC))/2
    const AreaRectangulo = (ladoB * ladoC)
    const AreaTotal = AreaRectangulo + AreaTriangulo
    resultado.innerText += AreaTotal
}
else{
    alert("Recuerde que el lado C tiene que ser menor que el lado A ")
}
    e.preventDefault()
})

function $(elemento) {
    return document.getElementById(elemento)
}