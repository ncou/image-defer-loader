var imgDefer = (function () {
	var fn = {};

	fn.load = function(options) {
		var selector = '.defer';

		if( typeof options === 'undefined') {
			selector = ( typeof options !== 'undefined' ) ? options.selector : selector;
		}
		var elements = document.querySelectorAll(selector);
		if( elements.length > 0 ) {
			for( var i = 0; i < elements.length; i++ ) {
				var element = elements[i];
				if( element.hasAttribute('data-src') ) {
					var src = element.getAttribute('data-src');
					element.setAttribute('src', src);
				}
			}
		}
	};

	return fn;
})();