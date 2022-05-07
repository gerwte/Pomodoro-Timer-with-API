"use strict";
let buttons = document.querySelectorAll('.modes > button');
let timeShow = document.querySelector('.timer');
let taskTextOne = document.querySelector('.what__task-1');
let taskTextTwo = document.querySelector('.what__task-2');
let taskTextThree = document.querySelector('.what__task-3');
let taskTextFour = document.querySelector('.what__task-4');
let taskTextFive = document.querySelector('.what__task-5');
let taskButtonOne = document.querySelector('.confirm-1');
let taskButtonTwo = document.querySelector('.confirm-2');
let taskButtonThree = document.querySelector('.confirm-3');
let taskButtonFour = document.querySelector('.confirm-4');
let taskButtonFive = document.querySelector('.confirm-5');
let taskFieldOne = document.querySelector('.task-first');
let taskFieldTwo = document.querySelector('.task-second');
let taskFieldThree = document.querySelector('.task-third');
let taskFieldFour = document.querySelector('.task-fourth');
let taskFieldFive = document.querySelector('.task-fifth');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset__button');
let taskCountField = document.querySelector('.task__counter');
let dialogWindow = document.querySelector('.window');
let contentWindow = document.querySelector('.window__content');
let closeButton = document.querySelector('.window__button');
let [workButton, breakButton, longBreakButton] = buttons;
let windowTime = document.querySelector('.window__tasks');
// Работа с тасками
let firstTaskTime = document.querySelector('.first__time');
let secondTaskTime = document.querySelector('.second__time');
let thirdTaskTIme = document.querySelector('.third__time');
let fourthTaskTime = document.querySelector('.fouth__time');
let fifthTaskTime = document.querySelector('.fifth__time');
let click = 0;
function taskCounterOne() {
    taskFieldOne.style.textDecoration = 'line-through';
    click = ++click;
    taskCountField.innerHTML = click;
}
function taskCounterTwo() {
    taskFieldTwo.style.textDecoration = 'line-through';
    click = ++click;
    taskCountField.innerHTML = click;
}
function taskCounterThree() {
    taskFieldThree.style.textDecoration = 'line-through';
    click = ++click;
    taskCountField.innerHTML = click;
}
function taskCounterFour() {
    taskFieldFour.style.textDecoration = 'line-through';
    click = ++click;
    taskCountField.innerHTML = click;
}
function taskCounterFive() {
    taskFieldFive.style.textDecoration = 'line-through';
    click = ++click;
    taskCountField.innerHTML = click;
}
let timeCounter = document.querySelector('.time-select');
let confirmButton = document.querySelector('.confirm__button');
// Таск 1
taskButtonOne.onclick = ()=>{
    let task = taskTextOne.value;
    taskFieldOne.innerHTML = task;
    taskTextOne.value = '';
    taskFieldOne.style.textDecoration = 'none';
    windowTime.show();
    confirmButton.onclick = ()=>{
        windowTime.close();
        document.querySelector('.first__timer').innerHTML = `${timeCounter.value}:00`;
    };
};
document.querySelector('.play__button__first').onclick = ()=>{
    let timeSelected = timeCounter.value * 60;
    let countTimer = setInterval(function() {
        let seconds = timeSelected % 60;
        let minutes = timeSelected / 60 % 60;
        let hour = timeSelected / 60 / 60 % 60;
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        if (timeSelected <= 0) clearInterval(countTimer);
        else {
            document.querySelector('.first__timer').innerHTML = strTimer;
            timeSelected = timeSelected - 1;
        }
        taskFieldOne.onclick = ()=>{
            taskCounterOne();
            clearInterval(countTimer);
            document.querySelector('.first__timer').innerHTML = '00:00';
        };
    }, 1000);
};
// Таск 2
taskButtonTwo.onclick = ()=>{
    let task = taskTextTwo.value;
    taskFieldTwo.innerHTML = task;
    taskTextTwo.value = '';
    taskFieldTwo.style.textDecoration = 'none';
    windowTime.show();
    confirmButton.onclick = ()=>{
        windowTime.close();
        document.querySelector('.second__timer').innerHTML = `${timeCounter.value}:00`;
    };
};
document.querySelector('.play__button__second').onclick = ()=>{
    let timeSelected = timeCounter.value * 60;
    let countTimer = setInterval(function() {
        let seconds = timeSelected % 60;
        let minutes = timeSelected / 60 % 60;
        let hour = timeSelected / 60 / 60 % 60;
        if (timeSelected <= 0) clearInterval(countTimer);
        else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            document.querySelector('.second__timer').innerHTML = strTimer;
        }
        timeSelected = timeSelected - 1;
        taskFieldTwo.onclick = ()=>{
            taskCounterTwo();
            clearInterval(countTimer);
            document.querySelector('.second__timer').innerHTML = '00:00';
        };
    }, 1000);
};
// Таск 3
taskButtonThree.onclick = ()=>{
    let task = taskTextThree.value;
    taskFieldThree.innerHTML = task;
    taskTextThree.value = '';
    taskFieldThree.style.textDecoration = 'none';
    windowTime.show();
    confirmButton.onclick = ()=>{
        windowTime.close();
        document.querySelector('.third__timer').innerHTML = `${timeCounter.value}:00`;
    };
};
document.querySelector('.play__button__third').onclick = ()=>{
    let timeSelected = timeCounter.value * 60;
    let countTimer = setInterval(function() {
        let seconds = timeSelected % 60;
        let minutes = timeSelected / 60 % 60;
        let hour = timeSelected / 60 / 60 % 60;
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        if (timeSelected <= 0) clearInterval(countTimer);
        else {
            document.querySelector('.third__timer').innerHTML = strTimer;
            timeSelected = timeSelected - 1;
        }
        taskFieldThree.onclick = ()=>{
            taskCounterThree();
            clearInterval(countTimer);
            document.querySelector('.third__timer').innerHTML = '00:00';
        };
    }, 1000);
};
// Таск 4
taskButtonFour.onclick = ()=>{
    let task = taskTextFour.value;
    taskFieldFour.innerHTML = task;
    taskTextFour.value = '';
    taskFieldFour.style.textDecoration = 'none';
    windowTime.show();
    confirmButton.onclick = ()=>{
        windowTime.close();
        document.querySelector('.fourth__timer').innerHTML = `${timeCounter.value}:00`;
    };
};
document.querySelector('.play__button__fourth').onclick = ()=>{
    let timeSelected = timeCounter.value * 60;
    let countTimer = setInterval(function() {
        let seconds = timeSelected % 60;
        let minutes = timeSelected / 60 % 60;
        let hour = timeSelected / 60 / 60 % 60;
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        if (timeSelected <= 0) clearInterval(countTimer);
        else {
            document.querySelector('.fourth__timer').innerHTML = strTimer;
            timeSelected = timeSelected - 1;
        }
        taskFieldFour.onclick = ()=>{
            taskCounterFour();
            clearInterval(countTimer);
            document.querySelector('.fourth__timer').innerHTML = '00:00';
        };
    }, 1000);
};
// Таск 5
taskButtonFive.onclick = ()=>{
    let task = taskTextFive.value;
    taskFieldFive.innerHTML = task;
    taskTextFive.value = '';
    taskFieldFive.style.textDecoration = 'none';
    windowTime.show();
    confirmButton.onclick = ()=>{
        windowTime.close();
        document.querySelector('.fifth__timer').innerHTML = `${timeCounter.value}:00`;
    };
};
document.querySelector('.play__button__fifth').onclick = ()=>{
    let timeSelected = timeCounter.value * 60;
    let countTimer = setInterval(function() {
        let seconds = timeSelected % 60;
        let minutes = timeSelected / 60 % 60;
        let hour = timeSelected / 60 / 60 % 60;
        if (timeSelected <= 0) clearInterval(countTimer);
        else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            document.querySelector('.fifth__timer').innerHTML = strTimer;
        }
        timeSelected = timeSelected - 1;
        taskFieldFive.onclick = ()=>{
            taskCounterFive();
            clearInterval(countTimer);
            document.querySelector('.fifth__timer').innerHTML = '00:00';
        };
    }, 1000);
};
// Установка таймера
let timeWork = 1500;
let timeBreak = 300;
let timeLongBreak = 900;
let watcherTimer = '';
let workTimer = '';
let breakTimer = '';
let longBreakTimer = '';
// Функция проигрывания уведомления
function soundPlay() {
    let audio = new Audio('notification.mp3');
    audio.play();
}
let workClick = 0;
function workClicker() {
    workClick = ++workClick;
    if (workClick % 2 == 0) {
        dialogWindow.show();
        reminderContent.innerHTML = 'Long break time!!!';
    }
}
let workCounter = 0;
function breakReminder() {
    workCounter = ++workCounter;
    if (workCounter % 2 == 0) {
        dialogWindow.show();
        contentWindow.innerHTML = 'Long break time!!!';
        closeButton.onclick = ()=>{
            dialogWindow.close();
        };
    }
}
// Таймер работы
workButton.onclick = ()=>{
    watcherTimer = {
        name: workTimer,
        timeCount: timeWork
    };
    workTimer = setInterval(function() {
        let seconds = timeWork % 60 // секунды
        ;
        let minutes = timeWork / 60 % 60 // минуты
        ;
        if (timeWork <= 0) {
            clearInterval(workTimer);
            soundPlay();
            breakReminder();
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timeShow.innerHTML = strTimer;
        }
        --timeWork; //уменьшаем таймер
        stopButton.onclick = ()=>{
            clearInterval(workTimer);
        };
    }, 1000);
};
// Таймер короткого перерыва 
breakButton.onclick = ()=>{
    watcherTimer = {
        name: breakTimer,
        timeCount: timeBreak
    };
    breakTimer = setInterval(function() {
        let seconds = timeBreak % 60;
        let minutes = timeBreak / 60 % 60;
        if (timeBreak <= 0) {
            // breakTimer.reset;
            clearInterval(breakTimer);
            soundPlay();
        // breakTimer();
        // Выдает ошибку в консоли о том, что breakTimer - не функция
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timeShow.innerHTML = strTimer;
        }
        --timeBreak;
        stopButton.onclick = ()=>{
            clearInterval(breakTimer);
            breakTimer();
        };
    }, 1000);
};
resetButton.onclick = ()=>{
    // 2 argumnets - timeBreak, breakTimer
    timeBreak = 300;
    timeWork = 1500;
    timeLongBreak = 900;
    clearInterval(watcherTimer.name);
    let seconds = watcherTimer.timeCount % 60;
    let minutes = watcherTimer.timeCount / 60 % 60;
    let strTimer = `${Math.trunc(minutes)}:${seconds}`;
    timeShow.innerHTML = strTimer;
};
// Таймер длинного перерыва
longBreakButton.onclick = ()=>{
    watcherTimer = {
        name: longBreakTimer,
        timeCount: timeLongBreak
    };
    longBreakTimer = setInterval(function() {
        let seconds = timeLongBreak % 60;
        let minutes = timeLongBreak / 60 % 60;
        if (timeLongBreak <= 0) {
            clearInterval(longBreakTimer);
            soundPlay();
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timeShow.innerHTML = strTimer;
        }
        --timeLongBreak;
        stopButton.onclick = ()=>{
            clearInterval(longBreakTimer);
        };
    }, 1000);
};
closeButton.onclick = ()=>{
    dialogWindow.close();
};
// // Начало рабочего времени
let nowFull = new Date().toLocaleTimeString();
let now = nowFull.split(':');
let [hourTime, minutTime, secondTime] = now;
function ready() {
    dialogWindow.show();
    if (Number(hourTime) > 8 || Number(minutTime) > 5 && Number(hourTime) === 8) contentWindow.innerHTML = "You are late.<br><br>You should plan your time better!";
    else contentWindow.innerHTML = "You came on time.<br><br>Good work!";
}
let lateWindow = setTimeout(ready, 1000);
// Конец рабочего времени
function timeUpdate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours === 17 && minutes === 0) {
        dialogWindow.show();
        if (click <= 5) contentWindow.innerHTML = `Your work time You completed ${click} tasks.<br>You should plan your work time better!`;
        else if (click > 5 && click <= 8) contentWindow.innerHTML = `You completed ${click} tasks.<br>Not bad, but you can do better!`;
        else contentWindow.innerHTML = `You completed ${click} tasks.<br>That's good work!`;
    }
}
let timeCall = setInterval(timeUpdate, 1000);

//# sourceMappingURL=index.672d4772.js.map
