function crear() {
    const valores = getValueObjectFromForm("formMarca")
    console.log('El valor es', valores)
    
    let auto = {
        marca: valores.marca,
        modelo: valores.modelo,
        color: valores.color,
        llanta: valores.llanta ,
        puertas: valores.puertas,
        versiones: valores.version
    }
    console.log('mi auto es:', auto)
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
    
