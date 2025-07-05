export class Usuario {

    let nombre: string;
    let apellido: string;
    let edad: number;
    let dni: number;

    constructor(nombre: string, apellido: string, edad: number, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
    }

    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getEdad(): number {
        return this.edad;
    }

    getDni(): number {
        return this.dni;
    }

}
