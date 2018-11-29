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

    constructor(name, duration, capitulo) {
        super(name, duration);
        this.capitulo = capitulo;
    }
    reproducirCapitulo() {
        return `Reproduciendo capítulo ${this.capitulo} de ${this.name}`
    }

}

const serieUno = new Serie('Batman', '2', '3');

console.log(serieUno.reproducirCapitulo());