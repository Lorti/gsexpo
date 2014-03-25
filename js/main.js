

$(document).ready(function(){
	$('#menuToggle').on('click', function(){
		$('.mainNavigation_container').toggleClass('activeMenu');
	})

  $('a[href^=#]').on('click', function(evt){
    evt.preventDefault();
    $('.mainNavigation_container').removeClass('activeMenu');
    $('html, body').scrollTop($(evt.target.hash).offset().top - $('.mainNavigation').height());
  })
});