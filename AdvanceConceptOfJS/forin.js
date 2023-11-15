// The for...in loop in JavaScript is used for iterating over the properties of an object. It is not typically used to iterate over the elements of an array or other iterable collections like strings, maps, or sets. Instead, you would use other constructs like for...of for arrays and iterable objects.

// example

// for (let key in object) {
//     console.log(key, object[key]);
// }

const obj = {
    name: 'Shahzad',
    age: '27',
    profession: 'Software Engineer',
};

// for (let key in obj) {
//     // this part only print key/property name like name, age profession
//     // console.log(key);
//     // to print both key/property name and value do this
//     console.log(`${key}: ${obj[key]}`);
// }

// 2: Configurable Settings:
// You might use for...in when you have a configuration object with various settings, and you want to apply those settings in your application. In a game, for example, you can iterate through a settings object to configure game options.

// const gameSettings = {
//     difficulty: 'medium',
//     soundEffectsOn: true,
//     animation: 'on',
// };

// for ( let setting in gameSettings) {
//     console.log(setting);
// }


const products = [
    {
        name: 'product-1',
        price: '$50',
        description: 'This is a great product!',
        image: 'product1.jpg'
    },
    {
        name: 'product-2',
        price: '$25',
        description: 'This is a great product!',
        image: 'product2.jpg'
    },
];

products.forEach( (product)=> {
    console.log('Product Name: ', product.name);
    // to create product listing in js

    for (let item in product) {
        if ( item === "image") {
            // display the product images
            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', product[item]);
            document.getElementsById('product-list').appendChild(imgElement);
        } else {
            const detailElement = document.createElement("p");
            detailElement.textContent = item + ": " + product[item];
            document.getElementById("product-list").appendChild(detailElement);
        }
    }
});
