$(document).ready(function() {


	$('.link_4').click(function(e) {
		if (e.target.className != 'tooltiptext' && !$('.tooltiptext').find(e.target).length) {
	        jQuery('.tooltiptext').toggle(); }
	      
	    });


	  $(document).click(function(e) {

		if (e.target.className != 'link_4' && e.target.className != 'tooltiptext' && !$('.tooltiptext').find(e.target).length) { 
			$(".tooltiptext").hide(); 
		} 
	}); 


	  
	  if ($(window).width() <= 560){	

		$('.icon-Close').on('click', function(){
			 $(".tooltiptext").hide();
		});
	};	







equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.box__kredit');
});


$(window).resize(function(){
  equalheight('.box__kredit');
});


$('.accordion__button').click(function() {
  $(this).parent().toggleClass('active');
  $(this).parent().find('.accordion__content').slideToggle();
});



});













