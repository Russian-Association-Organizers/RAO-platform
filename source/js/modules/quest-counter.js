// "use strict"

// Ник пользователя
let userName;
let userNameBlock = document.querySelector('.user-name');
// ID пользователя
let userId;
let userIdBlock = document.querySelector('.user-id');
// Количество баллов конкретного пользователя
let personalCount;
let personalCountBlock = document.querySelector('.score-counter_number');
// Процентное соотношение общих баллов к необходимому числу
let progressPercent;
let progressPercentBlock = document.querySelector('.progress_percent');
// Общее количество баллов на данный момент
let progressAvailable;
let progressAvailableBlock = document.querySelector('.progress_relation--available');
// Необходимое количество баллов
let progressNecessary;
let progressNecessaryBlock = document.querySelector('.progress_relation--necessary');

personalCountBlock.textContent = `150`;

console.log("Feirly Moore");