import React from "react";
import SocialFooterTitle from './SocialFooterTitle'
import SocialBtn from './SocialBtn'

const SocialFooter = () => {
    return(
        <div>
            <SocialFooterTitle />
            <div className = "authcard-footer-social text-center" >
                < SocialBtn icon={"fab fa-twitter-square"}/>
                < SocialBtn icon={"fab fa-facebook-square"}/>
                < SocialBtn icon={"fab fa-google-plus-square"}/>
                < SocialBtn icon={"fab fa-vk"}/>
            </div>
        </div>


    )
};

export default SocialFooter;
