// Clases
class Pelicula {

    constructor(name, duration) {
        this.name = name;
        this.phone = duration;
    }

    repooducir() {
        return `Reproduciendo .... ${this.name}`;
    }
}

PeliculaUno = new Pelicula('Avatar', '2');


console.log(PeliculaUno.name);
console.log(PeliculaUno.repooducir());

// Herencia

class Serie extends Pelicula {
    reproducirCapitulo() {
        return `Reproduciendo capítulo ${this.name}`
    }

}

const serieUno = new Serie('Batman', '3');

console.log(serieUno.reproducirCapitulo());