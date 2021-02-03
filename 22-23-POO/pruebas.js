

function probarValidarAnioLibros(){
    console.assert(
        validarAnioLibro('asd') === 'El campo año del libro deben ser solo números',
        'La funcion validar año del libro no validó que el campo año deben ser solo números'
    )
}

probarValidarAnioLibros();