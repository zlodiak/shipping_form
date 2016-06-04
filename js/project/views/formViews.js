APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesModelsCollection = new APP.PlacesModelsCollection();   
    APP.viewsModelsCollection = [];    

    this.placeView = new APP.PlaceView(false); 
    APP.viewsModelsCollection.push(this.placeView);       

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

    _.each(APP.viewsModelsCollection, function(view) {
      console.log('view v res', view.validate())

    });     

    //APP.viewsModelsCollection.each(function(model) { 
      //console.log(model)

/*        length = $('#length_' + model.get('idPlace')).val();
        width = $('#width_' + model.get('idPlace')).val();
        height = $('#height_' + model.get('idPlace')).val();
        volume = $('#volume_' + model.get('idPlace')).val();
        weight = $('#weight_' + model.get('idPlace')).val();

        model.set({
            length: length,
            width: width,
            height: height,
            volume: volume,
            weight: weight
        }); 

        for(attr in model.attributes) {   
            $('#length_' + model.get('idPlace')).removeClass

            if((attr != 'idPlace') && (attr != 'hardBox') && (attr != 'overCargo')) {   
                if(!model.isValid(attr)) {                  
                    validationSuccess = false;
                };
            };            
        }  */          
     
    //}, this ); 

    //console.log('validationSuccess', validationSuccess )    

    //$('#paymentModal').modal('show');
  },

  addPlace: function() { 
    this.placeView = new APP.PlaceView(true);   
    APP.viewsModelsCollection.push(this.placeView);

    this._addPlaceEl();
  }

});


