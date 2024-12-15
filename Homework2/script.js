const numbers = [4, 2, 8, 5, 9, 12,3];

 function sumEvenNumbers(array) {
     let sum = 0;
     for (let number of array) {
        if (number % 2 === 0) {
            sum += number;
         }
     }
    return sum;
 };

 const evenSum = sumEvenNumbers(numbers);
 console.log(`Сумма чётных чисел: ${evenSum}`);

function sumOddNumbers(array) {
    let sum2 = 0;
    for(let number of array){
        if(number % 2 !==0){
        sum2 += number
    }
}
    return sum2;
};

 const oddSum = sumOddNumbers(numbers);
console.log(`Сумма нечётных чисел: ${oddSum}`);

function getMaxSum(evenSum , oddSum){
    return Math.max(evenSum, oddSum)
};

const maxSum = getMaxSum(evenSum, oddSum);
console.log(`Наибольшая сумма: ${maxSum}`);


function repeatStringToArray(count, str) {
    if (typeof count !== 'number' , count < 0 , !Number.isInteger(count)) {
        throw new Error("Первый аргумент должен быть неотрицательным целым числом");
    }
    if (typeof str !== 'string') {
        throw new Error("Второй аргумент должен быть строкой");
    }

    return Array(count).fill(str);
}
const result = repeatStringToArray(3, "dog");
console.log(result);

const books = [
        {
            title: "Game of Thrones",
            author: "George Martin",
            pages: [768],
        },
        {
            title: "Harry Potter",
            author: "Joanne Rowling",
            pages: [870],
        },
        {
            title: "Jack of Shadows",
            author: "Roger Zelazny",
            pages: [236],
        },
        {
            title: "Don Quijote",
            author: "Miguel de Cervantes",
            pages: [600],
        }
];
function getThickestBook(books){
     for(let i = 0; i < books.length; i++){
        const thickestBook = books.reduce((maxBook, currentBook) => {
            return currentBook.pages > maxBook.pages ? currentBook : maxBook;
          });
        
          return thickestBook;
        } 
    }
const thickestBook = getThickestBook(books);
console.log(thickestBook);