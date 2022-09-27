// Ez két teljesen külön dolog, de lehet így is csinálni

let valami = {
    nev: "Usernev",
    eletkor:23,
};

// Konstruktor
class User {

    #eletkor = 0;

    constructor(nev,eletkor) {
        this.nev = nev;
        this.eletkor = eletkor;
    }

    // Getter, Setter
    get eletkor(){
        return this.#eletkor;
    }

    set eletkor(eletkor){
        if (typeof eletkor == 'number' && eletkor >= 0) {
            this._eletkor = eletkor;
        } else {
            throw new Error('Eletkor nem lehet negatív, vigyázzon kérem!');
        }
    }

    // Metódusok
    kiir() {
        console.log(this.nev, this._eletkor);
    }

    login(usernev, pass) {
        return false;
    }
    #privatmetodus(){
        console.log('privát metódus')
    }
}

let user = new User("User2", 19)

// User osztályunknak nem példánya:
console.log(valami instanceof User);
// User osztályunk példánya:
console.log(user instanceof User);

user.kiir();
// user.eletkor = "kutya"; hiba lesz
// user._eletkor = "kutya"; Nincs hiba :O ezért kell private -> #eletkor
// user.#eletkor = "kutya"; Hibás lesz