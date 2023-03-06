let prodDiv = document.getElementById("product-div")
prodDiv.innerHTML = `<div class="items"> </div>`

let prodItems = document.querySelector(".items")

fetch(`https://fakestoreapi.com/products`)
.then((response) => response.json())
.then((data) =>
{
    let prodArr = data;
    console.log(prodArr);

    localStorage.setItem('products', JSON.stringify(prodArr))

    prodArr.map((product) =>
    {
        let productPrice = `${product.price}` * 81.73;
        productPrice = productPrice.toFixed(2)
        // console.log(productPrice);

        prodItems.innerHTML += 
        `
        <div class="item">
        <img src="${product.image}" alt="Item" />
        <div class="info">
            <div class="prod-title"> Title: ${product.title} </div>
            <div class="row">
            <div class="price"> ₹ ${productPrice} </div>
            </div>
            <div class="row">Rating: ${product.rating.rate}</div>
        </div>
        <button class="addCart" id="addBtn">Add to Cart</button>
        </div>
        `
    })
})

// Filtering using Search Bar
let searchfield = document.getElementById("searchfield")

searchfield.addEventListener("change", () =>
{
    let searchQuery = searchfield.value;

    prodItems.innerHTML = ``;

    if(searchQuery === "")
    {
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products`)
            .then((response) => response.json())
            .then((data) =>
            {
                let prodArr = data;
                // console.log(prodArr);

                localStorage.setItem('products', JSON.stringify(prodArr))

                prodArr.map((product) =>
                {
                    let productPrice = `${product.price}` * 81.73;
                    productPrice = productPrice.toFixed(2)
                    // console.log(productPrice);

                    prodItems.innerHTML += 
                    `
                    <div class="item">
                    <img src="${product.image}" alt="Item" />
                    <div class="info">
                        <div class="prod-title"> Title: ${product.title} </div>
                        <div class="row">
                        <div class="price"> ₹ ${productPrice} </div>
                        </div>
                        
                        <div class="row">Rating: ${product.rating.rate}</div>
                    </div>
                    <button id="addBtn">Add to Cart</button>
                    </div>
                    `
                })
            })
        }, 50);
        
    }
    else
    {
        fetch(`https://fakestoreapi.com/products?search=${searchQuery}`)
        .then((response) => response.json())
        .then((data) =>
        {
            let searchData = data;
            // console.log(searchData);

            const searchFilter = searchData.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
            console.log(searchFilter);

            prodItems.innerHTML = ``;

            searchFilter.map((prod) =>
            {
                // console.log(prod);

                let productPrice = `${prod.price}` * 81.73;
                productPrice = productPrice.toFixed(2);

                prodItems.innerHTML +=
                `
                    <div class="item">
                    <img src="${prod.image}" alt="Item" />
                    <div class="info">
                        <div class="prod-title"> Title: ${prod.title} </div>
                        <div class="row">
                        <div class="price"> ₹ ${productPrice} </div>
                        </div>
                        
                        <div class="row">Rating: ${prod.rating.rate}</div>
                    </div>
                    <button id="addBtn">Add to Cart</button>
                    </div>
                `
            })
        })
    }   
})

// Filtering using Categories Button
let allFilter = document.getElementById("allFilter")
let mensFilter = document.getElementById("mensFilter")
let womensFilter = document.getElementById("womensFilter")
let jewelsFilter = document.getElementById("jewelsFilter")
let electronicsFilter = document.getElementById("electronicsFilter")

allFilter.addEventListener("click", () =>
{
    allFilter.classList.add("active");
    mensFilter.classList.remove("active")
    womensFilter.classList.remove("active")
    jewelsFilter.classList.remove("active")
    electronicsFilter.classList.remove("active")

    prodItems.innerHTML = ``;

    fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) =>
    {
        let prodArr = data;
        // console.log(prodArr);

        localStorage.setItem('products', JSON.stringify(prodArr))

        prodArr.map((product) =>
        {
            let productPrice = `${product.price}` * 81.73;
            productPrice = productPrice.toFixed(2)
            // console.log(productPrice);

            prodItems.innerHTML += 
            `
            <div class="item">
            <img src="${product.image}" alt="Item" />
            <div class="info">
                <div class="prod-title"> Title: ${product.title} </div>
                <div class="row">
                <div class="price"> ₹ ${productPrice} </div>
                </div>
                <div class="row">Rating: ${product.rating.rate}</div>
            </div>
            <button id="addBtn">Add to Cart</button>
            </div>
            `
        })
    })
})

mensFilter.addEventListener("click", () =>
{
    allFilter.classList.remove("active");
    mensFilter.classList.add("active")
    womensFilter.classList.remove("active")
    jewelsFilter.classList.remove("active")
    electronicsFilter.classList.remove("active")

    let filterCategory = "men's clothing"

    prodItems.innerHTML = ``;

    fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) =>
    {
        let filteredData = data;
        // console.log(filteredData);

        const Filter = filteredData.filter(product => product.category === filterCategory)
        console.log(Filter);

        Filter.map((prod) =>
        {
            // console.log(prod);

            let productPrice = `${prod.price}` * 81.73;
            productPrice = productPrice.toFixed(2);

            prodItems.innerHTML +=
            `
                <div class="item">
                <img src="${prod.image}" alt="Item" />
                <div class="info">
                    <div class="prod-title"> Title: ${prod.title} </div>
                    <div class="row">
                    <div class="price"> ₹ ${productPrice} </div>
                    </div>
                    
                    <div class="row">Rating: ${prod.rating.rate}</div>
                </div>
                <button id="addBtn">Add to Cart</button>
                </div>
            `
        })
    })
})

