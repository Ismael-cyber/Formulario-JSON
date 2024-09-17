var serialize = function(form) {
    var json = {}
    var data = new FormData(form)
    var keys = data.keys()
    for(var key = keys.next(); !key.done; key = keys.next()) {
        var values = data.getAll(key.value)
        json[key.value] = values.length == 1 ? values[0] : values
    }
    return json
}

var form = document.querySelector("form")
var enviar = document.getElementById("enviar")
enviar.addEventListener("click", function (event) {
    event.preventDefault()
    var json = serialize(form)
    console.log(json)
    alert("Dados Enviados!")
})