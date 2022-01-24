const gridSize = 16;
const gridConstructorArray = [gridSize,gridSize];

const gridInput = document.getElementById('inputGridSize');

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
            addInnerBox.id = `innerBox${i}x${j}`;
            innerGridBox.appendChild(addInnerBox);

        }
    }
}

function removeGrid(arraySize){
    for (let i = 0; i< arraySize[0]; i++)
    {
        for(let j = 0; j< arraySize[0]; j++){
            document.getElementById(`innerBox${i}x${i}`).outerHTML = "";
        }
        document.getElementById(`gridRow${i}`).outerHTML = "";
    }
}
constructGrid(gridConstructorArray);