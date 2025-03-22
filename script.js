var button = document.getElementById("btn");
var quotes = [
  "So many books, so little time",
  "A room without books is like a body without a soul.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "Always forgive your enemies; nothing annoys them so much",
];

let lastIndex = -1;
function clk() {
  var randomIndex;
  for (var i = 0; i < quotes.length; i++) {
    randomIndex = Math.floor(Math.random() * quotes.length);
    if (randomIndex !== lastIndex) {
      break;
    }
  }
  lastIndex = randomIndex;
  document.getElementById("inner").innerHTML = quotes[randomIndex];
}
