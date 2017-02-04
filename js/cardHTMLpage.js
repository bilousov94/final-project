/**
 * Created by Valentyn on 1/30/2017.
 */
$(document).ready(function(){
var newArray = [];
var currentUser;
var url_global;
var cardT = {
    cardHTML: _.template(
        '<div class = "contact_inf"><h5 class = "text-right"> Tel: <%= phone %> </h5>' +
        '<h5 class = "text-right">Fax: <%= fax %></h5></div>' +
        '<h3 class = "text-center"><strong><%= name %></strong></h3>' +
        '<p class = "text-center"><%= title %></p>' +
        '<h3 class = "text-center"><small><%= adress_first %></small> ' +
        '<small><span class="glyphicon glyphicon-globe" aria-hidden="true"></span></small>' +
        '<small> <%= adress_second %> </small><br>' +
        '<small><%= email %></small></h3>'
    ),

    addCont: function(inputs){
        return cardT.cardHTML(inputs);

    },

    finalData: [],

    addToAr: function(){

        var ref = firebase.database().ref("users/" + currentUser.uid);
        ref.once("value")
            .then(function(snapshot) {
                var name = snapshot.child("name").val();
                var email = snapshot.child("email").val();
                var adressOne = snapshot.child("adressOne").val();
                var adressTwo = snapshot.child("adressTwo").val();
                var fax = snapshot.child("fax").val();
                var phone = snapshot.child("phone").val();
                var title = snapshot.child("title").val();

                cardT.finalData.name = name;
                cardT.finalData.email = email;
                cardT.finalData.adress_first = adressOne;
                cardT.finalData.adress_second = adressTwo;
                cardT.finalData.fax = fax;
                cardT.finalData.phone = phone;
                cardT.finalData.title = title;

                cardT.redirect(cardT.finalData);
              //  cardT.pushCont(cardT.finalData);
                //alert("before");
               // setTimeout(CONVERT.init(), 2000);
            });



    },

    redirect: function(data_url){
        //window.location.href =
        //    "?username=" + data_url.name + '&email=' + data_url.email + '&adress_first=' + data_url.adress_first +
        //'&adress_second=' + data_url.adress_second + '$fax=' + data_url.fax + '&phone=' + data_url.phone + '&title=' + data_url.title +'';
     //   console.log("?username=" + data_url.name + '&email=' + data_url.email + '&adress_first=' + data_url.adress_first +
      //      '&adress_second=' + data_url.adress_second + '$fax=' + data_url.fax + '&phone=' + data_url.phone + '&title=' + data_url.title +'');

        //var name = data_url.name;
        //var email = data_url.email;
        //var adress_first = data_url.adress_second;
        //var adress_second = data_url.adress_second;
        //var fax = data_url.fax;
        //var phone = data_url.phone;
        //var title = data_url.title;
        url_global = "?username=" + data_url.name + '&email=' + data_url.email + '&adress_first=' + data_url.adress_first +
             '&adress_second=' + data_url.adress_second + '&fax=' + data_url.fax + '&phone=' + data_url.phone + '&title=' + data_url.title +'';
        window.location.href = url_global;
             // url generate

    },

    pushCont: function(inputsValue){
        var card_value = cardT.addCont(inputsValue);
        $(".card_templ").html(card_value);
            // start request
      //  alert("stop1");
      // CONVERT.init();
    }




};

    function getParameterByName(name, url) { //url reading
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }


    if(getParameterByName('username')) {
      //  $('.card_templ').html(getParameterByName('username'));
            newArray.name = getParameterByName('username');
        newArray.email = getParameterByName('email');
        newArray.adress_first = getParameterByName('adress_first');
        newArray.adress_second = getParameterByName('adress_second');
        newArray.phone = getParameterByName('phone');
        newArray.title = getParameterByName('title');
        newArray.fax = getParameterByName('fax');
        var card_value = cardT.addCont(newArray);
        $(".card_templ").html(card_value);
        $(".url_value").html(window.location.href);
        var urls = 'https%3A%2F%2Fhueccumpoq.localtunnel.me%2Fcard.html'+encodeURI('?username=' + newArray.name + '&email=' + newArray.email + '&adress_first=' + newArray.adress_first +
            '&adress_second=' + newArray.adress_second + '&fax=' + newArray.fax + '&phone=' + newArray.phone + '&title=' + newArray.title);
        //CONVERT.init(urls);
        //Render template
        split
    }
    else
    {

        //alert("please log in again");
        firebaseAuth.signInWithPopup(provider).then(function (user) {

            if (user) {
                currentUser = user.user;
                cardT.addToAr();
            }
            else {

                firebaseAuth.signInWithPopup(provider).then(function (user) {

                }).catch(function (error) {
                    alert(error);
                })
            }
        });
    }




});