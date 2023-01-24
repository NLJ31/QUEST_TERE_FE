function showPassword(){
    var x = document.getElementById("Passowrd-login");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    
    if(x.type==='password'){
        x.type="text";
        y.style.display="none";
        z.style.display="block";
    }  
    else{
        x.type="password";
        y.style.display="block";
        z.style.display="none";
        
    }
}

function forgetpassword(){

    var pass = document.getElementById("EMAIL").value

    if(pass==""){
        alert('Please Enter a Registered Email');
        return false;
    }
    alert('Please Check Your Email');
}