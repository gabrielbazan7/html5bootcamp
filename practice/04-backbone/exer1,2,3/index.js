$(document).ready(function()
{


$(function(){
	var source= $("#movie-template").html();
	var template= Handlebars.compile(source);
	var context = {
		name: "Rocky",
		year: "1990",
		description: "Movie of Rocky life",
		genre: "Action"
	};
	
	var html = template(context);
	$("#movie").html(html);

});

$(function(){
	var source= $("#listmovies-template").html();
	var template= Handlebars.compile(source);
	var context = {
		movies: [
		{title: "\"Terminator the Movie\"", year: "1995"},
    	{title: "\"Big Hero 6\"", year: "2014"},
    	{title: "\"Horns\"", year: "2009"}
		]
	};
	
	Handlebars.registerHelper("list", function(movies,options)
	{
		var out="<ul>";
		for (var i =0, l=movies.length; i<l;i++)
		{ 
			out=out+"<li>"+ options.fn(movies[i]) + "</li>";
		}
		return out + "</ul>";
	});

	var html = template(context);
	$("#movielist").html(html);

});


var Movie = Backbone.Model.extend(
{
	defaults: function() {
		return {
			title:"",
			year:"",
		}
	}
});

Movie.prototype.getTitle=function(){
  return "Title : "+this.attributes['title']+"\n";
}
 Movie.prototype.getYear = function(){
  return  "Year : " + this.attributes['year'] ;
 }

var MovieList = Backbone.Collection.extend({
	model: Movie
});


var rocky= new Movie({title:"Rocky", year:"1990"});

console.log(rocky);
var terminator = new Movie({title:"terminator the movie",year:"1995" });
console.log(terminator);
var birdMan = new Movie({title:"birdMan", year: "2015"});
console.log(birdMan);

var movielist = new MovieList([rocky,terminator,birdMan]);
//movielist.add(rocky);
console.log(movielist.get(terminator));
console.log(movielist);
console.log(movielist.toJSON());
});