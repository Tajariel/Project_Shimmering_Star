$(document).ready(function(){

    $("#login_submit").click(function(){

        $.post(
            '../php/connexion.php',
            {
                username : $("#username").val(),
                password : $("#password").val()
            },

            function(data){
                if(data == 'success'){
                    $("#resultat").html("<p>Connexion Effectué</p>");
                }
                else{
                    $("#resultat").html("<p>Identifiant ou Mot de Passe invalide</p>");
                }
            },

            'text'
        );
    });
});

