document.getElementById("verify").onclick = function (event) {
    event.preventDefault();
    verify();
};

function verify() {

        const numRows = 9;
        const numCols = 9;
        const table = [];

        for (let i = 0; i < numRows; i++) {
            table[i] = []
            for (let j = 0; j < numCols; j++) {
                table[i][j] = i * numCols + j;
            }
        };

        const data = {
            tableData: table
        };

        arrayData("http://31.33.247.37:3000/api/check", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error:", error)
            });
    };

async function arrayData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
