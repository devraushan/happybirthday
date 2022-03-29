const deadline = 'April 9 2022 23:59:59 GMT+0530';
function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60);
    const minutes = Math.floor( (total/60000) % 60);
    const hours = Math.floor( (total/(1000*60*60)) % 24);
    const days = Math.floor( (total/(1000*60*60*24)));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}
const deadlinee = 'March 29 2022 16:55:15';
function initializeClock(id,endtime){
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector(".days");
    const daybox = clock.querySelector(".daybox");
    const hoursSpan = clock.querySelector('.hours');
    const hourbox = clock.querySelector('.hourbox');
    const minutsSpan = clock.querySelector('.minutes');
    const minutebox = clock.querySelector(".minutebox");
    const secondsSpan = clock.querySelector('.seconds');
    const secondbox = clock.querySelector('.secondbox');
    const mobilewale = clock.querySelector('.mobilewale');
    const hdr1 = clock.querySelector(".header1");

    function updateClock(){
        const t = getTimeRemaining(endtime);
        
        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutsSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total <= 0) {
           clearInterval(timeinterval);
           clock.removeChild(daybox);
           clock.removeChild(hourbox);
           clock.removeChild(minutebox);
           clock.removeChild(secondbox);
           clock.removeChild(mobilewale);
           hdr1.textContent = 'The Special Day Is Here...'
           const passworbox = document.createElement('div');
           passworbox.className = 'passbox';
           passworbox.id = "passbox"
           const lebel = document.createElement('p');
           lebel.className = 'Enterpass';
           const textInstruction = document.createTextNode("Enter Password To Continue : ");
           const passwordInput = document.createElement('input');
           passwordInput.name = 'inputBox';
           passwordInput.id = 'inputbox';
           passwordInput.type = 'password';
           const submitbtn = document.createElement('button');
           submitbtn.setAttribute('id','donebtn');
           submitbtn.setAttribute('onclick',"securitycheck()");
           const btntext = document.createTextNode('Submit');
           clock.appendChild(passworbox);
           passworbox.appendChild(lebel);
           lebel.appendChild(textInstruction);
           passworbox.appendChild(passwordInput);
           passworbox.appendChild(submitbtn);
           submitbtn.appendChild(btntext);
        

        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
    
}

initializeClock('clockdiv',deadlinee);