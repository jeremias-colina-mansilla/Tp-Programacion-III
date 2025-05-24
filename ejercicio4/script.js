const imcform = $('imcform')

imcform.addEventListener('submit', (e)=> {
    const peso = +imcform['peso'].value
    const altura= +imcform['altura'].value
    alert(`tu IMC es ${peso/(altura*altura)}`)
    e.preventDefault()

})
function $(elemento) {
    return document.getElementById(elemento)
}