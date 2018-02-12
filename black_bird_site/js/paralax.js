window.onscroll = function() {
	var wScroll = window.pageYOffset;
	
	var logo = document.querySelector('.logo');
	logo.style.transform = "translate(0px, " + wScroll / 2 + "%)";

	var backBird = document.querySelector('.back-bird');
	backBird.style.transform = "translate(0px, " + wScroll / 4 + "%)";

	var foreBird = document.querySelector('.fore-bird');
	foreBird.style.transform = "translate(0px, -" + wScroll / 30 + "%)";

	var clothesPics = document.querySelector('.clothes-pics');
	
	if( wScroll > clothesPics.offsetTop - 400 ) {
		
		var figures = document.getElementsByTagName('figure');

		[].forEach.call(figures, function(figure, i){
			setTimeout(function(i){
				figure.classList.add('is-showing');
			}, 150 * ( i + 1 ) );
		});
	};

	var fallSuites = document.querySelector( '.large-window' );
	var windowTint = document.querySelector( '.window-tint' );

	if( wScroll > (fallSuites.offsetTop - document.documentElement.clientHeight) ) {
		windowTint.style.opacity = 1 - ( ( wScroll - fallSuites.offsetTop ) / document.documentElement.clientHeight );
	}

	var blogPosts = document.querySelector( '.blog-posts' );
	var post1 = document.querySelector( '.post-1' );
	var post3 = document.querySelector( '.post-3' );

	if( wScroll > blogPosts.offsetTop - document.documentElement.clientHeight ) {
		var offset = wScroll - blogPosts.offsetTop + 200;
		offset = Math.min(0,offset);

		post1.style.transform = 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)';
		post3.style.transform = 'translate(' + -offset + 'px, ' + Math.abs(offset * 0.2) + 'px)';
	}

	var menu = document.querySelector( '.menu' );

	if( wScroll > 70 ) {
		menu.style.paddingTop = "5px";
		menu.style.paddingBottom = "5px";
		menu.style.fontSize = '1rem';
	} else {
		menu.style.paddingTop = "35px";
		menu.style.paddingBottom = "35px";
		menu.style.fontSize = '1.5rem';
	}
}

