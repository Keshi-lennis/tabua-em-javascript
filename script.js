function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab') // o codigo aqui não funcionando pq eu coloquei Setab hfudsfuhds

    if (num.value.length == 0) {  // aqui tbm não estava aparecendo a mensagem, caso se não tivesse nenhum numero pq o length estava escrito errado 
        window.alert('Por favor digite um número')

    }
    else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' ' // aqui eu limpo a tabuada para mostrar uma nova tabuada que eu digite 
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)

            c++

        }
    }

}