const gridSize = 16;
const gridConstructorArray = [gridSize,gridSize];

const gridInput = document.getElementById('inputGridSize');
gridInput.oninput = function(){
    document.getElementById('selectionDisplay').innerHTML = `GRID SIZE ${gridInput.value} `;
    removeGrid(gridConstructorArray);
    gridConstructorArray[0] = gridInput.value;
    gridConstructorArray[1] = gridInput.value; 
    constructGrid(gridConstructorArray);

}

let blackSelect = true;
let whiteSelect = false;
let RGBSelect = false;

function blackButtonFunction(){
    whiteSelect = false;
    RGBSelect = false;
    blackSelect = true;
    document.getElementById('selectionDisplay').style.borderColor = 'white';
    document.getElementById('selectionDisplay').style.backgroundColor = 'black';
    document.getElementById('selectionDisplay').style.color = 'white';
}

function whiteButtonFunction(){
    whiteSelect = true;
    RGBSelect = false;
    blackSelect = false;
    document.getElementById('selectionDisplay').style.borderColor = 'black';
    document.getElementById('selectionDisplay').style.backgroundColor = 'white';
    document.getElementById('selectionDisplay').style.color = 'black';
}
function RGBButtonFunction(){
    whiteSelect = false;
    RGBSelect = true;
    blackSelect = false;
    document.getElementById('selectionDisplay').style.borderColor = '#FF8AFF';
    document.getElementById('selectionDisplay').style.backgroundColor = '#7FFFD4';
    document.getElementById('selectionDisplay').style.color = '#FF8AFF';
}

gridInput.addEventListener('input', function(){
    gridSize = gridInput.value;
    location.reload();
    gridConstructorArray = [gridSize,gridSize];
    constructGrid(gridConstructorArray);
}, false);

function constructGrid(arraySize){
    for(let i = 0; i < arraySize[0]; i++)
    {
        const gridBox = document.getElementById('gridHolder');
        const addBox = document.createElement('div');
        addBox.classList.add('gridRow');
        addBox.id =`gridRow${i}`;
        gridBox.appendChild(addBox);
        for(let j = 0; j < arraySize[1]; j++)
        {
            const innerGridBox = document.getElementById(`gridRow${i}`);
            const addInnerBox = document.createElement('div');
            addInnerBox.classList.add('gridBox');
            addInnerBox.classList.add('gridBoxBackGround');
            if (i == 0){
                addInnerBox.classList.add('topBox');
            }
            if (j == 0){
                addInnerBox.classList.add('leftBox');
            } 
            addInnerBox.id = `innerBox${i}x${j}`;
            innerGridBox.appendChild(addInnerBox);
            let chooseColor = document.getElementById(`innerBox${i}x${j}`);
            chooseColor.addEventListener('mouseenter', function(event) {
                if (whiteSelect == true) {
                    event.target.style.backgroundColor = 'white';
                }
                else if (blackSelect == true) {
                    event.target.style.backgroundColor = 'black';
                    
                }
                else if (RGBSelect == true) {
                    let RGBPicker = Math.floor(Math.random()*4);
                    if (RGBPicker == 0) {
                        event.target.style.backgroundColor = '#FF8AFF'
                    }
                    else if (RGBPicker == 1) {
                        event.target.style.backgroundColor = '#7FFFD4'
                    }
                    else if (RGBPicker == 2) {
                        event.target.style.backgroundColor = '#FFFF33'
                    }
                    else {
                        event.target.style.backgroundColor = '#66FF66'
                    }
                }
            }, false); 
            

        }
    }
}

function removeGrid(arraySize){
    for (let i = 0; i< arraySize[0]; i++)
    {
        document.getElementById(`gridRow${i}`).outerHTML = "";
    }
}
constructGrid(gridConstructorArray);