womensFilter.addEventListener("click", () =>
{
    allFilter.classList.remove("active");
    mensFilter.classList.remove("active")
    womensFilter.classList.add("active")
    jewelsFilter.classList.remove("active")
    electronicsFilter.classList.remove("active")

    let filterCategory = "women's clothing"

    prodItems.innerHTML = ``;

    fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) =>
    {
        let filteredData = data;
        // console.log(filteredData);

        const Filter = filteredData.filter(product => product.category === filterCategory)
        console.log(Filter);

        prodItems.innerHTML = ``;

        Filter.map((prod) =>
        {
            // console.log(prod);

            let productPrice = `${prod.price}` * 81.73;
            productPrice = productPrice.toFixed(2);

            prodItems.innerHTML +=
            `
                <div class="item">
                <img src="${prod.image}" alt="Item" />
                <div class="info">
                    <div class="prod-title"> Title: ${prod.title} </div>
                    <div class="row">
                    <div class="price"> ₹ ${productPrice} </div>
                    </div>
                    
                    <div class="row">Rating: ${prod.rating.rate}</div>
                </div>
                <button id="addBtn">Add to Cart</button>
                </div>
            `
        })
    })
})

jewelsFilter.addEventListener("click", () =>
{
    allFilter.classList.remove("active");
    mensFilter.classList.remove("active")
    womensFilter.classList.remove("active")
    jewelsFilter.classList.add("active")
    electronicsFilter.classList.remove("active")

    let filterCategory = "jewelery"

    prodItems.innerHTML = ``;

    fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) =>
    {
        let filteredData = data;
        // console.log(filteredData);

        const Filter = filteredData.filter(product => product.category === filterCategory)
        console.log(Filter);

        prodItems.innerHTML = ``;

        Filter.map((prod) =>
        {
            // console.log(prod);

            let productPrice = `${prod.price}` * 81.73;
            productPrice = productPrice.toFixed(2);

            prodItems.innerHTML +=
            `
                <div class="item">
                <img src="${prod.image}" alt="Item" />
                <div class="info">
                    <div class="prod-title"> Title: ${prod.title} </div>
                    <div class="row">
                    <div class="price"> ₹ ${productPrice} </div>
                    </div>
                    
                    <div class="row">Rating: ${prod.rating.rate}</div>
                </div>
                <button id="addBtn">Add to Cart</button>
                </div>
            `
        })
    })
})

electronicsFilter.addEventListener("click", () =>
{
    allFilter.classList.remove("active");
    mensFilter.classList.remove("active")
    womensFilter.classList.remove("active")
    jewelsFilter.classList.remove("active")
    electronicsFilter.classList.add("active")

    let filterCategory = "electronics"

    prodItems.innerHTML = ``;

    fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) =>
    {
        let filteredData = data;
        // console.log(filteredData);

        const Filter = filteredData.filter(product => product.category === filterCategory)
        console.log(Filter);

        prodItems.innerHTML = ``;

        Filter.map((prod) =>
        {
            // console.log(prod);

            let productPrice = `${prod.price}` * 81.73;
            productPrice = productPrice.toFixed(2);

            prodItems.innerHTML +=
            `
                <div class="item">
                <img src="${prod.image}" alt="Item" />
                <div class="info">
                    <div class="prod-title"> Title: ${prod.title} </div>
                    <div class="row">
                    <div class="price"> ₹ ${productPrice} </div>
                    </div>
                    
                    <div class="row">Rating: ${prod.rating.rate}</div>
                </div>
                <button id="addBtn">Add to Cart</button>
                </div>
            `
        })
    })
})

// Filtering based on rating
let rateFilter = document.getElementById("range")
rateFilter.addEventListener("change", (e) =>
{
    const selectedRating = e.target.value;
    console.log(selectedRating);

    prodItems.innerHTML = ``;

    fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) =>
    {
        let filteredData = data;
        // console.log(filteredData);

        const rateFilter = filteredData.filter(product => product.rating.rate <= selectedRating)
        console.log(rateFilter);

        prodItems.innerHTML = ``;

        rateFilter.map((prod) =>
        {
            // console.log(prod);

            let productPrice = `${prod.price}` * 81.73;
            productPrice = productPrice.toFixed(2);

            prodItems.innerHTML +=
            `
                <div class="item">
                <img src="${prod.image}" alt="Item" />
                <div class="info">
                    <div class="prod-title"> Title: ${prod.title} </div>
                    <div class="row">
                    <div class="price"> ₹ ${productPrice} </div>
                    </div>
                    
                    <div class="row">Rating: ${prod.rating.rate}</div>
                </div>
                <button id="addBtn">Add to Cart</button>
                </div>
            `
        })
    })
})

// Filtering based on Price Range

// Add To Cart
let addtoCartBtns = document.querySelectorAll(".addCart")
console.log(addtoCartBtns);
