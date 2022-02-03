import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Swal from 'sweetalert2'
import DaysList from './components/DaysList'
import Nav from './components/Nav'
import { Route } from 'react-router-dom'

function App() {

  // definir el state

  /* 1 */ const [ presupuesto, guardarPresupuesto] = useState(0);
  /* 2 */ const [ restante, guardarRestante] = useState(0);
  /* 3 */ const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  /* 4 */ const [ gastos, guardarGastos] = useState([]);
  /* 5 */ const [ gasto, guardarGasto ] = useState({});
  /* 6 */ const [ suma, guardarSuma] = useState({});
  /* 7 */ const [ creargasto, guardarCrearGasto ] = useState(false);
  /* 8 */ const [ borrargasto, guardarBorrarGasto ] = useState(false);
  /* 9 */ const [ lunes, guardarLunes ] = useState([]);
  /* 10 */ const [ martes, guardarMartes ] = useState([]);
  /* 11 */ const [ miercoles, guardarMiercoles ] = useState([]);
  /* 12 */ const [ jueves, guardarJueves ] = useState([]);
  /* 13 */ const [ viernes, guardarViernes ] = useState([]);
  /* 14 */ const [ sabado, guardarSabado ] = useState([]);
  /* 15 */ const [ domingo, guardarDomingo ] = useState([]);

  function onClose(id) {
    guardarSuma(gastos.filter(c => c.id === id))
    guardarGastos(oldCities => oldCities.filter(c => c.id !== id));
    guardarLunes(oldCities => oldCities.filter(c => c.id !== id));
    guardarMartes(oldCities => oldCities.filter(c => c.id !== id));
    guardarMiercoles(oldCities => oldCities.filter(c => c.id !== id));
    guardarJueves(oldCities => oldCities.filter(c => c.id !== id));
    guardarViernes(oldCities => oldCities.filter(c => c.id !== id));
    guardarSabado(oldCities => oldCities.filter(c => c.id !== id));
    guardarDomingo(oldCities => oldCities.filter(c => c.id !== id));
    guardarBorrarGasto(true)
  }

  useEffect(() => {

    if(borrargasto){
      const presupuestoSuma = (Number(restante) + suma[0].cantidad);
      guardarRestante(presupuestoSuma);
    }
    
    guardarBorrarGasto(false)

  }, [suma])   
  
 /*  function Suma (){
    setTimeout(() => {
      const presupuestoSuma = (Number(restante) + suma[0].cantidad);
      guardarRestante(presupuestoSuma);
    }, 1000);
  } */

  function Reiniciar () {
    actualizarPregunta(true)
    guardarPresupuesto(0)
    guardarRestante(0)
    guardarGasto({})
    guardarGastos([])
  }

  if (restante < 0){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ya no tienes dinero!',
    })
  }

  useEffect(() => {
  
      if(creargasto) {

          //Agregar el gasto a su respectivo día

          if(gasto.days.label === "Lunes"){
            guardarLunes([...lunes, gasto])
          }
          if(gasto.days.label === "Martes"){
            guardarMartes([...martes, gasto])
          }
          if(gasto.days.label === "Miercoles"){
            guardarMiercoles([...miercoles, gasto])
          }
          if(gasto.days.label === "Jueves"){
            guardarJueves([...jueves, gasto])
          }
          if(gasto.days.label === "Viernes"){
            guardarViernes([...viernes, gasto])
          }
          if(gasto.days.label === "Sabado"){
            guardarSabado([...sabado, gasto])
          }
          if(gasto.days.label === "Domingo"){
            guardarDomingo([...domingo, gasto])
          }

          // agrega el nuevo presupuesto

          guardarGastos([...gastos, gasto]);

          // resta del presupuesto actual

          const presupuestoRestante = ([restante - gasto.cantidad]);
          guardarRestante(presupuestoRestante);

          // Resetear a false
          guardarCrearGasto(false);
      }
  }, [gasto, creargasto, gastos, restante, presupuesto]);

  return (
    <div className="contenedor-todo">

    <Route path='/'>
      <div>
        <Nav/> 
      </div>
    </Route>

            <div className="contenido-principal">
             
                  <Route exact path='/'>
                    <div className='row m-0 p-0'>            
                      <div className='pregunta col p-0 m-0'>
                        <Pregunta 
                          guardarPresupuesto={guardarPresupuesto}
                          guardarRestante={guardarRestante}
                          actualizarPregunta={actualizarPregunta}
                        />
                      </div>
                    </div>
                  </Route>
               
                  <Route exact path='/App'>

                        <div className='cont-gastos row p-0 m-0'>

                            <div className="form col-5">
                                <Formulario 
                                  guardarGasto={guardarGasto}
                                  guardarCrearGasto={guardarCrearGasto}
                                  guardarLunes={guardarLunes}
                                  Reiniciar={Reiniciar}
                                />
                            </div>

                              <div className="listado col">
                                  <Listado
                                      gastos={gastos}
                                      onClose={onClose}
                                  />

                                  <ControlPresupuesto 
                                      presupuesto={presupuesto}
                                      restante={restante}
                                    />
                              </div>
                          </div>
                  </Route>

            <Route exact path='/list'>
              <div className='row m-0 p-0'>
                  <div className='col p-0 m-0'>
                    <DaysList 
                    lunes={lunes}
                    martes={martes}
                    miercoles={miercoles}
                    jueves={jueves}
                    viernes={viernes}
                    sabado={sabado}
                    domingo ={domingo}
                    onClose={onClose}
                    /> 
                  </div>
               </div>
            </Route>

            </div>

    </div>
  );
}

export default App;