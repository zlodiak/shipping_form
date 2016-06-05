APP.PlaceView = Backbone.View.extend({   

  initialize: function(addPlaceBtn) {  
    this.idPlace = APP.placesModelsCollection.getNewIdPlace();

    this.model = new APP.PlaceModel({idPlace: this.idPlace}); 
    APP.placesModelsCollection.add(this.model);

    Backbone.Validation.bind(this);

    this.addPlaceBtn = addPlaceBtn ? false : true;
  },

  className: 'place_unit',

  template: _.template($('#placeTpl').html()),

  render: function () {  
    this.$el.html(this.template({idPlace: this.idPlace}));
    this.$el.attr('id', 'placeUnit_' + this.idPlace);

    if(this.addPlaceBtn == false) {
      this.$el.find('.del_place_box').removeClass('hide');
    };
    
    return this;
  }, 

  events:{
    'click .delete_place_btn' : 'delPlace'
  },

  delPlace: function() { 
    this.$el.find('.del_place_box').closest('.place_unit').remove();
    console.log(this.model, APP.placesViewsCollection)
    console.log(this.model.get('idPlace'), 'idp this')

    delete APP.placesViewsCollection[this.model.get('idPlace')];
    this.model.destroy()
  },   

  validate: function() {  
    var validationSuccess = true, 
        length =  this.$el.find("input[name='length']").val();
        width =   this.$el.find("input[name='width']").val();
        height =  this.$el.find("input[name='height']").val();
        volume =  this.$el.find("input[name='volume']").val();
        weight =  this.$el.find("input[name='weight']").val();

    this.model.set({
        length: length,
        width: width,
        height: height,
        volume: volume,
        weight: weight
    });

    for(attr in this.model.attributes) {   
      if((attr != 'idPlace') && (attr != 'hardBox') && (attr != 'overCargo')) {   
        if(!this.model.isValid(attr)) {                  
          validationSuccess = false;
        };
      };            
    };

    return validationSuccess; 
  }, 

  getFormData: function() {  
    var length =  this.$el.find("input[name='length']").val(),
        width =   this.$el.find("input[name='width']").val(),
        height =  this.$el.find("input[name='height']").val(),
        volume =  this.$el.find("input[name='volume']").val(),
        weight =  this.$el.find("input[name='weight']").val(),
        over_cargo =  this.$el.find("input[name='over_cargo']").prop('checked') ? 'Да' : 'Нет',
        hard_box =    this.$el.find("input[name='hard_box']").prop('checked') ? 'Да' : 'Нет';

    var formData = {
      length: length,
      width: width,
      height: height,
      volume: volume,
      weight: weight,
      over_cargo: over_cargo,
      hard_box: hard_box
    };

    return formData;
  }

});


