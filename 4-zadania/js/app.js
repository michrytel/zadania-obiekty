const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    generateIncTable(ing) {
        const table = []
        let i = 0
        while(table.length < ing) {
            table.push(i)
            i++
        }
        return table
    },
    generateRandomTable(lng, min, max) {
        const table = []
        while(table.length < lng) {
            table.push(Math.floor(Math.random() * (max - min + 1) ) + min)
        }
        return table
    },
    generateTableFromText(str) {
    const table = str.split(" ")
        return table
    },
    getMaxFromTable(arr) {
        const max = Math.max(...arr);
        return max;
    },
    getMinFromTable(arr) {
        const min = Math.min(...arr);
        return min;
    },
    delete(arr, index) {
        arr.splice(index, 1)
        return arr
    }

}

console.log(tableGenerator.randomNumber(8, 10))
console.log(tableGenerator.generateIncTable(10));
console.log(tableGenerator.generateRandomTable(10, 50, 100));
console.log(tableGenerator.generateTableFromText("siema co tam slychac"));
console.log(tableGenerator.getMaxFromTable([8, 10, 213, 1, 613, 9]))
console.log(tableGenerator.getMinFromTable([8, 10, 213, 1, 613, 9]))
console.log(tableGenerator.delete([8, 10, 213, 1, 613, 9], 2))



