function calcularProteinaAveia() {
    var aveia = parseFloat(document.getElementById("aveia").value)
    const aveiapro = 0.14
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = aveia * aveiapro
}