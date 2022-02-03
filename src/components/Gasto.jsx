import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto, onClose}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">$ {gasto.cantidad} </span>

            {gasto.days.label}

            <div>
            <button onClick={onClose} type="button" class="btn-close" aria-label="Close"></button>
            </div>
        </p>
    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;