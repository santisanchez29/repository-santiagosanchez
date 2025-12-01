onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.25));
  });
});
onEvent("music", "click", function( ) {
  playSound("Mi-Burrito-Sabanero--Juana--Mundo-Canticuentos-(1).mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://img.freepik.com/vector-gratis/lindo-icono-personajes-navidad-aislado_1308-121667.jpg");
});
