import styles from '../styles/Home.module.css'
export default function Menu(){


  return 
  (<main>
     
    <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id="">
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#food">Category</a></li>
            <li><a href="#food-menu">Menu</a></li>
            <li><a href="#testimonials">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <h1 class="logo">RS</h1>
    </div>
</nav>
  </main>

 
);

  }