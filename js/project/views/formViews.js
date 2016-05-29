APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesCollection = new APP.PlacesCollection();  
    this.place = new APP.PlaceView(false);     

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
        data = this.$el.find('#shippForm').serializeObject();

    console.log(data, 'data')

    //this.model.set(data);    

    APP.placesCollection.each(function(model) { console.log(model, 'model')
        for(attr in model.attributes) {   
            if((attr != 'idPlace') && (attr != 'hardBox') && (attr != 'overCargo')) {   
                console.log(model.isValid(attr), attr)

                if(!model.isValid(attr)) {                  
                    validationSuccess = false;
                };
            };            
        }        
    }, this ); 

    console.log(validationSuccess)

    //$('#paymentModal').modal('show');
  },

  addPlace: function() { 
    this.place = new APP.PlaceView(true);   
    this._addPlaceEl();
  }

});


