APP.PaymentModalView = Backbone.View.extend({     

  initialize: function() {
    var elem = this.render().el;
    $('body').append(elem);    
  },     

  className: 'payment_modal_box',

  template: _.template($('#paymentModalTpl').html()),

  render: function (data) { console.log(this.template)
    this.$el.html(this.template(data));
    return this;
  }

});


