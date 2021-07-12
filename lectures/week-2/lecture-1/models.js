


//Schema

// post 
// body - required
// title
// createdAt

const post = {
    body: 'i didnt wake up today and didnt go to work',
    title: 'my day july 9th',
    createdAt: 'july 9th'
}

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

const dog = {
    id: 1,
    name: 'otis',
    ownerID: 1,
    ownerName: 'Chris'
}

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


console.log('car', car)
console.log('post', post)
console.log('person', person)
console.log('cat', cat)
console.log('thing', thing)

function showCar(car) {
    console.log('car', car)
}

function showThing(thing) {
    console.log('thing', thing)
}

console.log('showCar', showCar(car))
console.log('showThing', showThing(car))
console.log('showThing', showThing(cat))