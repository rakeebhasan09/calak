// Product Add Functionality
document.getElementById("addProduct").addEventListener("click", function () {
	const totalProducts = parseInt(
		document.getElementById("totalProducts").innerText
	);
	const newTotalProducts = totalProducts + 1;
	document.getElementById("totalProducts").innerText = newTotalProducts;
});

// Product Remove Functionality
document.getElementById("removeProduct").addEventListener("click", function () {
	const totalProducts = parseInt(
		document.getElementById("totalProducts").innerText
	);
	const newTotalProducts = totalProducts - 1;
	if (totalProducts === 1) {
		return;
	}
	document.getElementById("totalProducts").innerText = newTotalProducts;
});

(function ($) {
	$(document).ready(function () {
		// Scroll to Top
		jQuery(".scrolltotop").click(function () {
			jQuery("html").animate({ scrollTop: "0px" }, 400);
			return false;
		});

		jQuery(window).scroll(function () {
			var upto = jQuery(window).scrollTop();
			if (upto > 500) {
				jQuery(".scrolltotop").fadeIn();
			} else {
				jQuery(".scrolltotop").fadeOut();
			}
		});
	});
})(jQuery);
