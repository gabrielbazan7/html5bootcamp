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

var MoviesView = Backbone.View.extend({
  el: '.view',
  
   events: {
    "click #button1": "add",
    "click  #button2": "delete",
    "click #button3": "edit",
    "click #button4": "render"
  },

  initialize: function () {
  	
    var button1 = "<div><input class=\"add1\"></input><input class=\"add2\"></input><button id=\"button1\">CLICK TO ADD</button></div>";
    this.$el.append(button1);
    var button2 = "<div><input class=\"delete\"></input><button id=\"button2\">CLICK TO DELETE</button></div>";
    this.$el.append(button2);
    var button3 = "<div><input class=\"edit1\"></input><input class=\"edit2\"></input></input><input class=\"edit3\"></input><button id=\"button3\">CLICK TO EDIT</button></div>";
    this.$el.append(button3);
    var button4 = "<div><input class=\"render\"></input><button id=\"button4\">CLICK TO SHOW LIST</button></div>";
    this.$el.append(button4);
    this.render();
  },

  add: function(ev){
     ev.preventDefault();
     var l = $(".add1").val();
     var k = $(".add2").val();
     var movie1 = new Movie({title:l,year:k});
     $(".message").html("You add a new Movie to the list");
     movielist.add(movie1);
  },
  
  delete: function(ev){
  ev.preventDefault();
   var q=1;
   var l = $(".delete").val();
   for (var i =0; i<= movielist.length - 1; i++) {
   	 if(l == movielist.at(i).attributes['title']) {
   	 	q=0;
   	 movielist.remove(movielist.at(i));
	   $(".message").html("Movie deleted");
   	 }
   	 }
   	 if( q == 1)
   	 	$(".message").html("Movie not found to eliminate");
   },
  
  edit: function(ev){ 
   ev.preventDefault(); 
     var q=1;
   var l = $(".edit1").val();
   var k = $(".edit2").val();
   var m = $(".edit3").val();
   for (var i =0; i<= movielist.length - 1; i++) {
     if(l == movielist.at(i).attributes['title']) {
      q=0;
      movielist.at(i).attributes["title"]=k;
      movielist.at(i).attributes["year"]=m;
     $(".message").html("Movie has been edit");
     }
     }
     if( q == 1)
      $(".message").html("Movie not found to edit");
  },

  render: function() {
   
    for(i=0;i<=movielist.length-1;i++)
   {
    var out =" <div>" + movielist.at(i).getTitle()+ "</div>";
    this.$el.append(out);
   }
  },
  
 });

var DetailsView = Backbone.View.extend({
  el: '.view1',
events: {
    "click #button": "render",
  },

    initialize: function () {
    
    var button = "<div><input class=\"movieDetails\"></input><button id=\"button\">CLICK TO SHOW DETAILS OF MOVIE</button></div>";
    this.$el.append(button);
  },

  render: function() {
   var l = $(".movieDetails").val();
    for(i=0;i<=movielist.length-1;i++)
   {
      if(l == movielist.at(i).attributes['title'])
      {
    var out =" <div>" + movielist.at(i).getTitle()+""+movielist.at(i).getYear() + "</div>";
    this.$el.append(out);
   }
   }
  },
  
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
var appView = new MoviesView();
var appView1 = new DetailsView();
});