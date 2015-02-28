

var Movie = Backbone.Model.extend(
{
	//inicialize: function(){
	//	console.log("se ha creado una nueva istancia");
	//}
});

var terminator = newMovie({
	titulo : "terminator the movie",
	year : "1995"
});

terminator.toJson();

terminator.get("titulo");

terminator.set("year","2000");
