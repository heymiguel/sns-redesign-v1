

function charClassesListener(){

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
		$('.faction-details', this).toggle('swing');
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
	factionParser();
	expander();
	smoothScroll();
};
//onload function unified
$(function(){
	init();
});