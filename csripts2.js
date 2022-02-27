let example2Button = document.getElementById('example2');
example2Button.onclick = function() {
    alert("My name is Bakyt");
}

let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function() {
    alert("Nice to meet you!");
});
example3Button.addEventListener('click', function() {
    alert("Bye!");
});

let example4Button = document.querySelector('#example4');
example4Button.addEventListener('click', function() {
    example4Button.textContent = "Nice to meet you!";
});

let example5Div = document.querySelector('#example5');
example5Div.addEventListener('click', function() {
    alert(example5Div.textContent.length);
});

let num = 0;
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function() {
    num = 0;
    h1.textContent = num;
});
let increaseButton = document.querySelector('#increase');
increaseButton.addEventListener('click', function() {
    num = num + 1;
    h1.textContent = num;
    // num += 1;
    // num++;
});
let decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener('click', function() {
    num = num - 1;
    h1.textContent = num;
});

document.querySelector('#example6').addEventListener('click', function() {
    this.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    this.style.fontWeight = 'bold';
    this.textContent = 'NIce';
});
document.querySelector('#example7').addEventListener('click', function() {
    this.remove();
});

let countdown = 3;
let example8Button = document.querySelector('#example8');

function example8Action() {
    countdown = countdown - 1;
    alert(`hello ${countdown}`);
    if (countdown === 0) {
        example8Button.removeEventListener('click', example8Action);
    }
}
example8Button.addEventListener('click', example8Action);


document.getElementById('level3').addEventListener('click', function() {
    alert("Level 3 clicked");
});
document.getElementById('level2').addEventListener('click', function() {
    alert("Level 2 clicked");
});
document.getElementById('level1').addEventListener('click', function() {
    alert("Level 1 clicked");
});