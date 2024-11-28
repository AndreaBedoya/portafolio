function modo() {
    const body = document.querySelector ("#body")
    body.classList.toggle ("noche")
}


const btnModo =document.querySelector ("#btn-modo")
document.getElementById("btn-modo").addEventListener("click", modo)
