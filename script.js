// Button Click Events
signupbtn = document.getElementById("signup")
loginbtn = document.getElementById("login")

signupbtn.addEventListener("click", () =>
{
    window.location.href = "/signup bundle/index.html"
})

loginbtn.addEventListener("click", () =>
{
    window.location.href = "/login bundle/index.html"
})

if(localStorage.getItem('currentShopper'))
{
    window.location.href = '/shop bundle/index.html'
}
