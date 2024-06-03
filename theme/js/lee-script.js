$(document).ready(function() {


    $(document).ready(function() {
        function tagOurNames() {
            // nice - this is the jQ for removeEventListener
            $('.ourCopyrightNames').off('mouseenter');
            
        
            $('.ourCopyrightNames').one('mouseenter', function() {
                console.log($(this).text() + ' activated');
                
                // allows me to prevent them being clicked twice in a row
                $('.ourCopyrightNames').removeClass("active");
                $(this).addClass('active');
    
                // another find! Take all except this (should also work for named elements, I think)
                $(".ourCopyrightNames").not(this).one('mouseenter', function() {
                    console.log($(this).text() + ' activated again');
                    
                    $('.ourCopyrightNames').removeClass('active');
                    $(this).addClass('active');
                    
    
                    tagOurNames();
                });
            });
        }
    
        
        tagOurNames();
    });


}); // end ready


