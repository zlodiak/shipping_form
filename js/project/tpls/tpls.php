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
    <div class="col-xs-1 form-group"><input type="text" class="form-control" name="length" id="length_<%= idPlace %>"></div>
    <div class="col-xs-1 form-group"><input type="text" class="form-control" name="width" id="width_<%= idPlace %>"></div>
    <div class="col-xs-1 form-group"><input type="text" class="form-control" name="height" id="height_<%= idPlace %>"></div>
    <div class="col-xs-1 form-group"><input type="text" class="form-control" name="volume" id="volume_<%= idPlace %>"></div>
    <div class="col-xs-1 form-group"><input type="text" class="form-control" name="weight" id="weight_<%= idPlace %>"></div>
    <div class="col-xs-2 form-group"><input type="checkbox" name="over_cargo" id="over_cargo_<%= idPlace %>"></div>
    <div class="col-xs-2 form-group"><input type="checkbox" name="hard_box" id="hard_box_<%= idPlace %>"></div>
    <div class="col-xs-3 del_place_box hide">
      <div class="btn btn-danger btn-xs pull-right delete_place_btn">Удалить место</div>
    </div>
  </div>   
</script>


<script type="text/template" id="modalPositionTpl">
  <table class="position">
    <caption>Груз №<%= positionNum %></caption>

    <tbody>
      <tr><td>Длина: </td><td><%= line.length %></td></tr>
      <tr><td>Ширина: </td><td><%= line.width %></td></tr>
      <tr><td>Высота: </td><td><%= line.height %></td></tr>
      <tr><td>Объём: </td><td><%= line.volume %></td></tr>
      <tr><td>Вес: </td><td><%= line.weight %></td></tr>
    </tbody>
  </table>
</script>


<script type="text/template" id="paymentModalTpl">
  <!-- Modal payment -->
  <div class="modal fade payment_modal" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <btn type="btn" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></btn>
              <h4 class="modal-title" id="paymentLabel">Итого</h4>
            </div>

            <div class="modal-body" id="modalPositions"></div>

            <div class="modal-footer">
              <btn type="btn" class="btn btn-default" data-dismiss="modal">Понятно</btn>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>