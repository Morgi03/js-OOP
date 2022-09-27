
let a = "asdf" / 45;

console.log(a);
try{
const c = 5;
c++;
} catch(e) {
    if(e instanceof TypeError){
        console.log('Tipus hiba');
    }
    console.log('Hiba!');
}

console.log('try-catch után')

let uri = 'https://petrik.hu/?param=ő'
try{
    
    let kodolt = encodeURI(uri);
} catch(e){
    // Felhasználói input, ezért muszáj ellenőrízni
    if (e instanceof URIError) {
        console.log('Érvénytelen URI');   
    }
}
console.log(kodolt);

// Globális Try - Catch -el szokták leellenőríni pl. a main-t