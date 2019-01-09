var five = require("johnny-five"),board, led;
 
board = new five.Board();
 
board.on("ready", function() {
  led = new five.Led(12);
  led.strobe(1000); 
});