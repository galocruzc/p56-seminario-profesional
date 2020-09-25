var persona = {
    nombre: 'Galo',
    apellido: 'Cruz',
    edad: 23,
    universidad: 'Universidad Politécnica Salesiana',
    correoElectronico: 'galocruz20@gmail.com',
    ingeniero: true,
    master: false,
    doctor: false

}

function imprimirPersona( objeto ){
    console.log( `${objeto.nombre} ${objeto.apellido}`)
    console.log( `edad: ${objeto.edad} años.`)
    console.log( `Universidad: ${objeto.universidad}`)
    console.log( `Correo Electronico: ${objeto.correoElectronico}`)

    if (objeto.ingeniero){
        console.log( 'Es ingeniero. ')
    }
    if (objeto.master){
        console.log('Es Magister.' )
    }
    if (objeto.doctor){
        console.log( 'Es Doctor. ')
    }
}

imprimirPersona(persona)
