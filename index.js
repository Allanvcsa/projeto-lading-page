var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
function RolarParaDireita(){
leonardo.style ="display:none"
samanta.style ="display:flex"
setadireita.style ="display:none"
setaesquerda.style ="display:flex; margin-top:55px"
}
function RolarParaEsquerda(){
leonardo.style ="display:flex"
samanta.style ="display:none"
setadireita.style ="display:flex; margin-top:55px"
setaesquerda.style ="display:none" 
}