$(document).ready(function()
{

// CLASE MOVIE 

var Movie= function(){

	this.attributes={
		'title':'',
		'year':'',
	};
	this.actr=new Actor();
	this.movieObs=new MovieObserver();
}

Movie.prototype.set=function(attr,value){
			this.attributes[attr]=value;
		}
Movie.prototype.setAct=function(actor){
			this.actr.setA(actor);
		}		
Movie.prototype.get=function(attr){
			return this.attributes[attr];
		}
Movie.prototype.getAct=function(){
			 this.actr.getA();
}
Movie.prototype.observer= function(){
			this.movieObs.isObserving();
}
Movie.prototype.playMovie=function(){
			this.movieObs.setObs1();
			console.log("Playing "+this.attributes['title']+"...\n");
		}
Movie.prototype.stopMovie=function(){
			this.movieObs.setObs2();
			console.log(this.attributes['title']+" "+"Stopped.");
		}
Movie.prototype.downloadableMovie=function(){
			console.log(this.attributes['title']+" "+"Downloading");
		}

//CLASE MOVIEOBSERVER 

var MovieObserver= function(){
	this.movieO= 0;
}
	MovieObserver.prototype.setObs1=function(){
		this.movieO=1;
	};

	MovieObserver.prototype.setObs2=function(){
		this.movieO=2;
	};

	MovieObserver.prototype.isObserving=function(){
		if(this.Movie0 == 0)
	{
				console.log("The movie do not start");
	}
		if (this.movieO == 1)
	{
		console.log( "is playing");
	}
		if (this.movieO == 2){
		console.log("is stopped");
	}
	};

// CLASE SOCIAL 

var Social=function () {
 	 this.share = function(value) {
   var name = value;
    console.log("Sharing "+this.attributes['title']+" with "+ name);
  };
  	this.like = function(value) {
    var name = value;
    console.log(name+" likes this movie: "+this.attributes['title']);
  };
  return this;
};

// CLASE ACTOR 

var Actor=function() {
	this.actorlist=[];
}

Actor.prototype.setA=function(actor){

		return this.actorlist.push(actor);
		}

Actor.prototype.Count=function(){
	return this.actorlist.length;
};

Actor.prototype.getA=function(){
	var i = this.actorlist.length - 1;
	for (i - 1; i >= 0; i--) {
		console.log(this.actorlist[i]);
	};
};

MovieObserver.call(Movie.prototype);
Social.call(Movie.prototype);
Actor.call(Movie.prototype);
/*

PUNTO 7 - MODULAR !!!!!!

var Movie={};

Movie= (function(){

	var attributes={
		'title':'',
		 'year':''
	};

	return{
		set:function(attr,value){
			attributes[attr]=value;
		},
		get:function(attr){
			return attributes[attr];
		},
		playMovie:function(){
			console.log(attributes['title']+" "+"is playing. . . ");
		},

		stopMovie:function(){
			console.log(attributes['title']+" "+"Stopped. . . ");	
		}
	};
});
*/
var terminator = new Movie();
terminator.set("title","Terminator");
terminator.playMovie();
terminator.stopMovie();
terminator.playMovie();
console.log(terminator.get("title"));
terminator.downloadableMovie();
terminator.share("V. Rivas");
terminator.like("Jesus");
terminator.setAct("hola");
terminator.setAct("hola1");
terminator.setAct("hola2");
console.log(terminator.actr);
terminator.getAct();
terminator.observer();

var bigHero6 = new Movie();
bigHero6.set('title','Big Hero 6');
bigHero6.playMovie();
bigHero6.stopMovie();

var horns=new Movie();
horns.set('title','Horns');
horns.playMovie();
horns.stopMovie();

});