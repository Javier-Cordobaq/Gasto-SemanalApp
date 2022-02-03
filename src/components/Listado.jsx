import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos, onClose}) => ( 
    
    <div className="gastos-realizados">
        <h2>Listado</h2>
        <div className='columnas'>
        <h4>Nombre</h4>
        <h4>Gasto</h4>
        <h4>Día</h4>
        </div>

        {gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
                onClose={() => onClose(gasto.id)}
            />
        ))}
    </div>
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;