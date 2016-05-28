APP.PlaceView = Backbone.View.extend({   

  initialize: function(addPlaceBtn) {      
    this.model = new APP.PlaceModel(); 
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
  } 

});


