$(function() {
 $('#search-term').submit(function(event) {
  event.preventDefault();
  var searchTerm = $('#query').val();
  getRequest(searchTerm);
 });
});

var gapiKey = "AIzaSyCgjn-j_1L8qw0RAiMLJahj2i2cBbsVhC8";

function getRequest(searchTerm) {
 var params = {
  part : 'snippet',
  q : searchTerm,
  key : gapiKey
 };
 url = 'https://www.googleapis.com/youtube/v3/search';

 $.getJSON(url, params, function(data) {
  showResults(data.items);
 });
}

function showResults(results) {
 var html = "";
 $.each(results, function(index,value) {
  html += '<br><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.medium.url + '"></a><br>';
  console.log(value.snippet.thumbnails.medium.url);
  console.log(value.id.videoId);
 });

$('#search-results').html(html);
}

