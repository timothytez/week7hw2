console.log('Day2 Js')

let age = 33;

if (age < 18) {
  console.log('underage')
} else if (age >= 18 && age < 21) {
  console.log('Ready for the draft')
} else {
  console.log('Have fun at the bars')
}

// ternary <condition> ? <true action> : <false action> 

age >= 18 && age < 21 ?
  console.log('Ready for the draft')
  : age < 18 ? console.log('underage')
    : console.log('Have fun at the bars')

const studentArray = ['toby','milad','lyla','josh']

for(let i=0; i<studentArray.length; i++){
  console.log(i,studentArray[i])
}

for(let i=studentArray.length - 1; i >= 0; i--){
  console.log(i,studentArray[i])
}

for (const student of studentArray){
  console.log(student)
}

let flag = true
let counter = 0
while(flag === true){
  if (counter === 10){
    console.log('breaking')
    break
  }
  console.log(++ counter )
}

let day = 'mon'

switch(day){
  case 'sun':
    console.log('Another Loss for the bears')
    break
  case 'mon':
    console.log('First day of class')
    break
  case 'tue':
    console.log("this week is exciting")
    break
  case 'wed':
    console.log("hump day")
    break
  case 'thur':
    console.log('is this week over')
    break
  case 'fri':
    console.log('PROJECT DAY!!!!')
    break
  case 'sat':
    console.log('Busy with project')
    break
  default:
    console.log('You\'re making up days')
}

const myObj = {}
const myArray = []
console.log(typeof myObj)
console.log(typeof myArray, 'myArray')

const sean = {'profession':'instructor/dev', hobby:'pool master'}

console.log(sean['profession'])
console.log(sean.hobby)

for(const k in sean){
  console.log(k)
  console.log(sean[k])
}

console.table(studentArray)

sean.age = 28

sean['hobby'] = 'nextJs'

console.table(sean)

delete sean.age

delete sean['hobby']
console.table(sean)
console.log(sean)

const person2 = {
  name: "Max",
  age:31,
  progLanguages:['JavaScript','Python','C++', 'Java'],
  favColor: "Blue",
  teams:[
      {
          baseball: 'Chicago White Sox',
          football: 'Chicago Bears',
          hockey: 'Chicago Blackhawks',
          basketball:['Chicago Bulls','Chicago Sky'],
          soccer:['Chicago Fire', 'Naperville Yellowjacks']
      },
      {
          baseball:'Toronto Bluejays',
          football: 'LA Rams',
          basketball: 'Milwalkee Bucks',
          soccer: ['Manchester United','Liverpool']
      }
  ]
}

/* 
access:
blue
C++
LA Rams
Chicago Fire
Liverpool
*/

console.log(person2.favColor)

const { progLanguages, favColor, name: myName } = person2

console.log(favColor, progLanguages, myName)

function displayPerson(person){
  console.log(`
  Name: ${person.name}
  Favorite Color: ${person.favColor}
  Languages: ${person.progLanguages}
  `)
}

function displayPerson2({name, favColor, progLanguages}){
  console.log(`
  Name: ${name}
  Favorite Color: ${favColor}
  Languages: ${progLanguages}
  `)
}

displayPerson2(person2)

const ob1 = {'foo':'bar', 1:0}
const ob2 = ob1
const ob3 = {'foo':'bar', 1:0}
const ob4 = {...ob1}

console.log(ob1 === ob2)
console.log(ob1 === ob3, 'o1 o3')

ob2.newKey = 'update'
ob3.test = 'test'

console.table(ob2)
console.table(ob3)


ob4.one = 1
console.log(ob4)

console.table(ob1)