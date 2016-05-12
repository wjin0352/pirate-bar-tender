// Create constructor functions for questions, ingredients, and the pantry (which will contain all of the available ingredients). Then use these constructors to create objects representing the bartenders questions, ingredients and pantry.
(function(){

  $(function(){
    controller.initialize();
  });

  var Question = function() {
    this.questions =
      [
        "Do ye like yer drinks strong?",
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

  // a conglomerate of data and ingredient
  var Category = function(prompt, ingredient) {
    this.prompt = prompt;
    this.ingredient = ingredient;
  }

  Category.prototype.getRandomIngredient = function() {
    return this.ingredient[Math.floor(Math.random()*this.ingredient.length)];
  };

  var categories = [
    new Category(question.questions[0], ingredient.strong),
    new Category(question.questions[1], ingredient.salty),
    new Category(question.questions[2], ingredient.bitter),
    new Category(question.questions[3], ingredient.sweet),
    new Category(question.questions[4], ingredient.fruity)
  ];

  var Drink = function() {
    this.ingredients = [];
  };

  Drink.prototype.addIngredient = function(selectedCategories) {
    var ingredientList = [];
    selectedCategories.forEach(function(cat) {
      ingredientList.push(cat.getRandomIngredient());
    });
    console.log(ingredientList);
  };

  Drink.prototype.serialize = function() {
    if (this.ingredients.length === 0) {
      return "empty glass";
    } else {
      return this.ingredients.join(", ");
    }
  };

  drink = new Drink

  var Controller = function(question, ingredient, drink) {
  }

  Controller.prototype.checkFormResponse = function(responses) {
    var checked = [];
    var length = responses.target.length - 1;
    for(var i=0; i<length; i++) {
      if (responses.target[i].checked) {
        checked.push(categories[i]);
      };
    };
    drink.addIngredient(checked);
  };

  Controller.prototype.attachHandlerFormSubmit = function() {
    var self = this;
    $('.question-input').on('submit',function(e) {
      self.checkFormResponse(e);
      e.preventDefault();
    });
  };

  Controller.prototype.createForm = function() {
    var parent = $('.question-input');
    categories.forEach(function(cat) {
      var questAns = ['<div><label for="'+ cat.ingredient[0] +'">'+ cat.prompt +'</label>',
      '<input type="checkbox" id="'+ cat.ingredient[0] +'"></div><br>'].join("");
      $(parent).append(questAns);
    });
    var submit = '<input type="submit" class="btn btn-alt" value="arugah!!!">';
    $(parent).append(submit);
  };

  Controller.prototype.initialize = function() {
    this.createForm();
    this.attachHandlerFormSubmit();
  };

  var controller = new Controller(question, ingredient, drink);

})();
