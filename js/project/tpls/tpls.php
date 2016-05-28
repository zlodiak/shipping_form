<script type="text/template" id="calcTpl">
  <form class="container" id="shippForm">
    <div class="row">
      <div class="col-xs-12"><h1>Расчет стоимости доставки</h1></div>
    </div>

    <div class="row" id="cargoLabelsBox">
      <div class="col-xs-1">Длина, м</div>
      <div class="col-xs-1">Ширина, м</div>
      <div class="col-xs-1">Высота, м</div>
      <div class="col-xs-1">Объем, м<sup>3</sup></div>
      <div class="col-xs-1">Вес, кг</div>
      <div class="col-xs-2">Груз негабаритный</div>
      <div class="col-xs-2">Требуется Ж/У </div>
      <div class="col-xs-3"></div>
    </div> 

    <div class="row" id="cargoValuesBox">
      <div class="col-xs-1">1</div>
      <div class="col-xs-1">1</div>
      <div class="col-xs-1">1</div>
      <div class="col-xs-1">1</div>
      <div class="col-xs-1">1</div>
      <div class="col-xs-2">2</div>
      <div class="col-xs-2">2</div>
      <div class="col-xs-3">3</div>
    </div>            

    <div class="row" id="submitBox">
      <div class="col-xs-12">
        <div class="btn btn-default" id="submitBtn">Рассчитать</div>
      </div>
    </div>        
  </form>
</script>