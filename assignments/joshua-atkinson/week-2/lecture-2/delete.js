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

// delete algorithm
//input book
// build a new library
// iterate through that library
// only collect items that are not the book that you want to delete
// if the book is the one you want to delete, dont grab it
// return the library
// send a message that the book is successfully deleted
// error did not find 

const deleteBookFromLibrary = (bookTitle) => {
    const newLibrary = []

    for (let index = 0; index < library.length; index++) {
        const currentBook = library[index]


        if (currentBook.title !== bookTitle) {
            newLibrary.push(currentBook)
        }
    }

    return newLibrary
}

console.log('deletebookfromlibrary', deleteBookFromLibrary('The Brothers Karamozov') )
console.log('deletebookfromlibrary', deleteBookFromLibrary('Mrs Dalloway') )

// find + delete



// delete record