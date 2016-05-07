// Create constructor functions for questions, ingredients, and the pantry (which will contain all of the available ingredients). Then use these constructors to create objects representing the bartenders questions, ingredients and pantry.

$(function(){
  question;
  ingredient;
  // askQuestion();
});

var Question = function() {
  this.questions =
    [ "Do ye like yer drinks strong?",
      "Do ye like it with a salty tang?",
      "Are ye a lubber who likes it bitter?",
      "Would ye like a bit of sweetness with yer poison?",
      "Are ye one for a fruity finish?"
    ];
};

var question = new Question;

var Ingredient = function() {
  this.strong = ["Glug of rum", "slug of whisky", "splash of gin"];
  this.salty = ["Olive on a stick", "salt-dusted rim", "rasher of bacon"];
  this.bitter = ["Shake of bitters", "splash of tonic", "twist of lemon peel"];
  this.sweet = ["Sugar cube", "spoonful of honey", "splash of cola"];
  this.fruity = ["Slice of orange", "dash of cassis", "cherry on top"];
};

var ingredient = new Ingredient;


var User = function() {

};


var Controller = function() {

}

Controller.prototype.iterateThroughQuestions = function(questionObject) {
  questionObject.forEach(function() {
    // ask a question to user
    // if true
      // select random ingredient from ingredient obj save to user object
    // else
      // move to next question and note response.

  });
  // return finished drink
}

Controller.prototype.askQuestion = function() {

};

var controller = new Controller(question);




// loop through question object for question length
//   ask a question to the user object
//   if the answer is true
//     select a random ingredient from ingredient object and save to user object
//   else
//     either move on to next question or show they said no to this
//   end
// end while loop

// return finished drink to user



