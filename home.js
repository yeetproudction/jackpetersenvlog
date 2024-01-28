
const cards = document.getElementsByClassName('article-card');
var j = 1;


function leftarrowclick() {
  if(j == 2) {
    return 0;
  }
  console.log("click");
  for(var i = 0; i < cards.length; i++) {
  cards[i].style.right = (j * 100) + '%';
  console.log(cards[i].style.right, j);
  }
  j++;
}

function rightarrowclick() {
  if(j == 1) {
    return 0;
  }
  for(var i = 0; i < cards.length; i++) {
  cards[i].style.right = ((j-2) * 100) + '%';
  console.log(cards[i].style.right, j);
  }
  j--;
}
