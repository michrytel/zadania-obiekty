function prod(name, price, weight) {
        this.name = name
        this.price = price
        this.weight = weight
}

const prod1 = new prod("prod1", 10, 20)
const prod2 = new prod("prod2", 130, 210)

console.log(prod1);
console.log(prod2);

console.log(`Produkt numer jeden to: ${prod1.name}`);
console.log(`Produkt numer jeden to: ${prod2.name}`);
console.log(`Produkty kosztuja razem: ` + (prod1.price + prod2.price));
console.log(`Produkty waza razem: ` + (prod1.weight + prod2.weight));

let currentUser = {
    name: "Michal",
    surname: "Michalowski",
    email: "michryt@",
    showAll() {
            console.log(`imie to ${this.name}`)
            console.log(`nazwisko to ${this.surname}`)
            console.log(`email to ${this.email}`)

    }
}

currentUser.showAll()

const book = {
    autor: "Marek",
    wydawca: "Mirek",
    czytacz: "Antoni",
    showDetails() {
        Object.keys(this).forEach(el => {
            if(typeof this[el] === "function"){}
            else {
                console.log(el, this[el])
            }})
    }
}

book.showDetails()