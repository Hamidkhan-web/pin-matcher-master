 // Pin generator
 function generatePin(){
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('displayGenerator').value = pin;
}




function submitPin(){
    if(document.getElementById('displayInput').value == document.getElementById('displayGenerator').value){
        document.getElementById('successful').style.display = "block";
        document.getElementById("unsuccessful").style.display = "none";
    } else {
        document.getElementById("unsuccessful").style.display = "block";
        document.getElementById('successful').style.display = "none";
        document.getElementById('trying').innerHTML--;
        
    }
    if (document.getElementById("trying").innerHTML < 1){
        submitBtn.disabled = true;
        displayInput.value = '';
        submitBtn.style.background = '#717277';
    }
    
}

function input(num){
    document.getElementById('displayInput').value = document.getElementById('displayInput').value + num;
}
// Clear 
function clean(){
    document.getElementById('displayInput').value = '';
}
// backspace 
function back(){
    let value = document.getElementById('displayInput').value;
    document.getElementById('displayInput').value = value.substr(0, value.length -1);
  
}

    





