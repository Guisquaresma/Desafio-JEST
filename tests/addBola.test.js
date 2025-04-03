const { addBola } = require('../script.js');

test('Deve criar uma nova bola na tela', () => {
    document.body.innerHTML = '<div class="game-container"></div>';

    corBalao = "red";
    addBola();

    const bola = document.querySelector('.bola');
    console.log("Cor da bola:", getComputedStyle(bola).backgroundColor); 

    expect(bola).not.toBeNull();
    
    const corBola = getComputedStyle(bola).backgroundColor;
    expect(corBola === 'red' || corBola === 'rgb(255, 0, 0)').toBe(true); 
});