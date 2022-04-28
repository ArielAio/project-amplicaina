function calcularAveia() {
    var aveia = parseFloat(document.getElementById("aveia").value)
    const aveiapro = 0.14
    const aveiacarb = 0.57
    const aveiagord = 0.7

    const totalaveiaproteina = document.getElementById("totalaveiaproteina")
    totalaveiaproteina.innerHTML = aveia * aveiapro

    const totalaveiacarboidrato = document.getElementById("totalaveiacarboidrato")
    totalaveiacarboidrato.innerHTML = aveia * aveiacarb

    const totalaveiagordurastotais = document.getElementById("totalaveiagordurastotais")
    totalaveiagordurastotais.innerHTML = aveia * aveiagord
}

function calcularCacau() {
    var cacau = parseFloat(document.getElementById("cacau").value)
    const cacaupro = 0.26
    const cacaucarb = 0.22

    const totalcacauproteina = document.getElementById("totalcacauproteina")
    totalcacauproteina.innerHTML = cacau * cacaupro

    const totalcacaucarboidrato = document.getElementById("totalcacaucarboidrato")
    totalcacaucarboidrato.innerHTML = cacau * cacaucarb
}