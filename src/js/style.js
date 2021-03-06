/* Hide Navbar when menu item is selected */
$('.nav a').on('click', function() { $('.navbar-collapse').collapse('hide').click() });
$('.navbar-header a').on('click', function() { $('.navbar-collapse').collapse('hide').click() });

/* Replace all SVG images with inline SVG - acquired from Drew Baker at Stack Overflow: http://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement*/
jQuery('img.svg').each(function() {
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');
		// Add replaced image's ID to the new SVG
		if (typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if (typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass + ' replaced-svg');
		}
		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');
		// Replace image with new SVG
		$img.replaceWith($svg);
	}, 'xml');
});

/* <![CDATA[ */
(function(d, s, a, i, j, r, l, m, t) {
	try { l = d.getElementsByTagName('a');
		t = d.createElement('textarea');
		for (i = 0; l.length - i; i++) {
			try { a = l[i].href;
				s = a.indexOf('/cdn-cgi/l/email-protection');
				m = a.length;
				if (a && s > -1 && m > 28) { j = 28 + s;
					s = '';
					if (j < m) { r = '0x' + a.substr(j, 2) | 0;
						for (j += 2; j < m && a.charAt(j) != 'X'; j += 2) s += '%' + ('0' + ('0x' + a.substr(j, 2) ^ r).toString(16)).slice(-2);
						j++;
						s = decodeURIComponent(s) + a.substr(j, m - j) }
					t.innerHTML = s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
					l[i].href = 'mailto:' + t.value } } catch (e) {} } } catch (e) {} })(document); /* ]]> */

(function($) {
    "use strict"; // Start of use strict

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

})(jQuery); // End of use strict
