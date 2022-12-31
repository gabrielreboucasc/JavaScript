function tabuada(){
    var num = document.getElementById('numt')
    var res = document.querySelector('div#res')
    if(num.value.length == 0 ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var resultado = ''
        var n1 = Number(num.value)
        for(var i = 1; i <= 10; i++){
            resultado = n1*i
            res.innerHTML += `<p>${n1} * ${i} = ${resultado}</p>`

        }
    }
}