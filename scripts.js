//Ao cliclar no botão Add, será adicionada um checkbox com o value do input.
//Ao cliclar no botão Rmv, será removido sempre o ultimo checkbox colocado.
//Ao clicar no botão Sav, será salvo na storage tudo que foi escrito.

// var Add = document.getElementById("addBtn")
// var Rmv = document.getElementById("rmvBtn")
// var Sav = document.getElementById("savBtn")



function addList(){
    var list = document.getElementById("list")
    var cont = document.getElementById("cont")
    
    let div = document.createElement("div")
    div.appendChild(document.createTextNode(cont.value))
    list.appendChild(div)
    cont.value = ""
}

function rmvList(){
    let list = document.getElementById("list")
    let div = document.createElement("div")

    list.lastChild.remove(div)
}



var darkBtn = document.getElementById("night")
var html = document.querySelector("html")
darkBtn.addEventListener('click', function(){
    html.classList.toggle('darkMode')
    // darkBtn.setAttribute("src", "Assets/Logos/night-mode.png")
    })
