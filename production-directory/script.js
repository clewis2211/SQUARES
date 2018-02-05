var squareID = 0;

var colors = ['green', 'red', 'blue', 'gray', 'pink', 'purple'];
document.addEventListener('DOMContentLoaded', function(){
    let btn = document.createElement('button');
    btn.innerText = 'Add Square';
    btn.innerText
    // btn.addEventListener('click', newSquare);
    document.body.appendChild(btn);

    let squareDiv = document.createElement('div');
    squareDiv.id = 'squareDiv';
    document.body.appendChild(squareDiv);

    btn.addEventListener('click', function(){
        let sq = document.createElement('div');
        sq.id = squareID++;
        // sq.innerText = squareID;
        sq.className = 'mySquares'
        document.body.appendChild(sq);

        sq.addEventListener('mouseenter', mouseEnter);
        sq.addEventListener('mouseleave', mouseLeave);
        sq.addEventListener('click', changeColor);
        sq.addEventListener('dblclick', removeSquare)
    });

    function mouseEnter(){
        let id = this.id;
        this.innerText = id;
    }

    function mouseLeave(){
        let id = this.id;
        this.innerText = '';
    }

    // btn.addEventListener('click', function(){
    //     let sq = document.createElement('div');
    // });
function changeColor(event) {
        let i = Math.floor(Math.random() * colors.length);
        let newColor = colors[i];
        // We need to set newColor as the backgroundColor of the clicked div
        this.style.backgroundColor = newColor;
        // event.target.style.backgroundColor = newColor;
    }

    function removeSquare(){
        let id = this.id;
        
        if(id === 2 || 2+2){
            this.nextSibling.remove();
        } else if (id === 1 || 1+3){
            this.previousSibling.remove();
        }
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

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        let moreColors = this.color
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
