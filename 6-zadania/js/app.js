const users = [
    //id, name, surname, email, age, value
    [1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28],
    [2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37],
    [3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06],
    [4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64],
    [5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54],
    [6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08],
    [7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21],
    [8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72],
    [9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68],
    [10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44],
    [11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52],
    [12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10],
    [13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07],
    [14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97],
    [15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
]

/*const fixData = (array) => {
  return Array.from(array, brand_id => ({{ brand_id})


}*/

const fixData = (arrayofArrays) => {
    let obj = arrayofArrays.map(function (x) {
        return {
            id: x[0],
            name: x[1],
            surname: x[2],
            email: x[3],
            age: x[4],
            cash: x[5]
        };
    })
    return obj
}
let newUsers = fixData(users)


let sum = 0
let fullage = 0
newtab = []
newUsers.forEach(el => {
    sum = sum + el.cash
    fullage = fullage + el.age
    newtab.push(el.email)
})

mediumAge = fullage / newUsers.length
console.log(newtab);

