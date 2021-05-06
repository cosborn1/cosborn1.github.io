$("document").ready(() => {

    //About page slideshow function
    $("#gallery > img:gt(0)").hide();

    setInterval(function() { 
        $('#gallery > img:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#gallery');
        },  4000);

})