const { addBola } = require('./script.js');

test('Deve criar uma nova bola na tela', () => {
    corBalao = 'vermelho';
    formatoBalao = 'circulo';
    
    addBola();
    
    const bola = document.querySelector('.bola');
    expect(bola).not.toBeNull();
    expect(bola.style.backgroundColor).toBe('vermelho');
});