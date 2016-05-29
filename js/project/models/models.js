APP.PlaceModel = Backbone.Model.extend({

  defaults: {
    idPlace: undefined,
    length: undefined,
    width: undefined,
    height: undefined,
    volume: undefined,
    weight: undefined,
    overCargo: undefined,
    hardBox: undefined         
  }, 

  validation: {

    length: [ 
              { required: true, msg: 'Поле не может быть пустым' },
              { pattern: 'number', msg: 'Введите число' },
              { pattern: /^[0-9]\d*(\.\d+)?$/, msg: 'Введите положительное число' },
              { pattern: /^[1-9]\d*(\.\d+)?$/, msg: 'Число не может быть нулём' }
            ],     

    width:  [ 
              { required: true, msg: 'Поле не может быть пустым' },
              { pattern: 'number', msg: 'Введите число' },
              { pattern: /^[0-9]\d*(\.\d+)?$/, msg: 'Введите положительное число' },
              { pattern: /^[1-9]\d*(\.\d+)?$/, msg: 'Число не может быть нулём' }
            ],    

    height: [ 
              { required: true, msg: 'Поле не может быть пустым' },
              { pattern: 'number', msg: 'Введите число' },
              { pattern: /^[0-9]\d*(\.\d+)?$/, msg: 'Введите положительное число' },
              { pattern: /^[1-9]\d*(\.\d+)?$/, msg: 'Число не может быть нулём' }
            ],    

    volume: [ 
              { required: true, msg: 'Поле не может быть пустым' },
              { pattern: 'number', msg: 'Введите число' },
              { pattern: /^[0-9]\d*(\.\d+)?$/, msg: 'Введите положительное число' },
              { pattern: /^[1-9]\d*(\.\d+)?$/, msg: 'Число не может быть нулём' }
            ],    

    weight: [ 
              { required: true, msg: 'Поле не может быть пустым' },
              { pattern: 'number', msg: 'Введите число' },
              { pattern: /^[0-9]\d*(\.\d+)?$/, msg: 'Введите положительное число' },
              { pattern: /^[1-9]\d*(\.\d+)?$/, msg: 'Число не может быть нулём' }
            ]                                    
                                                 
  }       

});

