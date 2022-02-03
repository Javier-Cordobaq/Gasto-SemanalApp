import React, {useState} from 'react';
import Select from 'react-select'
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';
import '../Styles/Form.css'

const Formulario = ({guardarGasto, guardarCrearGasto, Reiniciar}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const [days, actualizarDays] = useState('');

    
    // cuando el usuario agrega un gasto
    
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre, 
            cantidad, 
            days,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }

    const options = [
        { value: 'lu', label: 'Lunes' },
        { value: 'ma', label: 'Martes' },
        { value: 'mi', label: 'Miercoles' },
        { value: 'ju', label: 'Jueves' },
        { value: 'vi', label: 'Viernes' },
        { value: 'sa', label: 'Sabado' },
        { value: 'do', label: 'Domingo' },
    ];

    const onDropChange = (value) => {
        actualizarDays(value);
    }

    return (
        
        <form className='form-1'
            onSubmit={agregarGasto}
        >
            <p>Agrega tus gastos</p>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null }


            <div className="cont-inputs">

                <div className='cont-inputs'>
                    <h4>Nombre Gasto</h4>
                </div>
                <div className='input-cont'>
                    <input className='form-input'
                        type="text"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>

            </div>

            <div className='cantday'>

                <div className="cont-inputs">
                    <div>
                        <h4>Cantidad Gasto</h4>
                    </div>
                        <div className='input-cont'>
                            <input className='form-input'
                                type="number"
                                placeholder="Ej. 300"
                                value={cantidad}
                                onChange={e => guardarCantidad( parseInt( e.target.value, 10 ) )}
                            />
                        </div>
                </div>


                <div className='input-cont'>
                    <div>
                        <h4>Día</h4>
                    </div>
                        <div className='cont-s'>
                            <Select  className='select' options={options} onChange={onDropChange} />
                        </div>
                </div>

            </div>

            <button type="sumbit" className="btn-agregar">Agregar Gasto</button>

            <button onClick={Reiniciar} class="btn-agregar">Reiniciar presupuesto</button>

        </form>

        

     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;