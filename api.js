document.getElementById("new").onclick = function() {remplissage()};

function remplissage() {
    let grid = fetch('http://31.33.247.37:3000/api/sudoku')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        // return data;
        let sudokuData = data.sudoku;
        const tableBody = document.querySelector(".total");
        tableBody.innerHTML = '';
        for (let i = 0; i < sudokuData.length; i++) {
            const tableCreate = document.createElement("table");
            const tableRow = document.createElement("tr");
            for (let j = 0; j < sudokuData[i].length; j++) {
                const tableCase = document.createElement("td");
                tableCase.innerText = sudokuData[i][j];
                tableRow.appendChild(tableCase);        
            }
            tableCreate.appendChild(tableRow);
            tableBody.appendChild(tableCreate);
        }
    })
    .catch(err => {
        console.log(err);
    })
}
// let sudokuData = grid.sudoku;

// for (let i = 0; i < sudokuData.length; i++) {
//     for (let j = 0; j < sudokuData[i].length; j++) {
//         const tableBody = document.querySelector(".total");
//         const tableCreate = document.createElement("table");
//         const tableRow = document.createElement("tr");
//         const tableCase = document.createElement("td");
//         tableCase.innerText = grid.sudoku[i][j];

//         tableBody.appendChild(tableCreate);
//         tableCreate.appendChild(tableRow);
//         tableRow.appendChild(tableCase);
//     }
// }
