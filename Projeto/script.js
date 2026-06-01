const cores = [
    "#d4af37", // dourado
    "#3498db", // azul
    "#2ecc71", // verde
    "#e74c3c", // vermelho
    "#9b59b6", // roxo
    "#f39c12"  // laranja
];

let indice = 0;

document.getElementById("botaoCor").addEventListener("click", function () {
    indice++;

    if (indice >= cores.length) {
        indice = 0;
    }

    document.body.style.backgroundColor = cores[indice];
});