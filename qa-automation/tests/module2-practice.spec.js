import { test } from '@playwright/test';

test('тестові дані для перевірки логіну', async () => {
    const testEmails = ['asd@gmail.com', 'asd@', '@gmail.com', '', '!@#$%^&*@gmail.com'];

console.log (testEmails);
testEmails.push('another@example.com');
console.log (testEmails);
let checksPassed = 0; //значення змінеться
});


test('перевірка кількості знайдених рецептів', async () => {
    const recipesFoundText = '7';
    const recipesFound = Number(recipesFoundText);

if (recipesFound === 0) {
    console.log('Рецепт не знайденно');
} 
 else if (recipesFound === 12) {
        console.log('Знайденно очікувану кількість рецептів');
}
         else {
            console.log('Знайденно іншу кількість рецептів');
         }
         const recipeAuthor = null;
         const authorName = recipeAuthor || 'Автор невідомий';
         console.log(recipeAuthor || 'Автор невідомий');
   
});

test('перебір email через continue і break', async () => {
    const testEmails = ['asd@gmail.com', 'asd@', '@gmail.com', '', '!@#$%^&*@gmail.com', 'another@example.com','another@example.com'];
    let checksPassed = 0;
    for (const email of testEmails) {
        if (email === ''){
            console.log('Пропуск порожнього поля')
            continue;
        }
            
            if (email === 'another@example.com') {
            console.log('Знайдено спеціальний email, зупиняємо цикл через break');
            break;
        }

        checksPassed++;
        console.log(`Оброблено email: ${email}, поточний лічильник: ${checksPassed}`);
    }
});

  test('зменшення часу приготування через цикли', async () => {

    let timeWhile = 90;
    console.log('--- Старт циклу while ---');
    while (timeWhile >= 30) {
        console.log(`Поточний час (while): ${timeWhile} хв`);
        timeWhile -= 10; 
    }

    
    let timeDoWhile = 90;
    console.log('--- Старт циклу do...while ---');
    do {
        console.log(`Поточний час (do...while): ${timeDoWhile} хв`);
        timeDoWhile -= 10; 
    } while (timeDoWhile >= 30);  
 });

      

  
