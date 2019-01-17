$(document).ready(function() {
	$.ajax({
        type: 'GET',
        url: 'liste.xml',
        dataType: 'xml',
        success: function(xml) {
            var tab = [];
            $(xml).find('image').each(function() {
            	tab.push('<a href="'+$(this).find('src').text()+'" data-fancybox="gallery"><img src="'+$(this).find('src').text()+'"/></a>'); 
            });
            tab = shuffle(tab);
            $(tab).each(function(index, elem) {
            	$('#biblioImages').append(elem);
            });
        }
    });
});
function shuffle(tab) {
	var tabLength = tab.length;
	for (var i = tabLength - 1; i >= 0; i--) {
		var nb = getRandomInt(tabLength-1);
		var save = tab[i];
		tab[i] = tab[nb];
		tab[nb] = save;
	}
	return tab;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}