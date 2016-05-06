// Create constructor functions for questions, ingredients, and the pantry (which will contain all of the available ingredients). Then use these constructors to create objects representing the bartenders questions, ingredients and pantry.

$(function(){

});

var Question = function() {
  this.question1 = "Do ye like yer drinks strong?";
  this.question2 = "Do ye like it with a salty tang?";
  this.question3 = "Are ye a lubber who likes it bitter?";
  this.question4 = "Would ye like a bit of sweetness with yer poison?";
  this.question5 = "Are ye one for a fruity finish?";
};

question = new Question;

var Ingredient = function() {
  this.strong = ["Glug of rum", "slug of whisky", "splash of gin"];
  this.salty = ["Olive on a stick", "salt-dusted rim", "rasher of bacon"];
  this.bitter = ["Shake of bitters", "splash of tonic", "twist of lemon peel"];
  this.sweet = ["Sugar cube", "spoonful of honey", "splash of cola"];
  this.fruity = ["Slice of orange", "dash of cassis", "cherry on top"];
};

ingredient = new Ingredient;
