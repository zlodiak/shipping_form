APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesCollection = new APP.PlacesCollection();  
    this.place = new APP.PlaceView(false);     

    Backbone.Validation.bind(this, {
      collection: APP.placesCollection
    });

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
    this.$el.find('#placesArea').append(this.place.render().el);
  },

  events:{
    'click #submitBtn' : 'submit',
    'click #addPlaceBtn' : 'addPlace'
  },

  submit: function() { 
    var validationSuccess = true, 
        length,
        width,
        height,
        volume,
        weight;    

    APP.placesCollection.each(function(model) { 
        length = $('#length_' + model.get('idPlace')).val();
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
        }            
     
    }, this ); 

    console.log('validationSuccess', validationSuccess )    

    //$('#paymentModal').modal('show');
  },

  addPlace: function() { 
    this.place = new APP.PlaceView(true);   
    this._addPlaceEl();
  }

});


