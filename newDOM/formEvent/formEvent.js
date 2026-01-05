let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();  // used to stop redirecting to the next page
    console.log(form);

    let user = this.elements[0];  // form.elements[0]
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`hello ${user.value} your pass is set to ${pass.value}`);
});