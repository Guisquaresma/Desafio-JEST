const { customizacao } = require('./script.js');

test('Deve mudar a cor de fundo e esconder o menu', () => {
    document.body.innerHTML = `
        <input id="corBalao" value="vermelho">
        <input id="formatoBalao" value="circulo">
        <input id="corFundo" value="azul">
        <div class="menu-container"></div>
    `;
    
    customizacao();
    
    expect(document.body.style.backgroundColor).toBe('azul');
    expect(document.querySelector(".menu-container").style.display).toBe('none');
});