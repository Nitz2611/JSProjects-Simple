const body = document.body
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')


//function to generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};

let colorChangeId;
const startChangingColor = function () {
    //edgecase
    if(!colorChangeId){
        colorChangeId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        body.style.backgroundColor = randomColor();
    }
}

start.addEventListener('click', startChangingColor)

stop.addEventListener('click', () => {
    clearInterval(colorChangeId)
    colorChangeId = null;
})

