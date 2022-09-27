// Ez két teljesen külön dolog, de lehet így is csinálni

let valami = {
    nev: "Usernev",
    eletkor:23,
};

// Konstruktor
class User {
    constructor(nev,eletkor) {
        this.nev = nev;
        this.eletkor = eletkor;
    }

    // Getter, Setter
    get eletkor(){
        return this._eletkor;
    }

    set eletkor(eletkor){
        if (typeof eletkor == 'number' && eletkor >= 0) {
            this._eletkor = eletkor;
        } else {
            throw new Error('Eletkor nem lehet negatív egész!');
        }
    }

    // Metódusok
    kiir() {
        console.log(this.nev, this._eletkor);
    }

    login(usernev, pass) {
        return false;
    }
}

let user = new User("User2", 19)

// User osztályunknak nem példánya:
console.log(valami instanceof User);
// User osztályunk példánya:
console.log(user instanceof User);

user.kiir();
// user.eletkor = "kutya"; hiba lesz