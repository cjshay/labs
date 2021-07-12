// enterprise car

// const car1= {
//     yearItWasMade: 2020,
//     make: 'Honda',
//     model: 'Accord'
// }

// console.log('car1', car1 )


// console.log('--------------------')

// car1.yearItWasMade = undefined
// car1.year = 2020
// car1.make = 'Honda'
// car1.model = 'Accord'

// console.log('car1', car1)

// budget cars
const car2 = {
    makeForCar: 'Nissan',
    yearMade: 2013,
    modelForCar: 'Altima'
}


// console.log('car2', car2 )


// console.log('--------------------')

// car2.year = 2013
// car2.make = 'Nissan'
// car2.model = 'Altima'
// car2.makeForCar = undefined
// car2.yearMade = undefined
// car2.modelForCar = undefined

// console.log('car2', car2 )

const car3 = {
    makeModel: 'Nissan Altima',
    yearMade: 2013
}

// console.log('car3', car3)


// console.log('--------------------')

// car3.year = 2013
// car3.make = 'Nissan'
// car3.model = 'Altima'
// car3.makeModel = undefined
// car3.yearMade = undefined

// console.log('car3', car3 )



// we're kayak
// kayak schema for a car
// const normalizedCar = {
//     year: 0000,
//     make: '',
//     model: ''
// }

const car1= {
    yearItWasMade: 2020,
    make: 'Honda',
    model: 'Accord'
}

const car1ToNormalizedCar = {
    yearItWasMade: 'year',
    make: 'make',
    model: 'model'
}

// enterprise year name
//from yearItWasMade: 

//kayak year name (us)
//to 'year'

//mapping 
// putting one thing on another



const normalizeCar = (car, normalizer) => {
    const carAttributes = Object.keys(car)
    const normalizedCar = {}

    for (let i = 0; i < carAttributes.length; i++) {
        const currentAttribute = carAttributes[i]
        const normalizedKey = normalizer[currentAttribute]
        const normalizedValue = car[carAttributes[i]]
        normalizedCar[normalizedKey] = normalizedValue
    }

    return normalizedCar
}
// const car2 = {
//     makeForCar: 'Nissan',
//     yearMade: 2013,
//     modelForCar: 'Altima'
// }

const car2ToNormalizedCar = {
    yearMade: 'year',
    makeForCar: 'make',
    modelForCar: 'model'
}

console.log('normalizeCar1', normalizeCar(car1, car1ToNormalizedCar))

console.log('normalizeCar2', normalizeCar(car2, car2ToNormalizedCar))


// normalizeCar(car1, car1ToNormalizedCar)

// console.log('car1', car1)

// console.log('normalizeCar1', normalizeCar(car1, car1ToNormalizedCar))
// console.log('normalizeCar2', normalizeCar(car2, car2ToNormalizedCar))




// const separateMakeModel = (makeModelString) => {
//     const makePlusModel = makeModelString.split(' ')
//     const make = makePlusModel[0]
//     const model = makePlusModel[1]

//     return {
//         make: make,
//         model: model
//     }

// }

// const car3ToNormalizedCar = {
//     yearMade: 'year',
//     makeModel: separateMakeModel
// }


// const normalizeCar = (car, normalizer) => {
//     const carKeys = Object.keys(car)
//     const normalizedCar = {}
//     for (let i = 0; i < carKeys.length; i++) {
//         const normalizedKey = normalizer[carKeys[i]]
//         const normalizedValue = car[carKeys[i]]

//         // if (typeof normalizedKey === 'function') {
//         //     const makeAndModel = normalizedKey(normalizedValue)
//         //     normalizedCar = Object.assign({}, normalizedCar, makeAndModel)
//         // } else {
//             console.log('normalizedKey', normalizedKey)
//             console.log('normalizedValue', normalizedValue)

//             normalizedCar[normalizedKey] = normalizedValue
//         // }
//     }

//     return normalizedCar
// }


// const car2 = {
//     makeForCar: 'Nissan',
//     yearMade: 2013,
//     modelForCar: 'Altima'
// }

// const car3 = {
//     makeModel: 'Nissan Altima',
//     yearMade: 2013
// }

// const car2ToNormalizedCar = {
//     yearMade: 'year',
//     makeForCar: 'make',
//     modelForCar: 'model'
// }