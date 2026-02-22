class SiteHeader extends HTMLElement {  /*i created a new class called SiteHeader using the syntax class, that would behave like a normal HTML element.*/
    connectedCallback() { /*runs automatically when my custom element is added to the webpage. so it runs when <site-header></site-header> appears inside the html.*/
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

        const openBtn = this.querySelector(".hamburger-btn"); /*by using this. syntax it will only search for this classes inside this custom element. */
        const closeBtn = this.querySelector(".close-btn"); /*If i used the document. syntax it may cause an incorrect behavior, because it will search the whole html for the class and if i have multiple classes with thte same name it will only affect the first one it will find and igonore the rest. */
        const mobileNav = this.querySelector(".mobile-nav");

        openBtn.addEventListener("click", () => {
            mobileNav.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
        });

    }
}

customElements.define("site-header", SiteHeader); /*customElements is where you can store your new custom elements. With define("site-header", SiteHeader) i register the custom element site-header with the class SiteHeader.  */


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

