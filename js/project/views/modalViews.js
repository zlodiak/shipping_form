APP.PaymentModalView = Backbone.View.extend({     

  initialize: function(formData) {  
    var elem = this.render().el;

    $('#modalsBox').html(elem); 

    this.formData = formData;

    this.render();
  },     

  className: 'payment_modal_box',

  template: _.template($('#paymentModalTpl').html()),

  render: function () { 
    var positionNum = 1;

    this.$el.html(this.template());

    this.$('#modalPositions').empty();

    _.each(this.formData, function(line) {
      var modalPositionView = new APP.ModalPositionView();

      this.$('#modalPositions').append(modalPositionView.render(line, positionNum).el);
      positionNum++;
    });              

    return this;
  }

});


APP.ModalPositionView = Backbone.View.extend({     

  className: 'modal_position',

  template: _.template($('#modalPositionTpl').html()),

  render: function (line, positionNum) { 
    this.$el.html(this.template({
      line: line,
      positionNum: positionNum
    }));

    return this;
  }

});



