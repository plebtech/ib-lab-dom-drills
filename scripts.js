document.addEventListener("DOMContentLoaded", function () {

    let headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';
    document.body.appendChild(headerContainer);

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    headerContainer.appendChild(h1);
    h1.className = 'h1';

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);
    headerContainer.appendChild(h2);
    h2.className = 'h2';

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    headerContainer.appendChild(h3);
    h3.className = 'h3';

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    headerContainer.appendChild(h4);
    h4.className = 'h4';

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5");
    h5.appendChild(h5Text);
    headerContainer.appendChild(h5);
    h5.className = 'h5';

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6");
    h6.appendChild(h6Text);
    headerContainer.appendChild(h6);
    h6.className = 'h6';

    // Create and array of 8 colors, add an event listener that changes the color of a heading to a random color from the array when it is double clicked.
    let headers = document.querySelectorAll('.h1, .h2, .h3, .h4, .h5, .h6');
    headers.forEach(function (h) {
        h.addEventListener('dblclick', hClicked);
    });
    function hClicked(e) {
        randomColor(e);
    }
    let colors = ['blue', 'red', 'green', 'yellow', 'dark-grey', 'light-grey', 'purple', 'orange'];
    function randomColor(e) {
        e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    }

    // Create an event listener that calls the new list item function every time the button is clicked.

    let addStatus = document.querySelector('.add-list');
    addStatus.addEventListener('click', addToList);

    // In the scripts.js file, write a function that inserts a list item, have the first item say "This is list item 1" and any subsequent list item should have the number incremented by 1.

    let listCount = 1;
    function addToList() {
        let li = document.createElement('li');
        let liText = document.createTextNode("This is list item " + listCount);
        li.appendChild(liText);
        li.className = 'li';
        document.body.appendChild(li);
        listCount++;
        listListen();
    }

    // Using the same random color function created above, apply an event listener that when a list item is clicked once, it changes the color of the font to one fo the 8 random colors.

    function listListen() {
        let listItems = document.querySelectorAll('.li');
        listItems.forEach(function (l) {
            l.addEventListener('click', liClicked);
            l.addEventListener('dblclick', liDoubleClicked);
        });
        function liClicked(e) {
            randomColor(e);
        };

        // Create a function that if a list item is double clicked it removes the list item from the DOM.
        function liDoubleClicked(e) {
            e.target.remove();
        }
    };

})

