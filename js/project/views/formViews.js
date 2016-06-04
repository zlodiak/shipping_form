APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesModelsCollection = new APP.PlacesModelsCollection();   
    APP.placesViewsCollection = [];    

    this.placeView = new APP.PlaceView(false); 
    APP.placesViewsCollection.push(this.placeView);       

/*    Backbone.Validation.bind(this, {
      collection: APP.placesModelsCollection
    });*/

    new APP.PaymentModalView();

    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {  
    this.$el.html(this.template());    
    this._addPlaceEl();

    return this;
  },

  _addPlaceEl: function() { 
    this.$el.find('#placesArea').append(this.placeView.render().el);
  },

  events:{
    'click #submitBtn' : 'submit',
    'click #addPlaceBtn' : 'addPlace'
  },

  submit: function() { 
    var validationSuccess = true;   

    _.each(APP.placesViewsCollection, function(view) {
      if(view) { console.log('view v res', view.validate()) };
    });     

    //console.log('validationSuccess', validationSuccess )    

    //$('#paymentModal').modal('show');
  },

  addPlace: function() { 
    this.placeView = new APP.PlaceView(true);   
    //console.log(this.placeView.model.get('idPlace'))
    APP.placesViewsCollection[this.placeView.model.get('idPlace')] = this.placeView;
    console.log(APP.placesViewsCollection)

    this._addPlaceEl();
  }

});


