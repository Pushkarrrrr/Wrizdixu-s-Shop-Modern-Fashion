// =====================================================
// WRIZDIXU'S SHOP
// PRODUCT DATABASE
// =====================================================

const products = [

    // ================= MEN =================

    {
        id: 1,
        name: "Classic Black Bomber Jacket",
        price: 69.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description: "A timeless bomber jacket with a clean modern silhouette."
    },

    {
        id: 2,
        name: "Premium White T-Shirt",
        price: 29.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Premium everyday cotton t-shirt with a clean minimalist look."
    },

    {
        id: 3,
        name: "Classic White Shirt",
        price: 39.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description: "A clean and versatile shirt for casual and smart outfits."
    },

    {
        id: 4,
        name: "Urban Denim Jacket",
        price: 64.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=900&q=85",
        badge: "HOT",
        description: "Classic denim jacket with a modern streetwear aesthetic."
    },

    {
        id: 5,
        name: "Beige Hoodie",
        price: 49.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Soft relaxed hoodie made for comfortable everyday styling."
    },

    {
        id: 6,
        name: "Minimal Black Hoodie",
        price: 54.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=900&q=85",
        badge: "STYLE",
        description: "Minimal black hoodie with a clean premium-inspired appearance."
    },

    {
        id: 7,
        name: "Modern Casual Blazer",
        price: 89.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
        badge: "PREMIUM",
        description: "Modern blazer designed to elevate casual and formal looks."
    },

    {
        id: 8,
        name: "Classic Polo Shirt",
        price: 34.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1625910513413-5fc45e8ae8c7?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description: "A versatile polo shirt with a timeless everyday design."
    },

    {
        id: 9,
        name: "Straight Fit Blue Jeans",
        price: 59.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description: "Classic straight-fit denim jeans with a modern finish."
    },

    {
        id: 10,
        name: "Urban Cargo Pants",
        price: 52.99,
        category: "men",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Relaxed cargo pants inspired by contemporary streetwear."
    },


    // ================= WOMEN =================

    {
        id: 11,
        name: "Oversized Cream T-Shirt",
        price: 27.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Soft oversized tee with a minimal everyday aesthetic."
    },

    {
        id: 12,
        name: "Elegant Black Dress",
        price: 74.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description: "Elegant black dress designed for a sophisticated look."
    },

    {
        id: 13,
        name: "Minimal White Dress",
        price: 69.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description: "Minimal dress with a clean contemporary silhouette."
    },

    {
        id: 14,
        name: "Relaxed Blue Denim",
        price: 58.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
        badge: "HOT",
        description: "Relaxed denim designed for modern everyday outfits."
    },

    {
        id: 15,
        name: "Beige Knit Sweater",
        price: 44.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Soft knit sweater with a warm minimal aesthetic."
    },

    {
        id: 16,
        name: "Classic Denim Jeans",
        price: 61.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description: "Classic denim jeans designed for versatile styling."
    },

    {
        id: 17,
        name: "Modern Leather Jacket",
        price: 99.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
        badge: "PREMIUM",
        description: "Statement jacket for a bold modern fashion look."
    },

    {
        id: 18,
        name: "Casual Summer Top",
        price: 31.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Lightweight casual top designed for everyday summer outfits."
    },

    {
        id: 19,
        name: "Wide Leg Pants",
        price: 49.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description: "Wide-leg pants with a relaxed contemporary fit."
    },

    {
        id: 20,
        name: "Oversized Fashion Shirt",
        price: 42.99,
        category: "women",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        badge: "STYLE",
        description: "Oversized shirt with a clean and effortless fashion look."
    },


    // ================= SHOES =================

    {
        id: 21,
        name: "Classic White Sneakers",
        price: 79.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        badge: "BESTSELLER",
        description: "Clean white sneakers designed for everyday outfits."
    },

    {
        id: 22,
        name: "Black Street Sneakers",
        price: 84.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description: "Modern black sneakers inspired by urban streetwear."
    },

    {
        id: 23,
        name: "Premium Running Shoes",
        price: 94.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Sport-inspired sneakers with a modern athletic design."
    },

    {
        id: 24,
        name: "Minimal Beige Sneakers",
        price: 74.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
        badge: "STYLE",
        description: "Neutral sneakers designed for effortless everyday styling."
    },

    {
        id: 25,
        name: "Classic Canvas Shoes",
        price: 49.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description: "Classic canvas shoes with a timeless casual design."
    },

    {
        id: 26,
        name: "High Top Sneakers",
        price: 89.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
        badge: "HOT",
        description: "High-top sneakers designed for a bold streetwear appearance."
    },

    {
        id: 27,
        name: "Sport Lifestyle Sneakers",
        price: 69.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Sport-inspired sneakers suitable for casual everyday wear."
    },

    {
        id: 28,
        name: "Premium Black Trainers",
        price: 99.99,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
        badge: "PREMIUM",
        description: "Premium-inspired black trainers with a sleek silhouette."
    },


    // ================= ACCESSORIES =================

    {
        id: 29,
        name: "Minimal Black Backpack",
        price: 54.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        badge: "POPULAR",
        description: "Minimal backpack designed for everyday travel and essentials."
    },

    {
        id: 30,
        name: "Classic Leather Handbag",
        price: 89.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
        badge: "PREMIUM",
        description: "Elegant handbag with a timeless and sophisticated appearance."
    },

    {
        id: 31,
        name: "Minimal Shoulder Bag",
        price: 59.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Compact shoulder bag designed for modern everyday styling."
    },

    {
        id: 32,
        name: "Classic Brown Bag",
        price: 64.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
        badge: "STYLE",
        description: "Classic brown bag with a clean and versatile design."
    },

    {
        id: 33,
        name: "Premium Sunglasses",
        price: 39.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
        badge: "HOT",
        description: "Modern sunglasses with a clean contemporary frame."
    },

    {
        id: 34,
        name: "Classic Watch",
        price: 119.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
        badge: "PREMIUM",
        description: "Classic timepiece inspired by minimal modern design."
    },

    {
        id: 35,
        name: "Minimal Leather Wallet",
        price: 34.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
        badge: "NEW",
        description: "Compact wallet with a clean minimalist design."
    },

    {
        id: 36,
        name: "Urban Crossbody Bag",
        price: 49.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739d0d?auto=format&fit=crop&w=900&q=85",
        badge: "TRENDING",
        description: "Compact crossbody bag designed for modern urban styling."
    }

];


