import { React } from 'react';

const Days = () => {

  return <div>
      
<div class="accordion" id="accordion">

    <div class="accordion-item">
        <h2 className="bt accordion-header" id="panelsStayOpen-headingOne">
        <button class="bt accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Lunes   
        </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div className="prueba accordion-body">
        <strong>Listado Lunes</strong> 
        </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="bt accordion-header" id="panelsStayOpen-headingTwo">
        <button class="bt accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Martes
        </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        <div class="prueba accordion-body">
            <strong>Listado Martes</strong> 
        </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="bt accordion-header" id="panelsStayOpen-headingTres">
        <button class="bt accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTres" aria-expanded="false" aria-controls="panelsStayOpen-collapseTres">
            Miercoles
        </button>
        </h2>
        <div id="panelsStayOpen-collapseTres" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTres">
        <div class="prueba accordion-body">
            <strong>Listado Miercoles</strong> 
        </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="bt accordion-header" id="panelsStayOpen-headingFour">
        <button class="bt accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            Jueves
        </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
        <div class="prueba accordion-body">
            <strong>Listado Jueves</strong> 
        </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="bt accordion-header" id="panelsStayOpen-headingThree">
        <button class="bt accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Viernes
        </button>
        </h2>
        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div class="prueba accordion-body">
            <strong>Listado Jueves</strong>
        </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="bt accordion-header" id="panelsStayOpen-headingSb">
        <button class="bt accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSb" aria-expanded="false" aria-controls="panelsStayOpen-collapseSb">
            Sabado
        </button>
        </h2>
        <div id="panelsStayOpen-collapseSb" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSb">
        <div class="prueba accordion-body">
            <strong>Listado Sabado</strong>
        </div>
        </div>
    </div>

    <div class="bt accordion-item">
        <h2 class="bt accordion-header" id="panelsStayOpen-headingDm">
        <button class="bt accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseDm" aria-expanded="false" aria-controls="panelsStayOpen-collapseSb">
            Domingo
        </button>
        </h2>
        <div id="panelsStayOpen-collapseDm" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSb">
        <div class="prueba accordion-body">
            <strong>Listado Domingo</strong>
        </div>
        </div>
    </div>


</div>

  </div>;
};

export default Days;
