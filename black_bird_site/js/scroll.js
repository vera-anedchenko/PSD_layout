document.querySelector('.store').onclick = scroll;
document.querySelector('.style').onclick = scroll;
document.querySelector('.history').onclick = scroll;
document.querySelector('.designer').onclick = scroll;

function scroll() {
	var menuItems = document.querySelector('nav span');
	var targetTop = document.getElementById(this.getAttribute('class')).offsetTop;

	[].forEach.call(menuItems, function(item){
		item.onclick = null;
	});

	if(window.pageYOffset < targetTop) {
		var iBottom = setInterval(function() {
			var documentHeight = document.documentElement.scrollHeight;
			var wBottomScroll = window.pageYOffset + document.documentElement.clientHeight;

			if( (window.pageYOffset >= targetTop) ) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iBottom);
				return false;
			}

			if(wBottomScroll === documentHeight) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iBottom);
				return false;
			}

			window.scrollBy(0, 30);

		}, 5);

	} else {
		var iTop = setInterval(function() {

			if( (window.pageYOffset <= targetTop) ) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iTop);
				return false;
			}

			if( (window.pageYOffset === 0) ) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iTop);
				return false;
			}

			window.scrollBy(0, -30);

		}, 15);
	}
}

document.querySelector('.scroller').onclick = function(){
	var iTop = setInterval(function() {
		if(window.pageOffset ===0) {
			clearInterval(iTop);
			return false;
		}

		window.scrollBy(0, -30);

	}, 15);
}


