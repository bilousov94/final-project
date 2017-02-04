/**
 * Created by Valentyn on 1/24/2017.
 */
$(document).ready(function(){


var homePage = {
    indexTemplate: _.template(

            '<div id="myCarousel" class="carousel bs-slider slide  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="1000">' +
                '<ol class="carousel-indicators">' +
                    '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>' +
                    '<li data-target="#myCarousel" data-slide-to="1"></li>' +
                    '<li data-target="#myCarousel" data-slide-to="2"></li>'+
                '</ol>' +

            // Start slides

                '<div class="carousel-inner" role="listbox">' +
                    '<div class="item active">' +
                        '<img src="../img/city.jpg" alt="City"  class="slide-image"/>' +
                        '<div class="bs-slider-overlay"></div>' +
                        ' <div class="container">' +
                            '<div class="row">' +
                                '<div class="slide-text slide_style_center">' +
                                    '<h1 data-animation="animated zoomInRight">Welcome to business tool</h1>' +
                                    '<p data-animation="animated fadeInLeft" >We help you with your business</p>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="item">' +
                        '<img src="../img/news.jpg" alt="news"  class="slide-image"/>' +
                        '<div class="bs-slider-overlay"></div>' +
                        ' <div class="slide-text slide_style_left">' +
                            '<h1 data-animation="animated flipInX">Check the latest news</h1>' +
                            '<p></p>' +
                            '<a href="#" target="_blank"  class="btn btn-primary" data-animation="animated fadeInDown">HERE</a>' +
                        '</div>' +
                    '</div>' +

                    '<div class="item">' +
                        '<img src="../img/data.jpg" alt="data"  class="slide-image"/>' +
                        '<div class="bs-slider-overlay"></div>' +
                        '<div class="slide-text slide_style_right">' +
                            '<h1 data-animation="animated zoomInLeft">Create your business cards and invoices</h1>' +
                            '<p data-animation="animated fadeInRight">It is very easy with our tools</p>' +
                            '<a href="#" target="_blank" class="btn btn-default" data-animation="animated fadeInLeft">business card</a>' +
                            '<a href="#" target="_blank" class="btn btn-primary" data-animation="animated fadeInRight">invoice</a>' +
                        '</div>' +
                    '</div>'+
                '</div>' +
            //end of slides

            //left control
                '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">' +
                    '<span class="fa fa-angle-left" aria-hidden="true"></span>' +
                    '<span class="sr-only">Previous</span>' +
                '</a>' +

            // right control
                '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">' +
                    '<span class="fa fa-angle-right" aria-hidden="true"></span>' +
                    '<span class="sr-only">Next</span>' +
                '</a>' +

            '</div>' +

            // portfolio of business cards
            '<h1 class = "text-center">Top designs</h1>' +
            '<div class = "row_card">' +
                '<img src="../img/business-cards/first.jpg" class="img-rounded examples">' +
                '<img src="../img/business-cards/second.jpg" class="img-rounded examples">' +
                '<img src="../img/business-cards/third.jpg" class="img-rounded examples">' +
                '<img src="../img/business-cards/four.jpg" class="img-rounded examples">' +
                '<img src="../img/business-cards/fifth.jpg" class="img-rounded examples">' +

        '</div>'
    ),



    homeEvent: function(){
        $("#home_page").on("click", function(){
            $("#main_content").html(homePage.indexTemplate());
        });


    },

    init: function(){
        var templ = homePage.defaultPage();
        $("#main_content").html(templ);
        homePage.homeEvent();

    },

    defaultPage: function(){
        return homePage.indexTemplate();
    }


};
    homePage.init();


});