// =====================================================
// ELEMENTS
// =====================================================

const productsGrid =
    document.getElementById("productsGrid");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const categoryCards =
    document.querySelectorAll(".category-card");

const searchBtn =
    document.getElementById("searchBtn");

const searchPanel =
    document.getElementById("searchPanel");

const closeSearch =
    document.getElementById("closeSearch");

const cartBtn =
    document.getElementById("cartBtn");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.querySelector(".cart-count");

const productModal =
    document.getElementById("productModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalName =
    document.getElementById("modalName");

const modalDescription =
    document.getElementById("modalDescription");

const modalPrice =
    document.getElementById("modalPrice");

const modalAddCart =
    document.getElementById("modalAddCart");

const newsletterForm =
    document.getElementById("newsletterForm");

const cartToast =
    document.getElementById("cartToast");


// =====================================================
// STATE
// =====================================================

let selectedCategory = "all";

let selectedProductId = null;

let cart =
    JSON.parse(
        localStorage.getItem("wrizdixuCart")
    ) || [];

let wishlist =
    JSON.parse(
        localStorage.getItem("wrizdixuWishlist")
    ) || [];


// =====================================================
// RENDER PRODUCTS
// =====================================================

function renderProducts(list = products) {

    productsGrid.innerHTML = "";

    if (list.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    list.forEach(product => {

        const isWishlisted =
            wishlist.includes(product.id);


        const card =
            document.createElement("article");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>


                <button
                    class="wishlist ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>


                <button
                    class="quick-view"
                    onclick="openProduct(${product.id})"
                >
                    Quick View
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>


                <div class="product-bottom">

                    <span class="product-price">
                        $${product.price.toFixed(2)}
                    </span>


                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        +
                    </button>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}


// =====================================================
// FILTER
// =====================================================

function filterProducts() {

    let filtered =
        products.filter(product => {

            const categoryMatch =
                selectedCategory === "all" ||
                product.category === selectedCategory;


            const searchTerm =
                searchInput.value
                    .toLowerCase()
                    .trim();


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm);


            return categoryMatch && searchMatch;

        });


    // SORT

    if (sortSelect.value === "low") {

        filtered.sort(
            (a, b) => a.price - b.price
        );

    }


    if (sortSelect.value === "high") {

        filtered.sort(
            (a, b) => b.price - a.price
        );

    }


    if (sortSelect.value === "name") {

        filtered.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    renderProducts(filtered);

}


// =====================================================
// SELECT CATEGORY
// =====================================================

function selectCategory(category) {

    selectedCategory = category;


    filterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.category === category
        );

    });


    filterProducts();


    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =====================================================
// FILTER BUTTONS
// =====================================================

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            selectCategory(
                button.dataset.category
            );

        }
    );

});


// =====================================================
// CATEGORY CARDS
// =====================================================

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            selectCategory(
                card.dataset.category
            );

        }
    );

});


