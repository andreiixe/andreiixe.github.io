var divs = document.querySelectorAll('.ExploreContent');

function toggleDivs() {
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].style.display === 'none' || divs[i].style.display === '') {
            divs[i].style.display = 'block';
        } else {
            divs[i].style.display = 'none';
        }
    }
    // Actualizează textul butonului
    var button = document.getElementById('toggleButton');
    var buttonText = button.innerHTML === 'Explore' ? "Don't Show" : 'Explore';
    button.innerHTML = buttonText;
}
