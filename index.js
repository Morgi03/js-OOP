// Ez két teljesen külön dolog, de lehet így is csinálni

let valami = {
    nev: "Usernev",
    _eletkor:23,
    kiir(){
        console.log(this.nev);
    },
    get eletkor(){
        return this._eletkor;
    },
};

// Konstruktor
class User {

    #eletkor = 0;
    nev;
    constructor(nev,eletkor) {
        this.nev = nev;
        this.#eletkor = eletkor;
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

    static atlagEletkor(users) {
        let sum = 0;
        for (let u of users) {
            sum += u.#eletkor;
        }
        return sum / users.length;
    }

}

let user = new User("User2",25);
let userek = [
    user,
    new User("User5",2),
    new User("User1",3),
];
let atlag = User.atlagEletkor(userek);
console.log("Az atlag: "+atlag)





// let user = new User("User2", 19)

// User osztályunknak nem példánya:
console.log(valami instanceof User);
// User osztályunk példánya:
console.log(user instanceof User);

user.kiir();
// user.eletkor = "kutya"; hiba lesz
// user._eletkor = "kutya"; Nincs hiba :O ezért kell private -> #eletkor
// user.#eletkor = "kutya"; Hibás lesz


console.log(User); // objectumok a classok :O :O :O 

valami.kiir();

console.log('------------------------');
console.log(user.kiir());
let k = user.kiir;
// k(); hiba lesz
let obj = {
    nev: 'nev',
    eletkor: 999,
    kiir: user.kiir,
}
console.log(user.kiir());
obj.kiir();

function gombKattintas(){
    user.kiir();
}

// document.getElementById('gomb').addEventListener('click',gombKattintas);