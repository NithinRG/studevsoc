$( document ).ready(function () {
    $(".btn-group").find(".btn").click(function () {
        $(".btn-group").find(".btn").removeClass("active");
        $(this).addClass("active");
    });
    $('.portfolio-items').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.5s'
    });
    var $grid = $('.portfolio-items').isotope({
    });
    
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});