let botoes = document.querySelectorAll(".botoes button")
botao.foreach(botao => {
    botao.addeventlistener ("click", guardarNota)
})

function guardarNota(){
    let nota = evento.target.innertext

    localStorage.setItem("nota", nota)

}