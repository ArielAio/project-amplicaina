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
    const cacaugord = 0.06

    const totalcacauproteina = document.getElementById("totalcacauproteina")
    totalcacauproteina.innerHTML = cacau * cacaupro

    const totalcacaucarboidrato = document.getElementById("totalcacaucarboidrato")
    totalcacaucarboidrato.innerHTML = cacau * cacaucarb

    const totalcacaugordurastotais = document.getElementById("totalcacaugordurastotais")
    totalcacaugordurastotais.innerHTML = cacau * cacaugord
}

function calcularLeite() {
    var leite = parseFloat(document.getElementById("leite").value)
    const leitepro = 0.03
    const leitecarb = 0.05
    const leitegord = 0.03

    const totalleiteproteina = document.getElementById("totalleiteproteina")
    totalleiteproteina.innerHTML = leite * leitepro
    

    const totalleitecarboidrato = document.getElementById("totalleitecarboidrato")
    totalleitecarboidrato.innerHTML = leite * leitecarb

    const totalleitegordurastotais = document.getElementById("totalleitegordurastotais")
    totalleitegordurastotais.innerHTML = leite * leitegord

}

    function calcularAmendoim() {
        var amendoim = parseFloat(document.getElementById("amendoim").value)
        const amendoimpro = 0.23
        const amendoimcarb = 0.19
        const amendoimgord = 0.54
    
        const totalamendoimproteina = document.getElementById("totalamendoimproteina")
        totalamendoimproteina.innerHTML = amendoim * amendoimpro
        
    
        const totalamendoimcarboidrato = document.getElementById("totalamendoimcarboidrato")
        totalamendoimcarboidrato.innerHTML = amendoim * amendoimcarb
    
        const totalamendoimgordurastotais = document.getElementById("totalamendoimgordurastotais")
        totalamendoimgordurastotais.innerHTML = amendoim * amendoimgord
}
