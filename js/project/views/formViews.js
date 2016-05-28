APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesCollection = new APP.PlacesCollection();
    this.place = new APP.PlaceView(false);  

    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {  
    this.$el.html(this.template());    
    this._addPlaceEl();

    return this;
  },

  _addPlaceEl: function() { 
    this.$el.find('#placesArea').append(this.place.render().el);
  },

  events:{
    'click #submitBtn' : 'submit',
    'click #addPlaceBtn' : 'addPlace'
  },

  submit: function() { 

  },

  addPlace: function() { 
    this.place = new APP.PlaceView(true);   
    this._addPlaceEl();
  }

});


