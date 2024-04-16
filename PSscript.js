const header = document.querySelector('header');

header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = '#0056b3';
});

header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = '#0070d1';
});
