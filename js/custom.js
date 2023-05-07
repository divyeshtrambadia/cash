$(document).ready(function() {
    if(jQuery('#datepicker').length){
    $('#datepicker').datepicker({
        autoclose: true,
        format: 'dd M,yyyy',
        startDate: '-1y -1m',
        endDate: '+2m +10d'
       });
     
       $('#datepicker2').datepicker({
        autoclose: true,
        format: 'dd M,yyyy',
        startDate: '-1m',
        endDate: '+10d'
       });
    }

    $('.ds-mobile-icon').click(function() {
        $("body").toggleClass("open");
    });
    $(document).on('click',function() {
        $("body").removeClass("open");
    });
    $(".dashboard-left, .ds-mobile-icon").on('click',function(e) {
        e.stopPropagation()
    });
});