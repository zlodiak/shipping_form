APP.PlaceView = Backbone.View.extend({   

  initialize: function(addPlaceBtn) {      
    this.model = new APP.PlaceModel(); 
    this.addPlaceBtn = addPlaceBtn ? true : false;
  },

  className: 'place_unit',

  template: _.template($('#placeTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    this.$el.find('.addPlaceBtn').removeClass('hide');
    return this;
  } 

});


