$(function(){
	
	//$(function(){
	  $('#search-term').submit(function(event){
	    event.preventDefault();
	    var searchTerm = $('#query').val();
	    getRequest(searchTerm);
	  });
	//});
	
    function getRequest(searchTerm){
		var params = {
			part: 'snippet',
			key: "AIzaSyBa-ZI_KNK9WXHksjtxQoboYO_-GHwGRW4",
			q: searchTerm
		};
		url = 'https://www.googleapis.com/youtube/v3/search';
		
		$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q=abba&key=AIzaSyDRR0OY18AImRUUhQi5kuHBMGJ7EO7C2_w', function(data){
			showResults(data);
		});
	};
	
	function showResults(results) {
		var html = '<p>Results:</p><br>';
		$.each(results.items, function(index,value){
			html += '<p>' + value.snippet.title + '</p><br>' +
			'<img src=' + value.snippet.thumbnails.medium.url + ' class="thumbnail" alt="thumbnail"><br><br>';
			console.log(value.snippet.title);
			//console.log(value.snippet.thumbnails.medium);
		});
		$('#search-results').html(html);
		};
	
});