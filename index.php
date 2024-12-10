<?php

@include 'db.php';

session_start();

if(!isset($_SESSION['user_name'])){
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FRAGGS Shopping Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


    <link rel="stylesheet" href="style.css">
</head>
<body>

<section id="header" class="section-p1">
    <a href="index.html"><img src="images/logo.jpg" class="logo" width="180px" alt=""></a>
    <div class="menu-toggle" id="menu-toggle">&#9776;</div>
    <div>
        <ul id="navbar">
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="shirts.html">Shirts</a></li>
            <li><a href="pants.html">Pants</a></li>
            <li><a href="tshirts.html">T-shirts</a></li>
            <li><a href="shoes.html">Shoes</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="cart.html"><span class="material-symbols-outlined">shopping_bag</span>(<span id="cart-count">0</span>)</a></li>
            <button id="checkout-btn" onclick="window.location.href='logout.php';">Logout</button>
        </ul>
    </div>
</section>


   <div class="content" style="text-align:start;margin-top:50px;margin-left:70px;">
      <h3 style="font-size: 30px;color:#333;">Welcome To<span style="background: ;  border-radius: 7px; padding:0 5px;"> Fraggs</span></h3>
      <h1>Hi..<span style="color:crimson;"><?php echo $_SESSION['user_name'] ?></span></h1>
      <p>People will stare. Make it worth their while.</p>
   </div>




  <section id="hero">
      <h4>Summer Deal</h4>
      <h2>Super Value deal</h2>
      <h1>On all products</h1>
      <button onclick="window.location.href='tshirts.html';">Shop Now</button>
  </section>

  <section id="Category" class="section-p1">
    <h2>Category</h2>
</section>
        <section  class="container1">
            <div class="container">
                <a href="shirts.html"><img alt="Shirts"  width="200" height="200" data-nimg="1" style="color:transparent" srcset="images/cat1.jpg" >
                </a>
            </div>
            <div class="container">
                <a href="pants.html"><img alt="Pants"  width="200" height="200"  data-nimg="1" style="color:transparent" srcset="images/cat3.jpg">
                </a>
            </div>
            <div class="container">
                <a href="tshirts.html"><img alt="T-Shirts"  width="200" height="200"  data-nimg="1" style="color:transparent" srcset="images/cat2.jpg">
                </a>
            </div>
            <div class="container">   
                <a href="shoes.html"><img alt="Shoes"  width="200" height="200"  data-nimg="1" style="color:transparent" srcset="images/cat4.jpg">
                </a>
            </div>
                
</section>

  

  <section id="Heading" class="section-p1">
      <h2>Products</h2>
      <p>Summer Collection New Modren Design</p>
      <div class="pro-container">
        <div class="pro" data-id="1" data-name="Chunky Style Shirt" data-price="799" data-image="images/s1.jpg" onclick="window.location.href='sp.html';">
            <img src="images/s1.jpg">
            <div class="des">
                <span>Snitch</span>
                <h5>White Strips Shirt</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.799</h4>
            </div>
                
        </div>
        <div class="pro"  data-id="1" data-name="Chunky Style Shirt" data-price="799" onclick="window.location.href='p1.html';">
            <img src="images/p1.jpg" alt="Ice Blue Cargo Baggy Fit Jeans">
            <div class="des">
                <span>Snitch</span>
                <h5>White Cargo Pant</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.1299</h4>
            </div>
           <script>
 
// Example products
const products = [
    { id: 1, name: 'Chunky Style Shirt', price: 799, image: 'images/s1.jpg' },
    { id: 2, name: 'Mar', price: 799, image: 'images/s2.jpg' },
    { id: 3, name: 'Men\'s Casual Off White Shoe', price: 799, image: 'images/s3.jpg' },
    { id: 4, name: 'Men\'s Casual Off White Shoe', price: 799, image: 'images/s4.jpg' },
    { id: 5, name: 'Chunky Style Shirt', price: 799, image: 'images/s5.jpg' },
    { id: 6, name: 'Chunky Style Shirt', price: 799, image: 'images/s6.jpg' },
    { id: 7, name: 'Men Slim Fit Shirt with Curved Hem', price: 999, image: 'images/s7.jpg' },
    { id: 8, name: 'Chunky Style Shirt', price: 799, image: 'images/s8.jpg' },
    { id: 9, name: 'Chunky Style Shirt', price: 799, image: 'images/s9.jpg' },
    { id: 10, name: 'Chunky Style Shirt', price: 799, image: 'images/s10.jpg' },
    { id: 11, name: 'Chunky Style Shirt', price: 799, image: 'images/s11.jpg' },
    { id: 12, name: 'Chunky Style Shirt', price: 799, image: 'images/s12.jpg' },
    { id: 13, name: 'Ice Blue Cargo Baggy Fit Jeans', price: 1999, image: 'images/p1.jpg' },
];

// Add event listeners to add-to-cart buttons
document.querySelectorAll('.cart_btn').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
            addToCart(product);
        }
    });
});

