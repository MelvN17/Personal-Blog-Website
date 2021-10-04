function time(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let x = document.getElementById('time');
    
    x.innerHTML = (hours<10 ? "0":"")+ hours +":"+ (minutes<10 ? "0":"") + minutes+":"+(seconds<10?"0":"")+ seconds;
    console.log(x);
}

setInterval(time, 1000);