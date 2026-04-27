import FooterSign from "./FooterSign";
import FooterSocial from "./FooterSocial";


function FooterBottom() {
    return <>
        <div className="backgroundFooterBottom">
            <div className="containerFooterBottom">
                <FooterSign />
                <FooterSocial />
            </div>
        </div>
    </>
}

export default FooterBottom;