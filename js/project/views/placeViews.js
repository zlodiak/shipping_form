APP.PlaceView = Backbone.View.extend({   

  initialize: function(addPlaceBtn) {  
    var idPlace =     

    this.model = new APP.PlaceModel(); 
    APP.placesCollection.add(this.model);
    console.log(APP.placesCollection)

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

    console.log(APP.placesCollection)
  },   

});


