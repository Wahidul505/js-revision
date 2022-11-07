const name = 'wahidul alam';
let speak = 'something';
speak = 'nothing';
// console.log(name, say);
if (name === 'wahidul al' && speak === 'nothing') {
    // console.log('matched at first');
}
else if (speak === 'something' || name === 'wahidul alam') {
    // console.log('matched at second');
}
else {
    // console.log("didn't matched");
}
//
const arr = ['something', 'anything', 'nothing', 1, 2, 3];
arr.push(5);
arr.unshift(5);
arr.shift();
arr.shift();
arr.unshift(10);
arr[4] = 12;
// console.log(arr.indexOf(2));

//
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
};

let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++;
}

//
function run(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    const mult = sum * 2;
    return mult;
}

const result = run(1, 2, 3);
// console.log(result);

//
const obj = {
    name: 'RDJ',
    age: 52,
    movies: ['IronMan', 'IronMan2', 'IronMan3']
}
const movie = obj.movies[2];
// console.log(movie);

//
const products = [
    { id: 1, name: 'something', price: 12, color: 'white' },
    { id: 2, name: 'nothing', price: 34, color: 'yellow' },
    { id: 3, name: 'anything', price: 67, color: 'orange' },
    { id: 4, name: 'everything', price: 45, color: 'gray' },
    { id: 5, name: 'aThing', price: 87, color: 'teal' },
    { id: 6, name: 'bThing', price: 99, color: 'pink' }
];
const anotherArr = [1, 45, 'sshhhhhh', 60];

const say = `Hey I know ${anotherArr[0]} thing that ${products[0].name} is better than ${products[1].name} with the color ${products[5].color}. So ${anotherArr[2]}`;
// console.log(say);

//
const newArr = [...anotherArr, 69, 6969];
anotherArr.push('newOne');
// console.log(newArr);

const newProducts = { ...products[0], obj };
// console.log(newProducts);


//
const names = products.map(product => product.name);
const priceWithExtraOne = products.map(product => product.price + 1);
const priceLess50 = products.filter(product => product.price < 50);
const priceLess50Again = products.find(product => product.price < 50);
const colorWithTeal = products.find(product => product.color.includes('teal'));
const exceptGray = products.filter(product => !product.color.includes('gray'));
// console.log(exceptGray);

//
const add = () => 9;
const multiplyBy12 = num => num * 12;
const addAndDivideBy4 = (num1, num2) => (num1 + num2) / 4;
const doMath = (num1, num2, num3) => {
    const first = num1 + 5;
    const second = num2 + 5;
    const third = num3 + 5;
    const multiply = first * second * third;
    return multiply;
}
const result2 = multiplyBy12(2)
const result3 = addAndDivideBy4(14, 18);
const result4 = doMath(1, 2, 5);
// console.log(result4)


const [a, b] = [12, 14];
// console.log(a, b);
const arr2 = [a, b];
// console.log(arr2);
const [c, d] = arr2;
// console.log(c, d);
const createArr = (num1, num2) => {
    const newArr = [num1, num2];
    return newArr;
}

const [x, y] = createArr(20, 30);
// console.log(x, y)

const newObj = { name: 'Wahidul Alam', age: 24, job: 'developer' };
const { age, job } = newObj;

// console.log(age, job);

const newObjJSON = JSON.stringify(newObj);
// console.log(newObjJSON)
const newObjParse = JSON.parse(newObjJSON);
// console.log(newObjParse);

const keys = Object.keys(newObj);
const values = Object.values(newObj);
// console.log(keys)
// console.log(values);

const productsArray = [
    { id: 1, name: 'something', price: 12, color: 'white' },
    { id: 2, name: 'nothing', price: 34, color: 'yellow' },
    { id: 3, name: 'anything', price: 67, color: 'orange' },
    { id: 4, name: 'everything', price: 45, color: 'gray' },
    { id: 5, name: 'aThing', price: 87, color: 'teal' },
    { id: 6, name: 'bThing', price: 99, color: 'pink' }
];

const newProduct = { id: 7, name: 'newThing', price: 45, color: 'cyan' };

const newProductsArray = [...productsArray, newProduct];
// console.log(newProductsArray);

const exceptOrange = productsArray.filter(product => product.color !== 'orange');
// console.log(exceptOrange);

//
let m = 12;
const n = 15;
const ternary = m > 10 && n % 5 === 0 ? true : false;
// console.log(ternary);
// m > 15 || n % 5 === 0 ? console.log('done') : console.log('not done'); 

if (!m) {
    // console.log('doneeee');
}
else {
    // console.log('not doneee');
}

const show = () => console.log('showing');
const hide = () => console.log('hiding');

// m && show();
// !m || hide();
 
m = !m;
// console.log(m);
