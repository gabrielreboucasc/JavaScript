function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    if(inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var iniciog = Number(inicio.value)
        var fimg = Number(fim.value)
        var passog = Number(passo.value)
        for(iniciog; fimg >= iniciog; iniciog += passog){
            res.innerHTML += `${iniciog}👍`
        }
    }

}