const spaceShip = {
    name: "enterprise",
    currentLocation: "earth",
    flyDistance: 0,
    flyTo(place, distance) {
        this.currentLocation = place;
        this.flyDistance += distance;
    },
    showInfo() {
        console.log(`Informacje o statku
        Statek ${this.name}
        Dolecial do ${this.currentLocation}
        Przelecial juz ${this.flyDistance}`);
    },
    meetClingon() {
        const tab = []
        while (tab.length < 100) {
            tab.push(Math.floor(Math.random() * 201) - 100);
        }
        const sum_minus = []
        const sum_plus = []
        tab.forEach(el => {
            if(el >= 0){
                sum_plus.push(el)
            } else {
                sum_minus.push(el)
            }
        })
        if (sum_minus.length > sum_plus.length) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
        } else {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} wygral z Klingonami`);
        }
    }
}

spaceShip.flyTo("Planeta Klingonów", 2000)
spaceShip.showInfo()
spaceShip.meetClingon()

