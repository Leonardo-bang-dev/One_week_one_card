
// Adiciona +1 na quantidade de items
function add_qtd_item(ev) {
    const input = ev.currentTarget.parentNode.children[1]
    let value = Number(input.value)
    value = value + 1
    input.value = value
}


// Remove -1 na quantidade de items
function remove_qtd_item(ev) {
    const input = ev.currentTarget.parentNode.children[1]
    let value = Number(input.value)
    if (value > 1){
        value = value - 1
    }
    input.value = value
}

// Pega os botões dos cards
const btns_more = document.querySelectorAll('.btn_more')
const btns_less = document.querySelectorAll('.btn_less')

// Adiciona o evento add_qtd_item nos botões de +
for(i=0; i<btns_more.length;i++) {
    btns_more[i].addEventListener('click', add_qtd_item)
}

// Adiciona o evento remove_qtd_item nos botões de -
for(i=0; i<btns_less.length; i++) {
    btns_less[i].addEventListener('click', remove_qtd_item)
}