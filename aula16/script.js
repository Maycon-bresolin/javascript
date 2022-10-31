function tabuada() {
    var ini = document.getElementById('txtini')
    var tab = document.getElementById('seltab')
    if (ini.value.length == 0 ) {
        window.alert('Por favor, digite um número ')
    } else {
       var ini = Number(ini.value)
       var c = 1 
       tab.innerHTML = ''
       while (c <= 10 ) {
        var item = document.createElement('option')
        item.text = `${ini} X ${c} = ${ini*c} `
        tab.appendChild(item)
        c++

       }
    }
   
}