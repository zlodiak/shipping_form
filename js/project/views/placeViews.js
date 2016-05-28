APP.PlaceView = Backbone.View.extend({   

  initialize: function() {      
    this.model = new APP.PlaceModel(); 
  },

  className: 'place_unit',

  template: _.template($('#placeTpl').html()),

  render: function () {  
    this.$el.html(this.template());
    return this;
  } 

});


