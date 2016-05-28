<script type="text/template" id="calcTpl">
  <form class="container" id="shippForm">
    <div class="row">
      <div class="col-xs-12"><h1>Расчет стоимости доставки</h1></div>
    </div>

    <div class="row places_labels_box" id="placesLabelsBox">
      <div class="col-xs-1">Длина, м</div>
      <div class="col-xs-1">Ширина, м</div>
      <div class="col-xs-1">Высота, м</div>
      <div class="col-xs-1">Объем, м<sup>3</sup></div>
      <div class="col-xs-1">Вес, кг</div>
      <div class="col-xs-2">Груз негабаритный</div>
      <div class="col-xs-2">Требуется Ж/У </div>
      <div class="col-xs-3"></div>
    </div> 

    <div class="places_area" id="placesArea"></div>   

    <div class="row" id="cargoValuesBox">
      <div class="col-xs-12">
        <div class="btn btn-default pull-right" id="addPlaceBtn">Добавить место</div>
      </div>
    </div>             

    <div class="row" id="submitBox">
      <div class="col-xs-12">
        <div class="btn btn-primary" id="submitBtn">Рассчитать</div>
      </div>
    </div>        
  </form>
</script>


<script type="text/template" id="placeTpl">
  <div class="row">
    <div class="col-xs-1"><input type="text" class="form-control"></div>
    <div class="col-xs-1"><input type="text" class="form-control"></div>
    <div class="col-xs-1"><input type="text" class="form-control"></div>
    <div class="col-xs-1"><input type="text" class="form-control"></div>
    <div class="col-xs-1"><input type="text" class="form-control"></div>
    <div class="col-xs-2"><input type="checkbox"></div>
    <div class="col-xs-2"><input type="checkbox"></div>
    <div class="col-xs-3 del_place_box hide">
      <div class="btn btn-danger btn-xs pull-right delete_place_btn">Удалить место</div>
    </div>
  </div>   
</script>