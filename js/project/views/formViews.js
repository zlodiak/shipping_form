APP.CalcView = Backbone.View.extend({  

  initialize: function() {                        
    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {  
    this.$el.html(this.template());    
    return this;
  },

  events:{
    'click #submitBtn' : 'submit'
  },

  submit: function() { 

  }

});


