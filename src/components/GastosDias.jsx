import React from 'react';

const GastosDias = ({gasto, onClose}) => {
  return (
  <div>
          <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">$ {gasto.cantidad} </span>

            <div>
            <button onClick={onClose} type="button" class="btn-close" aria-label="Close"></button>
            </div>
        </p>
    </li>
  </div>
    );
};

export default GastosDias;
