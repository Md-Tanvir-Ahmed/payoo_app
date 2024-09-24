// console.log('button clicking file added')


// search: form submit reloading the page


// step-1 set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step-2 prevent default behavior (prevent reloading browser)
    event.preventDefault();     //vejal to beginners
    


    // step-3: get the phone number and the pin number
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber);
    console.log(pinNumber);


    // step-4: validate phone and pin
    // This is temporary. You should do like this.
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href= '/home.html'
        // step-5: allow user the  to use the website
    }else{
        alert('Wrong phone number or pin');
    }
});