// =====================================================
// SEARCH
// =====================================================

searchBtn.addEventListener(
    "click",
    () => {

        searchPanel.classList.toggle(
            "active"
        );


        if (
            searchPanel.classList.contains(
                "active"
            )
        ) {

            searchInput.focus();

        }

    }
);


closeSearch.addEventListener(
    "click",
    () => {

        searchPanel.classList.remove(
            "active"
        );

    }
);


searchInput.addEventListener(
    "input",
    filterProducts
);



// =====================================================
// SORT
// =====================================================

sortSelect.addEventListener(
    "change",
    filterProducts
);


// =====================================================
// PRODUCT MODAL
// =====================================================

function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    selectedProductId = id;


    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;


    modalCategory.textContent =
        product.category;


    modalName.textContent =
        product.name;


    modalDescription.textContent =
        product.description;


    modalPrice.textContent =
        `$${product.price.toFixed(2)}`;


    productModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


closeModal.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target === productModal
        ) {

            closeProductModal();

        }

    }
);


function closeProductModal() {

    productModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


modalAddCart.addEventListener(
    "click",
    () => {

        if (!selectedProductId)
            return;


        addToCart(
            selectedProductId
        );


        closeProductModal();

        openCart();

    }
);


// =====================================================
// WISHLIST
// =====================================================

function toggleWishlist(id) {

    if (
        wishlist.includes(id)
    ) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

        showToast(
            "Removed from wishlist"
        );

    } else {

        wishlist.push(id);

        showToast(
            "♥ Added to wishlist"
        );

    }


    localStorage.setItem(
        "wrizdixuWishlist",
        JSON.stringify(wishlist)
    );


    filterProducts();

}


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(id) {

    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: id,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        "✓ Added to cart"
    );

}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    saveCart();

    updateCart();

}


// =====================================================
// QUANTITY
// =====================================================

function changeQuantity(
    id,
    amount
) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    updateCart();

}


// =====================================================
// UPDATE CART
// =====================================================

function updateCart() {

    cartItems.innerHTML = "";


    let total = 0;

    let totalQuantity = 0;


    cart.forEach(cartItem => {

        const product =
            products.find(
                item =>
                    item.id === cartItem.id
            );


        if (!product) return;


        total +=
            product.price *
            cartItem.quantity;


        totalQuantity +=
            cartItem.quantity;


        const item =
            document.createElement(
                "div"
            );


        item.className =
            "cart-item";


        item.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <h4>
                    ${product.name}
                </h4>


                <div class="cart-item-price">

                    $${(
                        product.price *
                        cartItem.quantity
                    ).toFixed(2)}

                </div>


                <div class="quantity-controls">

                    <button
                        onclick="changeQuantity(
                            ${product.id},
                            -1
                        )"
                    >
                        −
                    </button>


                    <span>
                        ${cartItem.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(
                            ${product.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(
                    ${product.id}
                )"
            >
                ✕
            </button>

        `;


        cartItems.appendChild(item);

    });


    cartTotal.textContent =
        `$${total.toFixed(2)}`;


    cartCount.textContent =
        totalQuantity;


    if (cart.length === 0) {

        emptyCart.style.display =
            "flex";

    } else {

        emptyCart.style.display =
            "none";

    }

}


// =====================================================
// SAVE CART
// =====================================================

function saveCart() {

    localStorage.setItem(
        "wrizdixuCart",
        JSON.stringify(cart)
    );

}


// =====================================================
// OPEN CART
// =====================================================

function openCart() {

    cartDrawer.classList.add(
        "active"
    );

    cartOverlay.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


function closeCartDrawer() {

    cartDrawer.classList.remove(
        "active"
    );

    cartOverlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


cartBtn.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


// =====================================================
// TOAST
// =====================================================

function showToast(message) {

    cartToast.textContent =
        message;


    cartToast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                cartToast.classList.remove(
                    "show"
                );

            },
            1800
        );

}


// =====================================================
// CHECKOUT
// =====================================================

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty!"
                );

                return;

            }


            alert(
                "Checkout Demo\n\nFor a real store, connect this button to a backend and payment gateway."
            );

        }
    );


// =====================================================
// NEWSLETTER
// =====================================================

newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            newsletterForm
                .querySelector("input")
                .value;


        if (!email) return;


        showToast(
            "✓ Successfully subscribed!"
        );


        newsletterForm.reset();

    }
);


// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductModal();

            closeCartDrawer();

            searchPanel.classList.remove(
                "active"
            );

        }

    }
);


// =====================================================
// INITIAL LOAD
// =====================================================

renderProducts();

updateCart();