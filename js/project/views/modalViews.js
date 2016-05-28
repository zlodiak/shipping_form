APP.PaymentModalView = Backbone.View.extend({     

  tagName: 'div',

  template: _.template($('#paymentModalTpl').html()),

  render: function (data) { 
    this.$el.html(this.template(data));
    return this;
  }

});


