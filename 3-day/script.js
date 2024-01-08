function spin_card(ev) {
    const card = ev.currentTarget
    card.classList.toggle("spin")
}

const cards = document.getElementsByClassName('card')

for (i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', spin_card)
}

console.log(cards)