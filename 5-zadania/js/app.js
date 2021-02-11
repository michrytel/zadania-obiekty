const text = {
    check(txt, word) {
        return txt.includes(word)
    },
    getCount(txt) {
        return txt.length
    },
    getWordsCount(txt) {
        let tab = txt.split(" ")
        console.log(tab.length);
    },
    setCapitalize(txt) {
        txt = txt.toLowerCase()
        txt = txt.split(' ')
        txt = txt.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        txt = txt.join(' ');
        return txt
    },
    setMix(txt) {
        let txt2 = txt.split('').map(function (c) {
            return c[Math.round(Math.random()) ? 'toUpperCase' : 'toLowerCase']();
        }).join('');
        return txt2
    },
    generateRandom(lng) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let charactersLength = characters.length;
        for (let i = 0; i < lng; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;

    }
}

console.log(text.generateRandom(100))

