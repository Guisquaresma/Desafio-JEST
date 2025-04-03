const { iniciar } = require('../script.js');

test('Deve iniciar o jogo criando bolas periodicamente', () => {
    jest.useFakeTimers();
    iniciar();
    jest.advanceTimersByTime(2000);
    
    const bolas = document.querySelectorAll('.bola');
    expect(bolas.length).toBeGreaterThanOrEqual(2);
    
    jest.useRealTimers();
});
