const timeDisplay= () => {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    
    document.querySelector(".hours").innerHTML = hrs;
    document.querySelector(".mins").innerHTML = min;
    document.querySelector(".secs").innerHTML = sec;
}

setInterval(timeDisplay, 10);