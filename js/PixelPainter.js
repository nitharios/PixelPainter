// grid (canvas to paint on)
// swatch (colors)
// erase
// clear

var painterBody = document.getElementById('pixelPainter');
var painterCanvas = document.createElement('div');
var painterPalette = document.createElement('div');
var buttonDiv = document.createElement('div');
var eraseButton = document.createElement('button');
var clearButton = document.createElement('button');
var currentColor;

var colorArr = ['262c04', 'ffc0cb', 'f2df4f', 'eeeeee', 'c6e2ff', '4169e1', '3b411d', 'f10714', '0d8163', '255083', '5f4236', '3496fa', 'fa02d4', '3ff206', '560e3f', '00fa9a'];

// add ids to each created element
// painterBody.id = 'painterBody';
// document.body.appendChild(painterBody);

painterCanvas.className = 'painterCanvas';
painterBody.appendChild(painterCanvas);

painterPalette.className = 'painterPalette';
painterBody.appendChild(painterPalette);

buttonDiv.className = 'buttonDiv';
painterPalette.appendChild(buttonDiv);

// Create grid canvas
function canvasGrid(height, width) {
  for(var i = 0; i < height; i++) {
    var pixelRow = document.createElement("div");
    pixelRow.className = "pixelRow";
    painterCanvas.appendChild(pixelRow);
    for(var j = 0; j < width; j++) {
      var canvasCell = document.createElement("div");
      canvasCell.className = "canvasCell";
      canvasCell.addEventListener("click", function() {
        event.target.style.backgroundColor = currentColor;
      });
      pixelRow.appendChild(canvasCell);
    }
  }
}

// Create color palette
function paletteGrid(height, width) {
  for(var i = 0, k = 0; i < height; i++) {
    var colorRow = document.createElement("div");
    colorRow.className = "colorRow";
    painterPalette.appendChild(colorRow);

    for(var j = 0; j < width; j++) {
      var paletteCell = document.createElement("div");
      paletteCell.className = "paletteCell";
      paletteCell.style.backgroundColor = colorArr[k];
      paletteCell.addEventListener("click", function() {
        currentColor = event.target.style.backgroundColor;
      });
      colorRow.appendChild(paletteCell);
      k++;
    }
  }
}

canvasGrid(10,10);
paletteGrid(4,4);

//BUTTONS
eraseButton.className = 'buttons';
eraseButton.id = 'eraseButton';
eraseButton.innerHTML = 'Erase';
buttonDiv.appendChild(eraseButton);
eraseButton.addEventListener('click', function() {
  currentColor = 'ffffff';
});

clearButton.className = 'buttons';
clearButton.id = 'clearButton';
clearButton.innerHTML = 'Clear';
buttonDiv.appendChild(clearButton);
clearButton.addEventListener('click', function() {
  for (var i = 0; i < document.getElementsByClassName('canvasCell').length; i++) {
    document.getElementsByClassName('canvasCell')[i].style.backgroundColor = 'ffffff'
  }
  currentColor = 'ffffff';
});

//CREATING GRID
/*function ppCanvas(pixelNumber){
  for(var i = 0; i < pixelNumber; i++){
    var canvasCell = document.createElement("div");
    canvasCell.className = "canvasCell";
    painterCanvas.appendChild(canvasCell);
    canvasCell.addEventListener("click", function() {
      event.target.style.backgroundColor = currentColor;
    })
  }
}
*/
//ppCanvas(99);

//CREATING COLOR PALLETE
/* function ppColor(pixelNumber){
  for(var i = 0; i < pixelNumber; i++){
    var paletteCell = document.createElement("div");
    paletteCell.className = "paletteCell";
    painterPalette.appendChild(paletteCell);
    paletteCell.style.backgroundColor = colorArr[i];
    paletteCell.addEventListener("click", function() {
      currentColor = event.target.style.backgroundColor;
      console.log(currentColor);
    });
  }
}

ppColor(16);
*/






