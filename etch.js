const gridSize = 16;
const gridConstructorArray = [gridSize,gridSize];

const gridInput = document.getElementById('inputGridSize');
gridInput.oninput = function(){
    document.getElementById('test').innerHTML = `GRID ${gridInput.value} SIZE`;
    removeGrid(gridConstructorArray);
    gridConstructorArray[0] = gridInput.value;
    gridConstructorArray[1] = gridInput.value; 
    constructGrid(gridConstructorArray);

}

function blackButtonFunction(){
    document.getElementById('test').style.borderColor = 'white';
    document.getElementById('test').style.backgroundColor = 'black';
    document.getElementById('test').style.color = 'white';
}

function whiteButtonFunction(){
    document.getElementById('test').style.borderColor = 'black';
    document.getElementById('test').style.backgroundColor = 'white';
    document.getElementById('test').style.color = 'black';
}
function RGBButtonFunction(){
    document.getElementById('test').style.borderColor = '#FF8AFF';
    document.getElementById('test').style.backgroundColor = '#7FFFD4';
    document.getElementById('test').style.color = '#FF8AFF';
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
            if (i == 0){
                addInnerBox.classList.add('topBox');
            }
            if (j == 0){
                addInnerBox.classList.add('leftBox');
            }
            addInnerBox.id = `innerBox${i}x${j}`;
            innerGridBox.appendChild(addInnerBox);

        }
    }
}

function removeGrid(arraySize){
    for (let i = 0; i< arraySize[0]; i++)
    {
        //for(let j = 0; j< arraySize[1]; j++){
        //    document.getElementById(`innerBox${i}x${i}`).remove;
        //}
        document.getElementById(`gridRow${i}`).outerHTML = "";
    }
}
constructGrid(gridConstructorArray);