const car1= {
    year: 2020,
    make: 'Honda',
    model: 'Accord'
}

const car2 = {
    year: 2013,
    make: 'Honda',
    model: 'Camry'
}

// build a post // feature to create a post

// post 
// body - required
// title
// createdAt


//Schema

const post = {
    body: 'i dindnt up today and didnt go to work',
    title: 'my day july 9th',
    createdAt: 'july 9th'
}

//validation - existence

// name - required

//validation - specific / form

// emailed - @ symbol or this won't work
// password - 8 characters in length + have a capital letter


//Schema
const person = {
    // email
    id: 1,
    name: 'Chris',
    //birthplace: 'Maryland',
    currentLocation: 'New York',
    height: '5 ft 11in',
    weight: 'blah'
}

// const dog = {
//     id: 1,
//     name: 'otis',
//     ownerID: 1,
//     ownerName: 'Chris'
// }

const cat = {
    id: 10,
    name: 'Milo',
    // ownerID: 1,
    ownerName: 'Chris',
    color: 'black'
}

const thing = {
    attributes: {
       // title / name / identifier 
       // information / data
       // miscellaneous
    }
}


// console.log('car', car)
// console.log('post', post)
// console.log('person', person)
// console.log('cat', cat)
// console.log('thing', thing)

// function showCar(car) {
//     console.log('car', car)
// }

// function showThing(thing) {
//     console.log('thing', thing)
// }

// console.log('showCar', showCar(car))
// console.log('showThing', showThing(car))
// console.log('showThing', showThing(cat))