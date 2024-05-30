class AmazonBanners {
    static Model_728x90 = 0;
    static Model_468x60 = 1;

    constructor(Model) {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }

    Genera_Aleatorio(Numero_Banners, model = AmazonBanners.Model_468x60) {
        let RandSelection = 0;

        for (let i = 0; i < Numero_Banners; i++) {
            RandSelection = CUtils.GeneraNumeroAleatorio(4);

            switch (RandSelection) {
                case 0:
                    this.RegalosPersonalizados(model);
                    break;
                case 1:
                    this.Audible(model);
                    break;

                case 2:
                    this.Prime(model);
                    break;

                case 3:
                    this.PrimeVideo(model);
                    break;

                default:
                    alert("Error Randon banner generation");
                    break;
            }
        }
    }

    RegalosPersonalizados(model, site = GALSAN_CreateBlock.Site_Column_Center) {
        let src_banner = null;
        let css_banner = null;

        switch (model) {
            case AmazonBanners.Model_728x90:
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=audiblees&banner=11P7E7RYFWTMDE1A5Y82&f=ifr&linkID=38c42332cde8d6412f749f6ed921409b&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner728x90";

                break;

            case AmazonBanners.Model_468x60:
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=26&l=ur1&category=esgifting&banner=1RCM3NDDZEYJ6V40M282&f=ifr&linkID=3f63ec3a2d203ad9923e8d338c1c8af4&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner468x60";

                break;

            default:
                //alert("This model not exits fot this banner type");
                return -1;
                break;
        }

        //Create element and associate a classes
        let BannerElement = this.CreateElement_("iframe", css_banner, null, site);

        BannerElement.src = src_banner;
        BannerElement.scrolling = "no";
        BannerElement.border = 0;
        BannerElement.marginwidth = 0;
        BannerElement.style = "border:none;";
        BannerElement.frameborder = 0;
        BannerElement.sandbox =
            "allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation";
    }

    Audible(model, site = GALSAN_CreateBlock.Site_Column_Center) {
        let src_banner = null;
        let css_banner = null;

        switch (model) {
            case AmazonBanners.Model_728x90:
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=audiblees&banner=11P7E7RYFWTMDE1A5Y82&f=ifr&linkID=38c42332cde8d6412f749f6ed921409b&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner728x90";

                break;

            case AmazonBanners.Model_468x60:
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=26&l=ur1&category=audiblees&banner=01TE432HXVN1N1H4F102&f=ifr&linkID=df8cadc7fe9e62f32338b10054b03c64&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner468x60";

                break;

            default:
                //alert("This model not exits fot this banner type");
                return -1;
                break;
        }

        //Create element and associate a classes
        let BannerElement = this.CreateElement_("iframe", css_banner, null, site);

        BannerElement.src = src_banner;
        BannerElement.scrolling = "no";
        BannerElement.border = 0;
        BannerElement.marginwidth = 0;
        BannerElement.style = "border:none;";
        BannerElement.frameborder = 0;
        BannerElement.sandbox =
            "allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation";
    }

    Prime(model, site = GALSAN_CreateBlock.Site_Column_Center) {
        let src_banner = null;
        let css_banner = null;

        switch (model) {
            case AmazonBanners.Model_728x90:
                //Create element and associate a classes
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=premium&banner=1E7ZEBFW3E0G3W1WXZ82&f=ifr&linkID=c82c71de808b0073a064e0f56ff92e08&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner728x90";
                break;

            default:
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=48&l=ur1&category=premium&banner=1E7ZEBFW3E0G3W1WXZ82&f=ifr&linkID=c82c71de808b0073a064e0f56ff92e08&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner468x60";
                break;
        }

        //Create element and associate a classes
        let BannerElement = this.CreateElement_("iframe", css_banner, null, site);

        BannerElement.src = src_banner;
        BannerElement.scrolling = "no";
        BannerElement.border = 0;
        BannerElement.marginwidth = 0;
        BannerElement.style = "border:none;";
        BannerElement.frameborder = 0;
        BannerElement.sandbox =
            "allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation";
    }

    PrimeVideo(model, site = GALSAN_CreateBlock.Site_Column_Center) {
        let src_banner = null;
        let css_banner = null;

        switch (model) {
            case AmazonBanners.Model_468x60:
                src_banner =
                    "https://rcm-eu.amazon-adsystem.com/e/cm?o=30&p=13&l=ur1&category=primevideo&banner=0082DGZW2NWMZC8TRXR2&f=ifr&linkID=dbc00fc721249075105218e6f5ee3b56&t=paulbs06-21&tracking_id=paulbs06-21";
                css_banner = "AmazonBanner468x60";

                break;

            default:
                //alert("This model not exits fot this banner type");
                return -1;
                break;
        }

        //Create element and associate a classes
        let BannerElement = this.CreateElement_("iframe", css_banner, null, site);

        BannerElement.src = src_banner;
        BannerElement.scrolling = "no";
        BannerElement.border = 0;
        BannerElement.marginwidth = 0;
        BannerElement.style = "border:none;";
        BannerElement.frameborder = 0;
        BannerElement.sandbox =
            "allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation";
    }

    //Create view of carrusel
    ViewConstructor() {
        this.add_CSS_Class(
            ".AmazonBanner728x90",
            `
                width: 728px;
                height: 90px;
                display: flex;
                margin: 0 auto;
                max-width: 100%;
        `,
            GALSAN_CreateBlock.Screen_Complete
        );

        this.add_CSS_Class(
            ".AmazonBanner468x60",
            `
                  width: 468px;
                  height: 60px;
                  display: flex;
                  margin: 0 auto;
                  max-width: 100%;
          `,
            GALSAN_CreateBlock.Screen_Complete
        );
    }
}