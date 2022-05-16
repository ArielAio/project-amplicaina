var aveiapro = 0.14
const aveiacarb = 0.57
const aveiagord = 0.7
const aveiacalo = 3.94

var leitepro = 0.03
const leitecarb = 0.05
const leitegord = 0.03
const leitecalo = 0.60

var amendoimpro = 0.23
const amendoimcarb = 0.19
const amendoimgord = 0.54
const amendoimcalo = 6.06

var cacaupro = 0.26
const cacaucarb = 0.22
const cacaugord = 0.06
const cacaucalo = 2.45

function calcularAveia() {
    var aveia = parseFloat(document.getElementById("aveia").value)

    const totalaveiaproteina = document.getElementById("totalaveiaproteina")
    totalaveiaproteina.innerHTML = aveia * aveiapro

    const totalaveiacarboidrato = document.getElementById("totalaveiacarboidrato")
    totalaveiacarboidrato.innerHTML = aveia * aveiacarb

    const totalaveiagordurastotais = document.getElementById("totalaveiagordurastotais")
    totalaveiagordurastotais.innerHTML = aveia * aveiagord

    const totalaveiacalorias = document.getElementById("totalaveiacalorias")
    totalaveiacalorias.innerHTML = aveia * aveiacalo

    calcularTotal((aveia * aveiapro), (aveia * aveiagord), (aveia * aveiacarb), (aveia * aveiacalo))

    const elementoBtn = document.getElementById("btn-aveia");
    elementoBtn.disabled = "true" 

    const elementoCacau = document.getElementById("cacau-div");
    elementoCacau.style.visibility = "visible"

    const container = (document.getElementById("container")).style.height = "100vh;"
}

function calcularCacau() {
    var cacau = parseFloat(document.getElementById("cacau").value)

    const totalcacauproteina = document.getElementById("totalcacauproteina")
    totalcacauproteina.innerHTML = cacau * cacaupro

    const totalcacaucarboidrato = document.getElementById("totalcacaucarboidrato")
    totalcacaucarboidrato.innerHTML = cacau * cacaucarb

    const totalcacaugordurastotais = document.getElementById("totalcacaugordurastotais")
    totalcacaugordurastotais.innerHTML = cacau * cacaugord

    const totalcacaucalorias = document.getElementById("totalcacaucalorias")
    totalcacaucalorias.innerHTML = cacau + cacaucalo

    calcularTotal((cacau * cacaupro), (cacau * cacaugord), (cacau * cacaucarb), (cacau * cacaucalo))

    const elementoBtn = document.getElementById("btn-cacau");
    elementoBtn.disabled = "true" 

    const elementoLeite = document.getElementById("leite-div");
    elementoLeite.style.visibility = "visible"
}

function calcularLeite() {
    var leite = parseFloat(document.getElementById("leite").value)

    const totalleiteproteina = document.getElementById("totalleiteproteina")
    totalleiteproteina.innerHTML = leite * leitepro
    

    const totalleitecarboidrato = document.getElementById("totalleitecarboidrato")
    totalleitecarboidrato.innerHTML = leite * leitecarb

    const totalleitegordurastotais = document.getElementById("totalleitegordurastotais")
    totalleitegordurastotais.innerHTML = leite * leitegord

    const totalleitecalorias = document.getElementById("totalleitecalorias")
    totalleitecalorias.innerHTML = leite * leitecalo

    calcularTotal((leite * leitepro), (leite * leitegord), (leite * leitecarb), (leite * leitecalo))

    const elementoBtn = document.getElementById("btn-leite");
    elementoBtn.disabled = "true" 

    const elementoAmendoim = document.getElementById("amendoim-div");
    elementoAmendoim.style.visibility = "visible"

}

function calcularAmendoim() {
        var amendoim = parseFloat(document.getElementById("amendoim").value)
    
        const totalamendoimproteina = document.getElementById("totalamendoimproteina")
        totalamendoimproteina.innerHTML = amendoim * amendoimpro
        
    
        const totalamendoimcarboidrato = document.getElementById("totalamendoimcarboidrato")
        totalamendoimcarboidrato.innerHTML = amendoim * amendoimcarb
    
        const totalamendoimgordurastotais = document.getElementById("totalamendoimgordurastotais")
        totalamendoimgordurastotais.innerHTML = amendoim * amendoimgord

        const totalamendoimcalorias = document.getElementById("totalamendoimcalorias")
        totalamendoimcalorias.innerHTML = amendoim * amendoimcalo

        calcularTotal((amendoim * amendoimpro), (amendoim * amendoimgord), (amendoim * amendoimcarb), (amendoim * amendoimcalo))

        const elementoBtn = document.getElementById("btn-amendoim");
    elementoBtn.disabled = "true" 

        const elementoTotal = document.getElementById("total-div");
        elementoTotal.style.visibility = "visible"
}


var proteina = 0
var gordurastotais = 0  
var carboidrato = 0
var calorias = 0        

function calcularTotal(prot = 90, gord = 0, carb = 0, calo = 0) {
        var totalproteina = document.getElementById("totalpro");
        var totalcarboidrato = document.getElementById("totalcarb");
        var totalgordurastotais = document.getElementById("totalgord");
        var totalcalorias = document.getElementById("totalcalo")
        
        totalproteina.innerHTML = proteina += prot
        totalgordurastotais.innerHTML = gordurastotais += gord
        totalcarboidrato.innerHTML = carboidrato += carb
        totalcalorias.innerHTML = calorias += calo
}
