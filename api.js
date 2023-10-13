document.getElementById("new").onclick = function() {
    creation();
};

function creation() {
    let grid = fetch('http://31.33.247.37:3000/api/sudoku')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (Array.isArray(data)) {
                const tableBody = document.querySelector(".grille");
                tableBody.innerHTML = '';
				const tableCreate = document.createElement("table");
				
                for (let i = 0; i < data.length; i++) {
                    const tableRow = document.createElement("tr");

                    for (let j = 0; j < data[i].length; j++) {
                        const tableCase = document.createElement("td");
						
						if (data[i][j] != '0') {
							tableCase.innerText = data[i][j];
						} else {
							const input = document.createElement('input');
							input.type = "text";
                            input.maxLength = "1";
							tableCase.appendChild(input);
						}

                        tableRow.appendChild(tableCase);
                    }

					tableCreate.appendChild(tableRow);
					tableBody.appendChild(tableCreate);    
                }
            } else {
                console.log("Les données ne sont pas dans le format attendu.");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    