function Banner() {
    return (
        <div className="banner">
            <div className="bannerContainer">
                <ul className="BannerList">
                    <li><img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" /><a href="/">DIGITAL COMICS</a></li>
                    <li><img src="/img/buy-comics-merchandise.png" alt="Merchandise" /><a href="/comics">DC MERCHANDISE</a></li>
                    <li><img src="/img/buy-comics-subscriptions.png" alt="Subscriptions" /><a href="/characters">SUBSCRITION</a></li>
                    <li><img src="/img/buy-comics-shop-locator.png" alt="Shop Locator" /><a href="/">COMIC SHOP LOCATOR</a></li>
                    <li><img src="/img/buy-dc-power-visa.svg" alt="DC Power VISA" /><a href="/comics">DC POWER VISA</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Banner;