const { estourar } = require('./script.js');

test('Deve remover a bola ao estourar', () => {
    const bola = document.createElement('div');
    document.body.appendChild(bola);
    
    estourar(bola);
    
    expect(document.body.contains(bola)).toBe(false);
});

test('Não deve estourar uma bola que não está na tela', () => {
    const bola = document.createElement('div');
    expect(() => estourar(bola)).toThrow();
});