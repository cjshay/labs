const brothersK = {
    title: 'The Brothers Karamozov',
    length: 'long',
    author: 'Fyodor Dosteyevsky'
}

const mrsDalloway = {
    title: 'Mrs Dalloway',
    length: 'short',
    author: 'Virginia Woolf'
}

const harryPotter1 = {
    title: "Harry Potter and the Sourcerer's Stone",
    length: 'long',
    author: 'JK Rowling'
}

const library = [
    brothersK,
    mrsDalloway,
    harryPotter1
]

// create algorithm
// input: book
// operation / action: add a book to the library
// output: library

const addBook = (book) => {
    // add a book
    library.push(book)

    return library
}

const newBook = {
    title: "Harry Potter and the chamber of secrets",
    length: 'long',
    author: 'JK Rowling'
}

const anotherBook = {
    title: "Harry Potter and the prisoner of a",
    length: 'long',
    author: 'JK Rowling'
}

addBook(newBook)
addBook(newBook)

addBook(anotherBook)

console.log('library', library)





// add to collection

// validation