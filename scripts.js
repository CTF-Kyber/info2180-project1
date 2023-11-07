document.addEventListener('DOMContentLoaded', function(){

    let message = document.getElementsByClassName("message")[0];
    let button = document.getElementsByTagName("button")[0];
    let email = document.getElementById("email");
    
  
    button.addEventListener('click', (event) =>{

        event.preventDefault();
        if (email.value === '' || email.value === null){
            message.textContent = 'Please enter a valid email address.';
        }
        else{
            message.textContent = `Thank you! Your email address, ${email.value}, has been added to our mailing list.`;
        }

    });
})
