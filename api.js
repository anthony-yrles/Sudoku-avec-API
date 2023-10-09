let grid = fetch('http://31.33.247.37:3000/api/sudoku')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        return data;
    })
    .catch(err => {
        console.log(err);
    })

