function heroSectionListener(){
	$('.hero-slogan').mouseenter(function(){
		$('span', this).removeClass('redacted');
	});
	$('.hero-slogan').mouseleave(function(){
		$('span', this).addClass('redacted');
	});
};

function charClassesListener(){
	$('.character-gallery .character').on('click',function(){
		$('.image-mask, .summary').removeClass('open');
		$('.image-mask, .summary', this).toggleClass('open');
		var whoAmI = $(this).attr('data');
		borderChanger(whoAmI);
	});
};

function borderChanger(incomingClass){
	$('.character-details h5').removeClass().addClass(incomingClass);

};

function factionParser(){
	$('#factions .row').on('click',function(){
		var clickedFaction = $(this).attr('data');
		var factionPull = factions[clickedFaction];
		var history = factionPull.history;
		var doctrine = factionPull.doctrine;
		var orgStructure = factionPull.orgStructure;
		$('.faction-history .history', this).html(history);
		$('.faction-structure .doctrine', this).html(doctrine);
		$('.faction-structure .org-structure', this).html(orgStructure);
	});
};

function expander(){
	$('#factions .row').on('click',function(){
		if ($(this).find('i').hasClass('fa-plus-square')){
			$(this).find('i').removeClass('fa-plus-square').addClass('fa-minus-square');
		} else if ($(this).find('i').hasClass('fa-minus-square')) {
			$(this).find('i').removeClass('fa-minus-square').addClass('fa-plus-square');
		}
		$('.faction-details', this).toggleClass('expanded');
	});
};

function smoothScroll(){
	$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
	});
};

function init(){
	charClassesListener();
	heroSectionListener();
	factionParser();
	expander();
	smoothScroll();
};
//onload function unified
$(function(){
	init();
});