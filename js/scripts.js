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
