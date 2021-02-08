function clock (selector) {
    const clockDOM = document.querySelector(selector);
    let allValuesDom = null;
    const deadline = '12-04 14:00:00';
    let numbers = calcTime(deadline);
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';
   //         console.log(numbers);
    for (let i = 0; i < 4; i++) {
console.log(numberFormat(numbers[i]));
        HTML += `<div class="time">
                <div class="value">${numberFormat(numbers[i])}</div>
                 <div class="label">${labels[i]}</div>
        </div>`; 
    }

    clockDOM.innerHTML = HTML; 
    allValuesDom = document.querySelectorAll(`${selector} .value`);

    setInterval(function () {
        numbers = calcTime(deadline);
        for (let i = 0; i < 4; i++){
            allValuesDom[i].innerText = numberFormat(numbers[i]);

        }
    }, 1000);
}

function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
return number;
}

function calcTime(deadline) {
    const date = new Date();
    const now = Date.now();
    let year = date.getFullYear();
    let FullDeadline = `${year}-${deadline}`;
    const fullDeadlineInMiliseconds = (new Date(FullDeadline)).getTime();
 

    if (fullDeadlineInMiliseconds < now) {
        year ++;
        fullDeadline = `${year}-${deadline}`;
        fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();
     }


    const diff = fullDeadlineInMiliseconds - now;
    const seconds = Math.round(diff / 1000);
    
    const days = Math.floor(seconds / 60 / 60 / 24);
    let unusedSeconds = seconds - days * 60 * 60 * 24;

    const hours = Math.floor(unusedSeconds / 60 / 60);
    unusedSeconds -= hours * 60 * 60;

    const minutes = Math.floor (unusedSeconds / 60);
    unusedSeconds -= minutes * 60;
    
    
    return [days, hours, minutes, unusedSeconds];

}


export { clock }