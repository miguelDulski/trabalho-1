document.addEventListener('DOMContentLoaded', function(){
    const botaoDEACESSIBILIDADE = document.getElementById('botao-acessibilidade')
    const opcoesDEACESSIBILIDADE = document.getElementById ('opcao-acessibilidade')

    botaoDEACESSIBILIDADE.addEventListener("click")
        botaoDEACESSIBILIDADE.classList.toggle('rotacao-botao');
        opcoesDEACESSIBILIDADE.classList. toggle('apresent')
}