jQuery(function ($) {

	// Custom JS

	//	TABS START
	$(".tabs .tabs-content").not(":first").hide();

	$(".tabs-nav .js-tab-btn").on('click', function () {

		const $n = $(this).data('tab');
		$(".tabs-nav .js-tab-btn").removeClass('tabs-nav_item--active')
		$(this).addClass('tabs-nav_item--active')

		$(".tabs-content").hide().eq($n).fadeIn('slow')
		console.log($(".tabs-content").eq($n).find('iframe').attr('data-src'))
	})
	//TABS END

}); // fix wordpress render JQ
