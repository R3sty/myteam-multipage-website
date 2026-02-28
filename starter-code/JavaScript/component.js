class SiteHeader extends HTMLElement { 
    connectedCallback() { 
        this.innerHTML = ` 
            <header>
                <img src="./assets/logo.svg" alt="myteam logo" class="logo">
                
                <button class="hamburger-btn">
                <img src="./assets/icon-hamburger.svg" alt="hamburger menu" class="hamburger-icon">
                </button>

                <div class="mobile-nav">
                <button class="close-btn">
                    <img src="./assets/icon-close.svg" alt="close menu" class="close-icon">
                </button>
                <nav>
                    <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                    </ul>
                    
                    <a href="contact.html"><button class="contact-btn mobile-btn">contact us</button></a>

                </nav>
                <img src="./assets/bg-pattern-about-1-mobile-nav-1.svg" alt="nav pattern" class="nav-pattern">
                </div>
                
                

                <nav class="desktop-nav">
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="about.html">about</a></li>
                </ul>

                <a href="contact.html"><button class="contact-btn">contact us</button></a>
            </header>
        `;

        const openBtn = this.querySelector(".hamburger-btn"); 
        const closeBtn = this.querySelector(".close-btn");
        const mobileNav = this.querySelector(".mobile-nav");

        openBtn.addEventListener("click", () => {
            mobileNav.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });

    }
}

customElements.define("site-header", SiteHeader); 


class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-mobile">
                <img src="./assets/logo.svg" alt="mytema logo" class="footer-logo">
                
                <nav class="footer-nav">
                    <ul>
                    <a href="index.html"><li>home</li></a>
                    <a href="about.html"><li>about</li></a>
                    </ul>
                </nav>

                <div class="address">
                    <p>
                    987  Hillcrest Lane<br>
                    Irvine, CA<br>
                    California 92714<br>
                    Call Us : 949-833-7432
                    </p>
                </div>

                <div class="social-links">
                    <a href="#"><img src="./assets/icon-facebook.svg" alt="facebook icon" class="social-img"></a>
                    <a href="#"><img src="./assets/icon-pinterest.svg" alt="pinterest icon" class="social-img"></a>
                    <a href="#"><img src="./assets/icon-twitter.svg" alt="twitter icon" class="social-img"></a>
                </div>
                <p>Copyright 2020. All Rights Reserved</p>
                </div>

                <div class="footer-tablet">
                <div class="links">
                    <img src="./assets/logo.svg" alt="mytema logo" class="footer-logo">
                
                    <nav class="footer-nav">
                    <ul>
                        <a href="index.html"><li>home</li></a>
                        <a href="about.html"><li>about</li></a>
                    </ul>
                    </nav>

                    <div class="social-links">
                    <a href="#"><img src="./assets/icon-facebook.svg" alt="facebook icon" class="social-img"></a>
                    <a href="#"><img src="./assets/icon-pinterest.svg" alt="pinterest icon" class="social-img"></a>
                    <a href="#"><img src="./assets/icon-twitter.svg" alt="twitter icon" class="social-img"></a>
                    </div>
                </div>

                <div class="tablet-address">
                    <p>
                    987  Hillcrest Lane<br>
                    Irvine, CA<br>
                    California 92714<br>
                    Call Us : 949-833-7432
                    </p>

                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
                </div>

                <div class="footer-desktop">
                <div class="link-address">
                    <div class="footer-dk-nav">
                    <img src="./assets/logo.svg" alt="mytema logo" class="footer-logo">
                
                    <nav class="footer-nav">
                        <ul>
                        <a href="index.html"><li>home</li></a>
                        <a href="about.html"><li>about</li></a>
                        </ul>
                    </nav>
                    </div>
                    

                    <div class="address">
                    <p>
                        987  Hillcrest Lane<br>
                        Irvine, CA<br>
                        California 92714<br>
                        Call Us : 949-833-7432
                    </p>
                    </div>
                </div>

                <div class="socials-desktop">
                    <div class="socials-links">
                    <a href="#"><img src="./assets/icon-facebook.svg" alt="facebook icon" class="social-img"></a>
                    <a href="#"><img src="./assets/icon-pinterest.svg" alt="pinterest icon" class="social-img"></a>
                    <a href="#"><img src="./assets/icon-twitter.svg" alt="twitter icon" class="social-img"></a>
                    </div>

                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
                </div>
            </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter);
