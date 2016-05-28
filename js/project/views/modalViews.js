APP.PaymentModalView = Backbone.View.extend({     

  el: '#paymentModalBox',

  template: _.template($('#paymentModalTpl').html()),

  render: function (data) { 
    this.$el.html(this.template(data));
    return this;
  }

});


