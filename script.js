

document.addEventListener('DOMContentLoaded', function () {
    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    if (!aumentarFonteBotao || !diminuirFonteBotao) {
        console.error("Os botões de aumentar e diminuir fonte não foram encontrados.");
        return;
    }


    let tamanhoAtualFonte = 1; // Tamanho inicial em rem


    aumentarFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });


    diminuirFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.5) { // Limite mínimo para evitar valores muito baixos
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });
});
