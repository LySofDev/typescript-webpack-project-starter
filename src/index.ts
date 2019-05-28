import './styles/app.css';

(function main() {
    const greeting = document.createElement('span');
    greeting.textContent = 'Hello, world!';
    document.getElementById('app').appendChild(greeting);
})();