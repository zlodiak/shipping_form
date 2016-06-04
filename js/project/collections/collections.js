APP.PlacesModelsCollection = Backbone.Collection.extend({

  model: APP.PlaceModel,

  getNewIdPlace: function() {
    var idPlaceMax = 0, 
        idPlaceCurrent;

    APP.placesModelsCollection.each(function(model) { 
      idPlaceCurrent = parseInt(model.get('idPlace'));
      if(idPlaceCurrent >= idPlaceMax) { idPlaceMax = idPlaceCurrent + 1 };
    }, this ); 

    return idPlaceMax;
  }

});