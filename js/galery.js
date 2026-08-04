function trocarImagem(img) {
    document.getElementById("imagemPrincipal").src = img.src;

    document.querySelectorAll(".imagens img").forEach(foto => {
        foto.classList.remove("ativa");
    });

    img.classList.add("ativa");
}