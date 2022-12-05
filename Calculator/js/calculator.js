const result = document.getElementById ("answer");

function resultAssign () {
  num = 3 + 5 + 500 + 50 + 87 + 2;
  result.innerHTML = num;
  console.log ("Variables num represents the number:" + num);
}

// resultAssign()


function addTwoPlusTwo () {
  result.innerHTML = 2 + 2;
}

function addFivePlusTen () {
  result.innerHTML = 5 + 10;
}

function addSixPlusTwentySix () {
  result.innerHTML = 6 + 26;
}

addTwoPlusTwo()
addFivePlusTen()
addSixPlusTwentySix()
