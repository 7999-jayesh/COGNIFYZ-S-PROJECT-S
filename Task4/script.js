const button = document.getElementById('colorButton');
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFD700', '#4CAF50', '#FF69B4'];
let colorIndex = 0;
button.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;  
});