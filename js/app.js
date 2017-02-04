/**
 * Created by Valentyn on 1/15/2017.
 */
// client id 101872805300-p0vktnldhovto4gtcb49bedmpqe8s8ve.apps.googleusercontent.com
//client secret VdBNur1kH7ncNbnhBx1MNS1C


//$(document).ready(function(){



 var ACCESS_PARAMETRS = {
     url: "http://api.pdflayer.com/api/convert",
     access_key: "ef438e852ab39a41bc016c02ba6cedf1",
   // dsfdsf: cardT.redirect(),
   // document_url: url_global,
     page_size: "A4",
     page_width: 500,
     page_height: 200
     };

    var CONVERT = {
        init: function(url1){
            CONVERT.convertMethod(url1);
        },

        convertMethod: function(url){
            //console.log("done");
            var data = {
                //url: ACCESS_PARAMETRS.url,
                access_key:  ACCESS_PARAMETRS.access_key,
                document_url:  url,
                //page_size: ACCESS_PARAMETRS.page_size
               //secret_key: ACCESS_PARAMETRS.secret_word,
                inline: "1",
                page_width: ACCESS_PARAMETRS.page_width,
                page_height: ACCESS_PARAMETRS.page_height

            };

           CONVERT.requestTemp(data);

        },

        requestTemp: function(data){
           // console.log("done2");
             $.ajax(ACCESS_PARAMETRS.url, {

                dataType: "json",
                data: data,
                complete: CONVERT.renderTemp(data.document_url)
            });
        },

        renderTemp: function(ur){
            //console.log("hello");
            //console.log(response);
                //alert("before");
            console.log(ur);
           // window.location.href = ur;
           window.location.href = "http://api.pdflayer.com/api/convert?access_key=ef438e852ab39a41bc016c02ba6cedf1&document_url=https%3A%2F%2Fqfrxmjejlp.localtunnel.me%2Fcard.html%3Fusername=Valentyn%20Bilousov&email=valentinebelousov5@gmail.com&adress_first=1875%20W%205th%20street&adress_second=apt%201R&fax=6466916466&phone=6466916466&title=dfd&inline=1";

        }


        };



/*http://api.pdflayer.com/api/convert?access_key=ef438e852ab39a41bc016c02ba6cedf1&document_url=https%3A%2F%2Fhueccumpoq.localtunnel.me%2Fcard.html%3Fusername=Valentyn%20Bilousov%26email%3Dvalentinebelousov5%40gmail.com%26adress_first%3D1875+W+5th+street%26adress_second%3Dapt+1R%26fax%3D6466916466%26phone%3D6466916466%26title%3Ddfd&inline=1*/




//});

