(function(){
    "use strict";

    const CSS_login_box ={
        "display":"flex",
        "flex-wrap":"wrap",
        "background-color" : "2a2a2a",
        "position": "unset",
        "border-radius":"5px",
        "min-height": "350px",
        "justify-content":"center",
        "align-items":"center",
    }

    const CSS_navbar_content_hidden={
        "display":"none",
    }

    const CSS_login_form={
        "display":"inline-block",
        "color":"white",
        "align-items":"center",
        "padding":"0px",
        "width" : "min-content",
    }

    const CSS_login_txt_input={
        "font-size":"20px",
        "color":"#4a4a4a",
        "height":"50px",
        "background":"rgb(60,60,60)",
        "margin-top":".5rem",
        "border":".5px",
    }

    const CSS_login_logo={
        "max-height" : "150px",
        "min-height":"150px",
        "width":"100%",
        "object-fit" : "contain",
        "border-radius": "5px 5px 0px 0px",
        "padding":"0px",
        "margin":"0px",
    }

    const CSS_info_content={
        "display": "inline-block",
        "width": "100%",
        "height": "100%",
        "color": "white",
        "vertical-align": "top",
        "padding": "0px",
    }

    const CSS_info_header={
        "display":"block",
        "border-radius":"0px",
        "margin-top":"4px",
        "background":"#111",
        "padding": "0px 2px 0px 10px",
        "text-align": "center",
    }

    const CSS_info_img_div_img={
        "display":"inline-block",
        "max-height": "150px",
        "min-height": "150px",
        "width":"100%",
        "object-fit":"cover",
        "border-radius" : "5px 5px 0px 0px",
        "transition": "filter 0.5s",
        "padding":"0px",
        "margin": "0px",
        "filter": "brightness(50%) blur(0px)",
    }

    const CSS_info_txt_container={
        "font-size":"13px",
        "color":"#bbb",
    }

    const CSS_info_game={
        "position": "unset",
        "background-color": "#2a2a2a",
        "border-radius": "5px",
        "width": "100%",
        "height": "100%",
        "min-height": "350px",
        "transition": "width 0.5s",
    }

    const CSS_ssg_header={
        "color": "white",
        "font-size": "1.5em",
        "margin":"10px 0px",
    }

    const CSS_ssg_separator={
        "width":"100%",
        "border-bottom":"3px solid #2A2A2A",
        "margin-bottom":"10px",
    }

    function loginmaj() {

        //hiding navbar link/buttons
        let $navbar = $("#navbar");
        $navbar.css(CSS_navbar_content_hidden);

        //creation of login/register box
        let $content=$(".home-container");
        $content.append("<div class='login-box'></div>");
        $content.css("width","50%");

        //creation of the login form and logo image
        let $login_box=$(".login-box");
        $login_box.append("<div class='login-logo'></div>");
        $login_box.append("<div class='login-form'></div>");
        $login_box.css(CSS_login_box)
        let $login_logo=$(".login-logo");
        $login_logo.css(CSS_login_logo)

        //creation of the username entry for the form
        let $login_username_entry = $(".login-form");
        $login_username_entry.append("<input type='text' class='login-txt-input' name='username' placeholder='Username'/>");
        $login_username_entry.append("<input type='text' class='login-txt-input' name='password' placeholder='Password'/>");
        $login_username_entry.append("<div class='login-btn-container></div>");
        $login_username_entry.css(CSS_login_form)
        let $login_txt_input = $(".login-txt-input");
        $login_txt_input.css(CSS_login_txt_input);

        //creation of the action button
        let $login_btn_container = $(".login-btn-container");
        $login_btn_container.append("<input type='submit' class='submit' value='Login'>");
        $login_btn_container.append("<input type='submit' class='submit' value='Register'>")
        
    }

    function accueilmaj(){
        //creation of header
        let $ssg_header = $(".ssg-header");
        $ssg_header.append("<span>Présentation</span>");
        $ssg_header.append("<div class='ssg-separator'></div>");
        $ssg_header.css(CSS_ssg_header);
        let $ssg_separator = $(".ssg-separator");
        $ssg_separator.css(CSS_ssg_separator);

        //creation of information post
        let $content=$(".home-container");
        $content.append("<div class='info-game'> </div>");

        //creation of post image and text container
        let $info_game = $(".info-game");
        $info_game.append("<div class='info-img'></div>");
        $info_game.append("<div class='info-content'></div>");
        $info_game.css(CSS_info_game);

        //link to image for post
        let $info_img = $(".info-img");
        $info_img.append("<img id='info-img-item' src='img/placeholderwide.jpg'>");

        //attributing css to post img
        let $info_img_item = $("#info-img-item");
        $info_img_item.css(CSS_info_img_div_img);

        //creation of header and body container for the text container
        let $info_content = $(".info-content");
        $info_content.append("<div class='info-header'> <h4>Ceci est le Shimmering Star Game</h4>   </div>");
        $info_content.append("<ul class ='info-txt-container'style='list-style-type: none;padding-left: 20px;'></ul>");
        $info_content.css(CSS_info_content);

        //CSS for info-header
        let $info_header = $ (".info-header");
        $info_header.css(CSS_info_header);

        //creation of content of info-txt-container
        let $info_txt_container = $(".info-txt-container");
        $info_txt_container.append("<li><p class='info-txt'>Ceci est le Shimmering Star Game</p></li>");
        $info_txt_container.append("<li><p class='info-txt'>Le Shimmering Star Game est un jeu de type Gacha, qui consiste en la collecte de personnage obtenable dans une roulette contre de l'argent. Vous pouvez récupérer de l'argent dans la partie clicker du site et l'utiliser pour améliorer la valeur des personnages que vous possédez déja ou l'utiliser dans la roulette pour obtenir de nouveaux personnages</p></li>");
        $info_txt_container.css(CSS_info_txt_container);
    }
    $(()=>{
        loginmaj();

    })
}) ();