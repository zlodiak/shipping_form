APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesModelsCollection = new APP.PlacesModelsCollection();   
    APP.placesViewsCollection = [];    

    this.placeView = new APP.PlaceView(false); 
    APP.placesViewsCollection.push(this.placeView);       

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
      if(view) { 
        if(view.validate() == false) { validationSuccess = false };
      };
    });    

    this.collectFormData()

    if(validationSuccess) { 
      this.modalView = new APP.PaymentModalView(this.collectFormData());
      $('#paymentModal').modal('show');
    }; 
  },

  addPlace: function() { 
    this.placeView = new APP.PlaceView(true);   
    APP.placesViewsCollection[this.placeView.model.get('idPlace')] = this.placeView;

    this._addPlaceEl();
  },

  collectFormData: function() { 
    var formData = {};

    _.each(APP.placesViewsCollection, function(view) {
      if(view) { 
        formData[view.idPlace] = view.getFormData();
        //console.log('formData', formData)
      };
    });  

    return formData;
  }  

});