// Add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart');
    updateCartCount();
}

// Update the cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

// Initialize cart count on page load
window.onload = function() {
    updateCartCount();
}

            </script>
            
        </div>
        <div class="pro" onclick="window.location.href='sp4.html';">
            <img src="images/s4.jpg">
            <div class="des">
                <span>Snitch</span>
                <h5>Black Strips Shirt</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.799</h4>
            </div>
          
        </div>
        <div class="pro" onclick="window.location.href='sh6.html';">
            <img src="images/sh6.jpg">
            <div class="des">
                <span>Redtape</span>
                <h5>Comfortable Walking shoes</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.1099</h4>
            </div>
          
        </div>
        <div class="pro"  onclick="window.location.href='p3.html';">
            <img src="images/p3.jpg">
            <div class="des">
                <span>Snitch</span>
                <h5>Peach Cargo Pant</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.1399</h4>
            </div>
          
        </div>
        <div class="pro" onclick="window.location.href='sp10.html';" >
            <img src="images/s10.jpg">
            <div class="des">
                <span>Snitch</span>
                <h5>Slim Fit Shir Dark Blue Shirt</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.979</h4>
            </div>
          
        </div>
        <div class="pro" onclick="window.location.href='sh4.html';">
            <img src="images/sh4.jpg">
            <div class="des">
                <span>Nike</span>
                <h5>Black Downshifter 13 Shoes</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.2799</h4>
            </div>
          
        </div>
        <div class="pro" onclick="window.location.href='sp2.html'";>
            <img src="images/s2.jpg">
            <div class="des">
                <span>Snitch</span>
                <h5>Maroon Strips Shirt</h5>
                <div class="star">
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                    <i class="material-symbols-outlined">star_rate_half</i>
                </div>
                <h4>Rs.799</h4>
            </div>
          
        </div>
       
    </div>
  </section>

 <section id="About" class="section-p1">
    <h2>SALE IS ON</h2>
    <div class="walpaper" onclick="window.location.href='shoes.html'";>
        <img src="images/sale1.png"  width="100%">   
    </div>
 </section>
 <section id="About" class="section-p1">
    <div class="walpaper1" onclick="window.location.href='shirts.html'";>
        <img src="images/sale2.png"  width="100%">   
    </div>
 </section>

 <footer class="section-p1">
    <div class="col">
        <img class="logo" src="images/logo.jpg" width="200px">
        <h4>Contact</h4>
        <p><strong>Address:</strong>Jaynagar,12th Block Oppsite to Public park></p>
        <p><strong>Phone:</strong>+91-6789374576/+91-7879651237</p>
        <p><strong>Timings:</strong>10:00-18:00.Mon-Sat</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f fa-lg face"></i>
                <i class="fab fa-twitter fa-lg"></i>
                <i class="fab fa-instagram fa-lg"></i>
                <i class="fab fa-youtube fa-lg"></i>
            </div>

        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="about.html">About Us</a>
        <a href="order-details.html">Delivery Information</a>
        <a href="about.html">Privacy Policy</a>
        <a href="about.html">Terms & Condidtions</a>
        <a href="contact.html">Contect Us</a>
    </div>
    <div class="col">
        <h4>My Account</h4>
        <a href="register.php">Sign In </a>
        <a href="cart.html"> View Cart</a>
        <a href="order-details.html">Track My Order</a>
        <a href="contact.html">Help </a>
    </div>
    <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Play Store</p>
        <div class="row">
            <img src="images/play.png" width="220px">
        </div>
        <p>Secured Payment Gateways</p>
        <img src="images/pay1.png" width="170px">
        <img src="images/pay2.png" width="150px">
    </div>
    <div class="copyright">
        <p>© 2024,FRAGGS E-COMMERCE WEBSITE</p>
    </div>
  
 </footer>
 

    <script src="script.js"></script>

</body>
</html>