const divElement = document.querySelector('.hover-div');

    divElement.addEventListener('mouseover', function() {
      divElement.style.backgroundColor = 'yellow';
    });

    divElement.addEventListener('mouseout', function() {
      divElement.style.backgroundColor = 'lightblue';
    });

    