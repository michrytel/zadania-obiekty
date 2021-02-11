{
    class Car {
        constructor(name, brand, engine, mile, age) {
            this.name = name
            this.brand = brand
            this.engine = engine
            this.mile = mile
            this.age = age
        }

        printDetails() {
            console.log(`
        Samochod to ${this.name}
        Jego marka to ${this.brand}
        Ma silnik ${this.engine}
        Ma juz przejechane ${this.mile}km
        Auto aktualnie ma ${this.age} lat
        `);
        }
    }

    const ferrari = new Car("testarossa", "ferrari", "4.3", 20321, 11)
    ferrari.printDetails()
}
{
    class Enemy {
        constructor(name, speed, attack, posX) {
            this.name = name
            this.live = 5
            this.speed = speed
            this.attack = attack
            this.posX = posX
        }

        move() {
            this.posX = this.posX - this.speed
            console.log(`Jestem ${this.name}. Znajduje sie na pozycji ${this.posX}`);
        }


        attackEnemy() {
            console.log(`Jestem ${this.name}. atakuje gracza na pozycji ${this.posX} z siłą ${this.attack}`);
        }

        hit() {
            this.live = this.live - 1
            console.log(`Jestem ${this.name} mam teraz ${this.live} zycia`);
        }
    }

    const dracula = new Enemy("dracula", 4, 29, 913)

    dracula.hit()
    dracula.attackEnemy()
    dracula.move()
    dracula.move()
    dracula.move()
    dracula.hit()
    dracula.attackEnemy()
}

{
    String.prototype.sortText = function (char) {
        const array = this.split(char)
        let sortedarray = array.sort()
        let sortedstring = sortedarray.join(char)
        return sortedstring

    }
    const string = "Marcin-Ania-Piotrek-Beata".sortText("-")
    console.log(string);
}

{
    String.prototype.reverse = function () {
        return [...this].reverse().join("")
    }
}

{
    Array.prototype.sum = function () {
        let sum = 0
        this.forEach(el => {
            sum = sum + el
        })
        return sum
    }
    console.log([2, 3, 1, 2].sum());
    Array.prototype.sortNr = function () {
        return this.sort(function(a, b) {
            return a - b;
        });
    }
    console.log([1,1.2,11,22,2.1].sortNr());
}