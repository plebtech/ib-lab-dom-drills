document.addEventListener("DOMContentLoaded", function() {
    
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

})