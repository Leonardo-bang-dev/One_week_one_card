function active_back_card (ev) {
    const card = ev.currentTarget
    card.classList.toggle('active')
}

const cards = document.getElementsByClassName('card_inner')

for (i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', active_back_card)
}

console.log(cards)