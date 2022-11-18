class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = "Gonzalo";
        this.apellido = "Gonzales";
        this.libros = ["Libro 1", "Libro 2", "Libro 3"];
        this.mascotas ("Perro", "Gato");
    }

    static totalMascotas = 2

    getFullName() {
        return fuction (
            this.nombre,
            this.apellido,
        ) 
    }

    addMascota() {
        Usuario.totalMascotas = this.mascotas + 1;
        console.log(totalMascotas)
    }


    countMascotas() {
        return Usuario.totalMascotas;
    }

    getBookNames() {
        return this.libros;
    }
}

