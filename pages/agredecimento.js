function pagarNota() {
    let nota = localStorage.getItem("nota", nota)

    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML= `voce selecionou ${nota} de 5`
}

pagarNota()