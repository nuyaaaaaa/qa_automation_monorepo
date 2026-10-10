const { test, expect } = require('@playwright/test');

test('if/else конструкція', async ({ page }) => {

const USER_AGE = 18;

if (USER_AGE === 18) {
    console.log('Вітаємо з повноліттям!');
} 
// else if (USER_AGE < 18) {
//         console.log('Доступ обмеженно за віком');
// }
//         else {
//             console.log('Доступ дозволенно')
// }   
});

test('оператори порівняння', async ({ page }) => {
    console.log (18 === 18); // true
    console.log (18 === '18'); // false
});


test('перевірка за віком і згодою', async ({ page }) => {

    const USER_AGE = 18;
    const hasAgreedToTerms = false;
    const isEligible  = USER_AGE >= 18 && hasAgreedToTerms 

if (isEligible) {
        console.log ('Вітаємо з повонліттям!');
    } else {
        console.log ("Доступ забороенно");

   }
});