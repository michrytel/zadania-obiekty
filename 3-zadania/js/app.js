const book = {
    users: [],
    addUser(name, age, phone) {
        this.users.push({name, age, phone})
    },
    showUsers() {
        console.log("Wszyscy uzytkownicy w ksiazce");
        this.users.forEach(el => {
                console.log(el.name)
        })
    },
    findByName(name) {
        console.log(this.users.find(e => e.name === name) || false)
    },
    findByNumber(number) {
        console.log(this.users.find(e => e.phone === number) || false)
    },
    getCount() {
        console.log(`uzytkownikow jest ${this.users.length}`)
    }
}

book.addUser("Marcin", 21, 79055711441)
book.addUser("Marek", 31, 7905574212)
book.addUser("Mirek", 11, 792127441)
book.addUser("Marcin", 25, 790557441)

book.showUsers()
book.findByName("Marcin")
book.findByNumber(792127441)
book.getCount()
