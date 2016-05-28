APP.PlaceView = Backbone.View.extend({   

  initialize: function(addPlaceBtn) {  
    var idPlace = APP.placesCollection.getNewIdPlace();

    this.model = new APP.PlaceModel({idPlace: idPlace}); 
    APP.placesCollection.add(this.model);

    this.addPlaceBtn = addPlaceBtn ? false : true;
  },

  className: 'place_unit',

  template: _.template($('#placeTpl').html()),

  render: function () {  
    this.$el.html(this.template());

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
    this.model.destroy();
  },   

});


