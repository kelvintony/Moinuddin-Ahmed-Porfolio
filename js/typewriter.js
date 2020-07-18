const texts = [
  "I am Web/Game Developer.",
  "I am Creative.",
  "I Love Design.",
  "I am Artist.",
  "I am Tech Enthusiast.",
  "I Love Learning New Skills.",
];
let count = 0;
let index = 0;
let nowText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  nowText = texts[count];
  letter = nowText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === nowText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 150);
})();
