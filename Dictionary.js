// const dictionary = {};

// dictionary[name] = "Alif Shikder";

// dictionary[];


class Dictionary {
    constructor() {
        this.dictionary = [];
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    } 
}

const phoneBook = new Dictionary();

phoneBook.add('Alif', '01720417627')
phoneBook.add('Mahim', '01720417627')
phoneBook.add('Asif', '01944576111')
phoneBook.add('Sidan', '0173837307375')

console.log(phoneBook);

const Mahim = phoneBook.get("Mahim");

console.log(Mahim)