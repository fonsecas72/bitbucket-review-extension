$(document).ready(function() {



	$("#diff-tab-preload").hide();

	$( "section" ).each(function( index ) {
	  $(this).css( "margin-top", "0px" );
		$(this).css( "min-height", "0px" );
	});

	var r= $('<input id="hide-top" type="button" value="Toggle This" style="margin: 4px 2em;"/>');
	$('div.aui-item.section-title').css("display", " -webkit-inline-box");
	$('div.aui-item.section-title').append(r)

  $("ul.commit-files-summary").hide();

	$('div.diff-content-container.refract-container.word-diff').hide();

	$( "h1.filename" ).each(function() {
	  $(this).css( "color", "black" );
		$(this).css( "font-weight", "bold" );
	});

	$("#hide-top").on( "click", function() {
		$("#pull-request-header").toggle();
	});
	$( "h1.filename" ).on( "click", function() {
		console.log('click');
		var filename = $(this).text().replace('File','').trim();
		$("section[data-identifier='"+filename+"'] > div > div.diff-content-container.refract-container.word-diff").toggle();
	});

});
