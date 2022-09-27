// a super meghívja a szülő constructor-ját

class Allat {
    #nev;
    #labakSzama;

    constructor(nev, labakSzama) {
        this.#nev = nev;
        this.#labakSzama = labakSzama;
    }

    hangotAd() {
        throw new Error('A hangotAd fuggveny absztrakt');
    }
}

class Aranyhal extends Allat {

    constructor(nev) {
        super(nev, 0)
    }

    hangotAd() {
        console.log('Slátty Slutty');
    }
}

class Kutya extends Allat {

    constructor(nev) {
        super(nev, 4);
    }
    hangotAd(){
        console.log('Vau');
    }
}

let kutya = new Kutya("Burkus");
let hal = new Aranyhal('Nemo');
kutya.hangotAd(); 
hal.hangotAd();
console.log('🤣');