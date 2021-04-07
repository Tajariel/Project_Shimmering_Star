(function(){
    "use strict";

    const CSS_login_box ={
        "background-color" : "2a2a2a",
        "position": "unset",
        "border-radius":"5px",
        "width": "50%",
        "height:":"100%",
        "min-height": "350px",
    }

    const CSS_navbar_content_hidden={
        "display":"none",
    }

    const CSS_login_form={
        "display":"inline-block",
        "color":"white",
        "align-items":"center",
        "padding":"0px",
    }

    const CSS_login_logo={
        "display":"inline-block",
        "max-height" : "150px",
        "min-height":"150px",
        "width":"100%",
        "object-fit" : "contain",
        "border-radius": "5px 5px 0px 0px",
        "padding":"0px",
        "margin":"0px",
    }

    function loginmaj() {

        //hiding navbar link/buttons
        let $navbar = $("#navbar");
        $navbar.css(CSS_navbar_content_hidden);

        //clearing of page-content and creation of login/register box
        let $content = $("#page-content");
        $content.
        $content.append("<div id='login-box'></div>");

        //creation of the login form and logo image
        let $login_form=$("#login-box");
        $login_form.append("<div id='login-logo'></div>");
        $login_form.append("<div id='login-form'></div>");
    }
})