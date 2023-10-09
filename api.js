document.getElementById("new").onclick = function() {remplissage()};

function remplissage() {
    let grid = fetch('http://31.33.247.37:3000/api/sudoku')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        return data;
    })
    .catch(err => {
        console.log(err);
    })

    let sudokuData = grid.sudoku;

    for (let i = 0; i <= sudokuData.lenght; i++) {
        for (let j = 0; j <= sudokuData[i].lenght; j++) {
            const tableBody = document.querySelector("body");
            const tableCreate = document.createElement("table");
            const tableRow = document.createElement("tr");
            const tableCase = document.createElement("td");
            tableCase.innerText = grid.sudoku[i][j];

            tableBody.appendChild(tableCreate);
            tableCreate.appendChild(tableRow);
            tableRow.appendChild(tableCase);
        }
    }
}
