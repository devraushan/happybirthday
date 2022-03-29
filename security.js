
var loopchecker = 0;
function securitycheck(){
    const clock1 = document.querySelector('.mainbox');
    const pswd = document.getElementById('inputbox').value;
    if(pswd == "Itsmybirthday"){
        window.open('happybdday.html');
        
    }
    else {
        
        if(loopchecker == 0 ){
        const passwordbox1 = document.getElementById('passbox');
        const passwordInput = document.getElementById("inputbox");
        const wrongpasscont = document.createElement('p');
        wrongpasscont.className = "wrongpass1";
        const wrongpass = document.createTextNode("Fir se password dal...");
        passwordbox1.appendChild(wrongpasscont);
        wrongpasscont.appendChild(wrongpass);
        alert('wrong password');
        loopchecker = loopchecker+1;
        }
        
        
    }
}
