document.getElementById('zero').addEventListener('click', function() {
    document.getElementById('result').value += '0';
});

document.getElementById('one').addEventListener('click', function() {
    document.getElementById('result').value += '1';
});

document.getElementById('two').addEventListener('click', function() {
    document.getElementById('result').value += '2';
});

document.getElementById('three').addEventListener('click', function() {
    document.getElementById('result').value += '3';
});

document.getElementById('four').addEventListener('click', function() {
    document.getElementById('result').value += '4';
});

document.getElementById('five').addEventListener('click', function() {
    document.getElementById('result').value += '5';
});

document.getElementById('six').addEventListener('click', function() {
    document.getElementById('result').value += '6';
});

document.getElementById('seven').addEventListener('click', function() {
    document.getElementById('result').value += '7';
});

document.getElementById('eight').addEventListener('click', function() {
    document.getElementById('result').value += '8';
});

document.getElementById('nine').addEventListener('click', function() {
    document.getElementById('result').value += '9';
});

document.getElementById('multiply').addEventListener('click', function() {
    document.getElementById('result').value += '*';
});

document.getElementById('subtract').addEventListener('click', function() {
    document.getElementById('result').value += '-';
});

document.getElementById('divide').addEventListener('click', function() {
    document.getElementById('result').value += '/';
});

document.getElementById('add').addEventListener('click', function() {
    document.getElementById('result').value += '+';
});

document.getElementById('equals').addEventListener('click', function() {
    document.getElementById('result').value = eval(document.getElementById('result').value);
});

document.getElementById('decimal').addEventListener('click', function() {
    document.getElementById('result').value += '.';
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('result').value = '';
});

document.getElementById('backspace').addEventListener('click', function() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
});