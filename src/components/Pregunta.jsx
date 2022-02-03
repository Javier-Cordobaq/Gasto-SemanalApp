import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error from './Error';
import '../Styles/Pregunta.css'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        }

        // si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>

            { error ? <Error mensaje="El Presupuesto es Incorrecto" />  : null }

            <form className='cont-form' onSubmit={agregarPresupuesto}>

            <h1>Gasto Semanal</h1>
            <h2>Coloca tu presupuesto</h2>

                <input
                    type="number"
                    className="presupuesto"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <div className='botones'>
                <input 
                    type="submit"
                    className="btn-p"
                    value="Definir Presupuesto"
                />
                 <Link to='/App'>
                <button className="btn-p">Continuar</button>
                </Link>
                </div>
                
                
            </form>
        </Fragment>

     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;