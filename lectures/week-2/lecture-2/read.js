const brothersK = {
    title: 'The Brothers Karamozov',
    length: 'long',
    author: 'Fyodor Dosteyevsky',
    category: 'russian'
}

const mrsDalloway = {
    title: 'Mrs Dalloway',
    length: 'short',
    author: 'Virginia Woolf',
    category: 'contemporary american'
}

const harryPotter1 = {
    title: "Harry Potter and the Sourcerer's Stone",
    length: 'long',
    author: 'JK Rowling',
    category: 'fantasy'

}


//array (list)
const library = [
    brothersK,
    mrsDalloway,
    harryPotter1
]

// index / collection
// list of books


// single record / narrow query
// single book


// find by algorithm
//get the list 
//based on what you want, filter by that

// find all
// function () {

// }

//input output

const findAllBooks = (region) => {
    const books = library;

    return books
}

// console.log('books', findAllBooks('new york'))

// find by title

// find by algorithm
// loop through items / iterate (step through) list
// does this item have the attribute that I'm looking for

//if it does take it and give it back
//if it doesn't ==> move forward / do nothing

// input operation / action output
const findBooksByTitle = (title) => {
    const books = library 

    for (let index = 0; index < library.length; index++) {
        const currentBook = books[index]

        // console.log('currentBook', currentBook)
        // console.log('title', title)
        // console.log('currentBook[title]', currentBook[title])

        if (currentBook['title'] === title) {
            return currentBook
        } else {

        }
    }

    return {
        message: 'did not find book',
        code: -1
    }
}

// console.log('findBooksByTitle', findBooksByTitle('The Brothers Karamozov'))
// console.log('findBooksByTitle', findBooksByTitle('Mrs Dalloway'))
// console.log('findBooksByTitle', findBooksByTitle('some other book'))
// console.log('findBooksByTitle', findBooksByTitle("Harry Potter and the Sourcerer's Stone"))


// find by length
const findBooksByLength = (length) => {
    const books = library 

    for (let index = 0; index < library.length; index++) {
        const currentBook = books[index]

        // console.log('currentBook', currentBook)
        // console.log('title', title)
        // console.log('currentBook[title]', currentBook[title])

        if (currentBook['length'] === length) {
            return currentBook
        } else {

        }
    }

    return {
        message: 'did not find book',
        code: -1
    }
}

// console.log('findBooksByTitle', findBooksByLength('long'))


// find by author

//find by category


// accessing 

// objects

//specify the key
// a specific item other than by key, loop through and find what you want

const object = {
    key: 'value',
    "anotherKey": "another value"
}

object.key === 'value'
object['key'] === 'value'


// console.log('accessing dot syntax', object.key )
// console.log('accessing bracket syntax', object.key )

// object.anotherKey === "another value"
// object['anotherKey'] === 'another value'

// arrays

// specify an index

const array = [10, 5, 20]

const item = array[1]
const item2 = array[2]


console.log('item', item)
console.log('item2', item2)


// specific item by some attribute ==> loop through it and find what you want



// currentBook['length']