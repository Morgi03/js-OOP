// a super meghívja a szülő constructor-ját

class Allat {
    #nev;
    #labakSzama;

    constructor(nev, labakSzama) {
        this.#nev = nev;
        this.#labakSzama = labakSzama;
    }
}

class Aranyhal extends Allat {

    constructor(nev) {
        super(nev, 0)
    }
}

class Kutya extends Allat {

    constructor(nev) {
        super(nev, 4);
    }
}