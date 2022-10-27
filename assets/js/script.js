const shareData = {
	title: 'Michael Raiwet',
	text: '',
	url: 'https://raiwet.ca'
}

const btn = document.querySelector('button');


// Share must be triggered by "user activation"
btn.addEventListener('click', async () => {
	try {
		await navigator.share(shareData);
		
	} catch (err) {
		
	}
});

// Google tag (gtag.js)
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-LV7R019EMV');