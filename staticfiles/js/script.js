document.addEventListener('DOMContentLoaded', () => {
    function changeHeaderBackgroundOnScroll() {
        const header = document.querySelector('header');

        if (header) { // Check if the header element exists
            if (window.scrollY > 0) {
                header.style.backgroundColor = 'white';
            } else {
                header.style.backgroundColor = 'transparent';
            }
        } else {
            console.error("Header not found!");
        }
    }

    window.addEventListener('scroll', changeHeaderBackgroundOnScroll);
});