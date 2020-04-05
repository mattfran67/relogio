// Faz os ponteiros girarem a cada 100 milissegundos
var s = 0, m = 0, h = 0, date;

var id = setInterval(frame, 100);

// Pega os ponteiros do relogio
var sec = document.getElementsByClassName('sec')[0];
var min = document.getElementsByClassName('min')[0];
var hour = document.getElementsByClassName('hour')[0];

// A função que vai ser executada a cada 100 milissegundos
function frame() {
  date = new Date();
  s = date.getSeconds() * 6 - 90;
  m = date.getMinutes() * 6 - 90;
  h = date.getHours() * 30 - 450;

  // Faz os ponteiros girarem
  sec.style.transform = "rotate(" + s + "deg)";
  min.style.transform = "rotate(" + m + "deg)";
  hour.style.transform = "rotate(" + h + "deg)";
}