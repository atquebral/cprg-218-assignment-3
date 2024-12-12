serenecitrus.addEventListener('click', function(){
    drinktitle.innerHTML = "Serene Citrus";
    document.getElementById('drink-image').src="images/serene-citrus.png";
    console.log('test');
    drinkdescription.innerHTML = "This bright, citrus-forward drink combines the calming effects of lemon balm with the subtle, uplifting power of L-theanine (found in green tea). The slightly tangy yuzu balances the earthy notes of lemon balm, creating a refreshing, soothing experience that can reduce stress and increase focus—perfect for unwinding or finding mental clarity.";
})

midnightbloom.addEventListener('click', function(){
    drinktitle.innerHTML = "Midnight Bloom";
    document.getElementById('drink-image').src="images/midnight-bloom.png";
    drinkdescription.innerHTML = "This luxurious blend pairs the deep, rich sweetness of blackberries with the soothing floral notes of lavender. Rhodiola enhances mental clarity and reduces fatigue, while lavender promotes calmness and relaxation. Perfect for unwinding in the evening or enjoying a serene moment of indulgence.";
})

crimsonglow.addEventListener('click', function(){
    drinktitle.innerHTML = "Crimson Glow";
    document.getElementById('drink-image').src="images/crimson-glow.png";
    drinkdescription.innerHTML = "A harmonious mix of tart cherries and the citrusy, herbal notes of lemon balm. This blend is designed to uplift your mood with L-theanine for gentle focus and lemon balm to ease stress. A vibrant, refreshing drink for moments when you want clarity and balance.";
})
