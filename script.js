// Button Click Events
signupbtn = document.getElementById("signup")
loginbtn = document.getElementById("login")

signupbtn.addEventListener("click", () =>
{
    window.location.href = "signup.html"
})

loginbtn.addEventListener("click", () =>
{
    window.location.href = "login.html"
})

if(localStorage.getItem('currentShopper'))
{
    window.location.href = 'shop.html'
}
