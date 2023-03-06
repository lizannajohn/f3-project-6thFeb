const currentShopper = JSON.parse(localStorage.getItem('currentShopper'))

// Alert Div
let alert = document.getElementById("alert")

if(!currentShopper)
{
    window.location.href = "index.html"
}

let updatedetailsform = document.getElementById("updatedetails")

updatedetailsform.addEventListener("submit", (e) =>
{
    e.preventDefault();

    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    let oldpwd = document.getElementById("old-password").value
    let newpwd = document.getElementById("new-password").value
    let confnewpwd = document.getElementById("new-confPassword").value

    if(!validateName(fname))
    {
        alert.classList.remove("hide");
        alert.innerHTML = "First Name is either EMPTY or DOESN'T contain letters"; 
        alert.style.color = "red";
    }
    else if(fname === currentShopper.fname)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "First Name is the SAME as before!"; 
        alert.style.color = "red";
    }
    else if(!validateName(lname))
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Last Name is either EMPTY or DOESN'T contain letters"; 
        alert.style.color = "red";
    }
    else if(lname === currentShopper.lname)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Last Name is the SAME as before!"; 
        alert.style.color = "red";
    }
    else if(!validatePassword(oldpwd))
    {
        alert.classList.remove("hide");
        alert.innerHTML =
        `
            Old Password is either EMPTY or <br>
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
    else if(oldpwd != currentShopper.password)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Old Password does NOT match!"
        alert.style.color = "red";
    }
    else if(!validatePassword(newpwd))
    {
        alert.classList.remove("hide");
        alert.innerHTML =
        `
            New Password is either EMPTY or <br>
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
    else if(!validatePassword(confnewpwd))
    {
        alert.classList.remove("hide");
        alert.innerHTML =
        `
            Confirm New Password is either EMPTY or <br>
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
    else if(newpwd === oldpwd)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "New Password CANNOT be same as Old Password!"
        alert.style.color = "red";
    }
    else if(newpwd !== confnewpwd)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords DON'T match!"
        alert.style.color = "red";
    }
    else
    {
        currentShopper.fname = fname;
        currentShopper.lname = lname;
        currentShopper.password = newpwd;
        localStorage.setItem('currentShopper', JSON.stringify(currentShopper))

        const shoppers = JSON.parse(localStorage.getItem('shoppers'))
        let shopperIndex = shoppers.findIndex(shopper => shopper.email === currentShopper.email)

        if(shoppers[shopperIndex].password === oldpwd)
        {
            shoppers[shopperIndex].fname = fname;
            shoppers[shopperIndex].lname = lname;
            shoppers[shopperIndex].password = newpwd;
            localStorage.setItem('shoppers', JSON.stringify(shoppers))
        }

        alert.classList.remove("hide");
        alert.innerHTML = "Password changed SUCCESSFULLY!"
        alert.style.color = "green"

        changepwdform.reset()
    }

})

// Logout Function
let logoutbtn = document.getElementById("logout")
logoutbtn.addEventListener("click", function()
{
    localStorage.removeItem('currentShopper')
    window.location.href = "index.html"
})

// Validation Functions
function validateName(name)
{
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(name);
}

function validatePassword(password)
{
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return pattern.test(password);
}