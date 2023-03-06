console.log("Login");

// localStorage
const shoppers = JSON.parse(localStorage.getItem('shoppers')) || []
console.log(shoppers);

// Login Form
let loginform = document.getElementById("login")

loginform.addEventListener("submit", (e) =>
{
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let alert = document.getElementById("alert")

    const shopper = shoppers.find(shopper => shopper.email === email && shopper.password === password)
    console.log(shopper);

    if(!validateEmail(email))
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email is EMPTY or INVALID"; 
        alert.style.color = "red";
    }
    else if(password === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email cannot be EMPTY"; 
        alert.style.color = "red";
    }
    else if(!shopper)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Invalid Email or Password!"
        alert.style.color = "red";
    }
    else
    {
        const currentShopper = {...shopper}
        localStorage.setItem("currentShopper", JSON.stringify(currentShopper));

        window.location.href = 'shop.html'
    }
})

if(localStorage.getItem("currentShopper"))
{
    window.location.href = 'shop.html'
}

function validateEmail(mail)
{
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(mail);
}