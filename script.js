document.addEventListener('DOMContentLoaded', function(){
    const botaoDeacessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeacessibilidade = document.getElementById ('opcao-acessibilidade')

    botaoDeacessibilidade.addEventListener('click' , function() {
        botaoDeacessibilidade.classList.toggle('rotacao-botao');
        opcoesDeacessibilidade.classList. toggle('apresent')
})

  const aumentaFonteBotao = this.document.getElementById