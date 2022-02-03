import React from 'react';
import GastosDias from './GastosDias';
import '../Styles/DaysList.css'

const DaysList = ({lunes, martes, miercoles, jueves, viernes, sabado, domingo, onClose}) => {
  return (
  <div className="gasto-realizados">

    <h2>Listado gastos diarios</h2>
    
    <div className='contenedor-days'>

      <div className='day-cont'>
      <h4>Lunes</h4>
        {lunes.map(gasto => (
            <GastosDias
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

      <div className='day-cont'>
      <h4>Martes</h4>
        {martes.map(gasto => (
            <GastosDias
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

      <div className='day-cont'>
      <h4>Miercoles</h4>
        {miercoles.map(gasto => (
            <GastosDias 
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

      <div className='day-cont'>
      <h4>Jueves</h4>
        {jueves.map(gasto => (
            <GastosDias 
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

      <div className='day-cont'>
      <h4>Viernes</h4>
        {viernes.map(gasto => (
            <GastosDias
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

      <div className='day-cont'>
      <h4>Sabado</h4>
        {sabado.map(gasto => (
            <GastosDias
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

      <div className='day-cont'>
      <h4>Domingo</h4>
        {domingo.map(gasto => (
            <GastosDias
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
      </div>

    </div>
       
    </div>
  );
};

export default DaysList;