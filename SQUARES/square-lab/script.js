document.addEventListener('DOMContent Loaded', function(){
    // let btn = document.createElement('button');
    // btn.innerText = 'Click to Add';
    // document.body.appendChild(btn);

    let container = document.createElement('div');

    let btn = document.createElement('button');
    btn.innerText = 'Add Square';
    btn.addEventListener('click', addSquare);
    document.body.appendChild(btn);
});


let colors = ['red', 'blue', 'green', 'cyan', 'yellow'];

document.addEventListener('DOMContentLoaded', function() {
    let btn = document.createElement('button');
    btn.innerText = 'Add Square';
    btn.addEventListener('click', addSquare);
    document.body.appendChild(btn);

    let container = document.createElement('div');
    container.id = 'square-container';
    document.body.appendChild(container);

    function addSquare() {
        let existingSquares = document.getElementsByClassName('square').length;
        let sq = document.createElement('div');
        sq.className = 'square';
        sq.id = existingSquares;

        sq.addEventListener('click', changeColor);
        sq.addEventListener('mouseenter', insertId);
        sq.addEventListener('mouseleave', removeId);
        sq.addEventListener('dblclick', removeNeighbor);

        container.appendChild(sq);
    }

    function changeColor(event) {
        let index = Math.floor(Math.random() * colors.length);
        let newColor = colors[index];
        // We need to set newColor as the backgroundColor of the clicked div
        this.style.backgroundColor = newColor;
        // event.target.style.backgroundColor = newColor;
    }

    function insertId() {
        let id = this.id;
        this.innerText = id;
    }

    function removeId() {
        this.innerText = '';
    }

    function removeNeighbor() {
        let id = this.id;

        if (id % 2 === 0) {
            // if even, remove the square after
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert('There are no elements to the right to remove.');
            }
        } else {
            // if odd, remove the square before
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert('There are no elements to the left to remove.');
            }
        }
    }
});