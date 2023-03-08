let inpdata = document.querySelector('.inp .plus input')
let AddData = document.querySelector('.inp button')
let cont = document.querySelector('.cont')





AddData.onclick = function () {
    if (inpdata.value === '') {
        window.alert("No Data");
    } else {
        let mainspan = document.createElement("span")
        let delelm = document.createElement("span")
        let text = document.createTextNode(inpdata.value)
        let deltext = document.createTextNode("delete")
        mainspan.appendChild(text)
        mainspan.className = 'add-add'
        delelm.appendChild(deltext)
        delelm.className = 'del-del'
        mainspan.appendChild(delelm)
        cont.appendChild(mainspan)
    }
}
let drak = document.getElementById(dd)
let body = document.querySelector('body')

dd.onclick=function(){
    body.classList.toggle('sss')
}