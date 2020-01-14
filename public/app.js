(function(){
button.addEventListener('click', e =>{
        var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
        console.log(email);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });
}());