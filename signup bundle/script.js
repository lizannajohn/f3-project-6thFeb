// localStorage
const shoppers = JSON.parse(localStorage.getItem('shoppers')) || []

// Redirect if already logged in
if(localStorage.getItem('currentShopper'))
{
    window.location.href = '/shop bundle/index.html'
}

// Alert Div
let alert = document.getElementById("alert")

// Button
let signupform = document.getElementById("signup")

signupform.addEventListener("submit", (e) =>
{
    e.preventDefault();

    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confpassword = document.getElementById("confPassword").value;
    
    if(!validateName(fname))
    {
        alert.classList.remove("hide");
        alert.innerHTML = "First Name is either EMPTY or DOESN'T contain letters"; 
        alert.style.color = "red";
    }
    else if(!validateName(lname))
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Last Name is either EMPTY or DOESN'T contain letters"; 
        alert.style.color = "red";
    }
    else if(!validateEmail(email))
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email is EMPTY or INVALID"; 
        alert.style.color = "red";
    }
    else if(!validatePassword(password))
    {
        alert.classList.remove("hide");
        alert.innerHTML =
        `
            Password is either EMPTY or <br>
            DOESN'T match the criteria given below:
            <ul>
                <li> Contains at least one digit </li>
                <li> Contains at least one lowercase letter </li>
                <li> Contains at least one uppercase letter </li>
                <li> Contains only letters and digits </li>
                <li> Is at least 8 characters long </li>
            </ul>

        `; 
        alert.style.color = "red";
    }
    else if(!validatePassword(confpassword))
    {
        alert.classList.remove("hide");
        alert.innerHTML =
        `
            Confirm Password is either EMPTY or <br>
            DOESN'T match the criteria given below:
            <ul>
                <li> Contains at least one digit </li>
                <li> Contains at least one lowercase letter </li>
                <li> Contains at least one uppercase letter </li>
                <li> Contains only letters and digits </li>
                <li> Is at least 8 characters long </li>
            </ul>

        `; 
        alert.style.color = "red";
    }
    else if(password !== confpassword)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords DON'T match! Try again!"; 
        alert.style.color = "red";
    }
    else
    {
        if(shoppers.some(shopper => shopper.email === email))
        {
            console.log("User already exists!");
            alert.classList.remove("hide");
            alert.innerHTML = "User Email already exist! Use another Email ID"; 
            alert.style.color = "red";
        }
        else
        {
            const shopper = {fname, lname, email, password}
            shoppers.push(shopper)
            localStorage.setItem('shoppers', JSON.stringify(shoppers))

            alert.classList.remove("hide");
            alert.innerHTML = "Form submitted SUCCESSFULLY! Login to continue!"; 
            alert.style.color = "green";

            console.log(shopper);
            console.log(shoppers);

            signup.reset();
        }
    }
});

// Validation Functions
function validateName(name)
{
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name);
}

function validateEmail(mail)
{
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(mail);
}

function validatePassword(password)
{
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return pattern.test(password);
}