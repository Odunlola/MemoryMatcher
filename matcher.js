// Create variables
const cards = document.querySelectorAll('.card');
let cardTurn = false;
let pairOne, pairTwo;
let score = 0
const elm = document.querySelector('#score');
// create a function to ensure card flips when clicked
function flip() {
  //console.log('clicked');

  this.classList.add('flip');

  if (!cardTurn) {
    cardTurn = true;
    pairOne = this;
  //console.log ({cardTurn, pairOne});
} else {
    cardTurn = false;
   pairTwo = this;

//console.log(pairOne.dataset.image);
//console.log(pairTwo.dataset.image);

// create a function to detect when their is a perfect match of each musician to their song title.
// use of dataset to match the pairing cards together.
//if flipped cards do not match reset it back to the front view.

    if (pairOne.dataset.image === pairTwo.dataset.image) {
//Assign a score of 2 to each paired cards and replace the #score element in HTML
//  remove event listner from cards once they match perfectly to enable stay in position.
score=score +2;
elm.innerHTML = score;

pairOne.removeEventListener('click', flip)();
pairTwo.removeEventListener('click', flip);

} else {
 //console.log('removal of listner working')

  setTimeout(() => {
    pairOne.classList.remove('flip');
    pairTwo.classList.remove('flip');
}, 1000);

}
}
}
cards.forEach(card => card.addEventListener('click', flip));