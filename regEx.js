const MyChecker = {
    stringsArray: [],
    regExArray: [],
    check: function (str) {
        this.stringsArray.push(str)
        return this
    },
    match: function (regEx, des) {
        this.regExArray.push({ regExKey: regEx, description: des })
        return this
    },
    run: function () {
        const returnObject = {};
        for (string of this.stringsArray) {
            returnObject[string] = [];
            for (regEx of this.regExArray) {
                if (regEx.regExKey.test(string)) {
                    returnObject[string].push(regEx.description)
                }
            }
        }
        return returnObject;
    }
}

const result = MyChecker
    .check('abc')
    .check('abcd')
    .check("123")
    .check(" ")
    .check('chaim@gmail.com')
    .check('917-627-8846')
    .check('http://www.url.net')
    .check('_user$name')
    .match(/^[a-z]{3}$/, "three letter word")
    .match(/^[a-z0-9]{3}/, "starts with 3 letters or numbers")
    .match(/^[a-zA-Z_$][\w$]*$/, 'valid variable')
    .match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/, "valid email")
    .match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, 'valid phone number')
    .match(/^(http:\/\/)?(www\.)?[a-zA-Z0-9]+\.(com|net|org)$/, 'valid url')
    .run()

console.log(result)