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
        "color":"white",
        "height":"50px",
        "background":"rgb(60,60,60)",
        "margin-top":".5rem",
        "border":".5px",
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

    const CSS_submit={
        "box-shadow": "2px 5px 5px black",
        "background":"rgb(75,75,75)",
        "color":"white",
        "width" :"45%",
        "margin":"5px",
        "min-height":"50px",
        "font-size":"20px",
        "cursor":"pointer", 
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

    const CSS_money_container={
        "display": "inline-flex",
        "flex-direction": "row",
        "padding": "0px",
        "height": "100%",
        "color": "white",
        "align-self": "flex-end",
        "align-items":"center",
    }

    const CSS_money_value={
        "color": "white",
        "text-align": "center",
        "line-height": "15px",
        "padding-right":"13px",
        "display": "block",

    }

    const CSS_money_icon={
        "width": "40px",
        "height": "fit-content",
        "transform": "scale(1.2,1.2)translate(-8px,1px)",
    }

    const CSS_classement_row={
        "overflow": "hidden",
        "display": "flex",
        "flex-flow": "row",
        "align-items": "center",
        "padding": ".5rem 1rem",
    }

    const CSS_classement_row_item={
        "color": "white",
        "text-align": "center",
        "line-height": "15px",
        "display": "block",
        "padding": ".5rem 1rem",
        "font-size":"30px",
    }
    const CSS_roulette_button={
        
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
        $login_box.append("<div class='login-logo-container'></div>");
        $login_box.append("<div class='login-form'></div>");
        $login_box.css(CSS_login_box)
        let $login_logo_container=$(".login-logo-container");
        $login_logo_container.append("<img class='login-logo' src='img/placeholder.gif'>");
        let $login_logo=$(".login-logo");
        $login_logo.css(CSS_login_logo);

        //creation of the username entry for the form
        let $login_username_entry = $(".login-form");
        $login_username_entry.append("<input type='text' id='username-input' class='login-txt-input' name='username' placeholder='Username'/>");
        $login_username_entry.append("<input type='text' id='password-input' class='login-txt-input' name='password' placeholder='Password'/>");
        $login_username_entry.append("<div class='login-btn-container'></div>");
        $login_username_entry.css(CSS_login_form)
        let $login_txt_input = $(".login-txt-input");
        $login_txt_input.css(CSS_login_txt_input);

        //creation of the action button
        let $login_btn_container = $(".login-btn-container");
        $login_btn_container.append($("<input id='login-submit' type='submit' class='submit' value='Login'>").click(function(){
            let $username = $("#username-input");
            let $password = $("#password-input");
            login($username.val(),$password.val());
        }))
        $login_btn_container.append("<input id='register-submit' type='submit' class='submit' value='Register'>").click(function(){
            let $username = $("#username-input");
            let $password = $("#password-input");
            register($username.val(),$password.val());
        })
        let $login_submit=$(".submit");
        $login_submit.css(CSS_submit);
        
    }

    function moneymaj(amount){

        //creation of money value
        let $money_container=$(".money-container");
        $money_container.append("<p class='money-value'>"+amount+"</p>");
        $money_container.css(CSS_money_container);
        let $money_value=$(".money-value");
        $money_value.css(CSS_money_value);

        //creation of money icon
        $money_container.append("<img id='moneyicon'src='../img/moneyicon.png'/>");
        let $money_icon = $("#moneyicon");
        $money_icon.css(CSS_money_icon);

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
        $info_txt_container.append("<li><p class='info-txt'>Le Shimmering Star Game est un jeu de hasard ou vous devez faire tourner une roue pour récupérer de l'argent votre but et d'avoir le plus d'argent parmi tout les participants si vous avez en dessous de 100 gemmes vous avez perdu</p></li>");
        $info_txt_container.css(CSS_info_txt_container);
    }

    function roulettemaj(){
        //creation of header

        let $ssg_header = $(".ssg-header");
        $ssg_header.append("<span>Roulette</span>");
        $ssg_header.append("<div class='ssg-separator'></div>");
        $ssg_header.css(CSS_ssg_header);
        let $ssg_separator = $(".ssg-separator");
        $ssg_separator.css(CSS_ssg_separator);

        //creation of roulette container
        let $content = $('.home-container');
        $content.append("<div class='roulette-container'></div>")

        //creation of bid button container
        let $roulette_container = $('.roulette-container');
        $roulette_container.append("<div class='bid-container'></div>");
        $roulette_container.append("<span class='result'></span>");
        let $result = $('.result');

        //creation of bid button
        let $bid_container=$('.bid-container');
        $bid_container.append("<button type='submit' id='low'>100</button>");
        $bid_container.append("<button type='submit' id='medium'>1000</button>");
        $bid_container.append("<button type='submit' id='high'>5000</button>")

        function verifymoney(e) {
            console.log('appellé');
            $.ajax({
                url: "../php/api/roulette.php",
                type:"POST",
                data: {'bid' : e.currentTarget.id},
                dataType:"json",
            })
                .done(function(data){
                    let $money_now = data;
                    $result.empty();
                    $result.append("Vous possédez maintenant " + $money_now + " Gemmes");
                    let $money_container = $('.money-container');
                    $money_container.empty();
                    moneymaj($money_now);
                })
        }

        $('#low').click(verifymoney);
        $('#medium').click(verifymoney);
        $('#high').click(verifymoney);



    }

    function classementmaj(){
        //creation of header
        let $ssg_header = $(".ssg-header");
        $ssg_header.append("<span>Classement</span>");
        $ssg_header.append("<div class='ssg-separator'></div>");
        $ssg_header.css(CSS_ssg_header);
        let $ssg_separator = $(".ssg-separator");
        $ssg_separator.css(CSS_ssg_separator);

        //creation of leaderboard
        let $content=$(".home-container");
        $content.append("<div class='classement-container'></div>");


        $.ajax({
            url: "../php/api/leaderboard.php",
            type:"GET",
            dataType:"json",
        })
            .done(function(data){
                console.log(data)
                for(let $i=0;$i<data.length;$i++){

                    //creation of classement row container
                    let $classement_container= $(".classement-container");
                    $classement_container.append("<div class='classement-row'></div>");
                    let $rank_container_create = $("<div class='rank-container'></div>");
                    let $username_container_create = $("<div class='username-container'></div>");
                    let $money_container_create = $("<div class='money-lcontainer'></div>");
                    //création of classement row
                    let $classement_row= $(".classement-row");
                    $classement_row.css(CSS_classement_row);
                    $classement_row.append($rank_container_create);
                    $classement_row.append($username_container_create);
                    $classement_row.append($money_container_create);

                    //création of rank display
                    $rank_container_create.append("<span class='rank-number'>"+($i+1)+"</span>");
                    $rank_container_create.css(CSS_classement_row_item);

                    //creation of username display
                    $username_container_create.append("<span class ='rank-username'>"+data[$i]['username']+"</span>");
                    $username_container_create.css(CSS_classement_row_item);

                    //creation of money display
                    $money_container_create.append("<span class='rank-money>'>"+data[$i]['money']+"</span>");
                    $money_container_create.css(CSS_classement_row_item);
                }

            })
    }

    function login(username,password){
        $.ajax({
            url: "../php/api/login.php",
            type:"POST",
            data: {'username' : username, 'password' : password},
            dataType:"json",
        })
            .done(function(data){
                if(data["id"] !== undefined) {
                    $(".home-container").empty();
                    $(".home-container").css("width","");
                    $("#navbar").css("display","");
                    moneymaj(data['money']);
                    accueilmaj();
                }else{
                    loginmaj();
                }
            })
    }

    function register(username,password){
        if(username == '' || password == ''){
            alert("Vous devez rentrer un username ET un Mot de passe");
        }else {
            $.ajax({
                url: "../php/api/register.php",
                type: "POST",
                data: {'username': username, 'password': password},
                dataType: "json",
            })
        }
    }

    function disconnectmaj(){
        $.ajax({
            url:"../php/api/disconnect.php",
            type:"POST",
            dataType:"json,"
        })
    }


    $(()=>{
        login(undefined,undefined);
        //controller navbar
        $('#accueil').click(function(){
            $('.home-container').empty();
            $('.ssg-header').empty();
            accueilmaj();
        })
        
        $('#classement').click(function(){
            $('.home-container').empty();
            $('.ssg-header').empty();
            classementmaj();
        })

        $('#roulette').click(function(){
            $('.home-container').empty();
            $('.ssg-header').empty();
            roulettemaj();
        })

        $('#disconnect').click(function(){
            $('.home-container').empty();
            $('.ssg-header').empty();
            $('.money-container').empty();
            loginmaj();
            disconnectmaj();
        })



    })

}) ();
