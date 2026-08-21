class ShoppingCart {
	async scanItem(id) {
		await new Promise(resolve => setTimeout(resolve, 2000));
		console.log(`Scanned item ${id}`);
	}
}

const itemIds = [101, 102, 103];
const [firstItemId, ...remainingItemIds] = itemIds;

const processItems = async () => {
	const shoppingCart = new ShoppingCart();
	const startTime = Date.now();

	for (const id of [firstItemId, ...remainingItemIds]) {
		await shoppingCart.scanItem(id);
	}

	console.log(`Total execution time: ${((Date.now() - startTime) / 1000).toFixed(1)} seconds`);
};

processItems();
