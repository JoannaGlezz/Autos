function crear() {
    const valores = getValueObjectFromForm("formMarca")
    // console.log('El valor es', valores)

    let auto = {
        marca: valores.marca,
        modelo: valores.modelo,
        color: valores.color,
        llanta: valores.llanta,
        puertas: valores.puertas,
        versiones: valores.version
    }
    console.log('mi auto es:', auto)

    let lista1 = document.createElement("li")
    let cnt1 = document.createTextNode("Marca: " + valores.marca)
    lista1.appendChild(cnt1)
    document.getElementById("miAuto").appendChild(lista1)

    let lista2 = document.createElement("li")
    let cnt2 = document.createTextNode("Modelo: " + valores.modelo)
    lista2.appendChild(cnt2)
    document.getElementById("miAuto").appendChild(lista2)

    let lista3 = document.createElement("li")
    let cnt3 = document.createTextNode("Color: " + valores.color)
    lista3.appendChild(cnt3)
    document.getElementById("miAuto").appendChild(lista3)

    let lista4 = document.createElement("li")
    let cnt4 = document.createTextNode("Llanta de refaccion: " + valores.llanta)
    lista4.appendChild(cnt4)
    document.getElementById("miAuto").appendChild(lista4)

    let lista5 = document.createElement("li")
    let cnt5 = document.createTextNode("Puertas: " + valores.puertas)
    lista5.appendChild(cnt5)
    document.getElementById("miAuto").appendChild(lista5)

    let lista6 = document.createElement("li")
    let cnt6 = document.createTextNode("Llantas incluidas: 4")
    lista6.appendChild(cnt6)
    document.getElementById("miAuto").appendChild(lista6)

    let lista7 = document.createElement("li")
    let cnt7 = document.createTextNode("L")
    lista7.appendChild(cnt7)
    document.getElementById("miAuto").appendChild(lista7)

    let lista8 = document.createElement("li")
    let cnt8 = document.createTextNode("Version: " + valores.version)
    lista8.appendChild(cnt8)
    document.getElementById("miAuto").appendChild(lista8)
}

function getValueObjectFromForm(groupId) {
    var form = document.getElementById(groupId);

    var data = new FormData(form);
    var output = {};
    for (const entry of data) {
        output[entry[0]] = entry[1]
    };
    return output
}

