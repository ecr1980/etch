const gridSize = 25;
const gridConstructorArray = [gridSize,gridSize];

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

constructGrid(gridConstructorArray);