import React from 'react'
import { FormStyles } from '../../styles/carriera/FormStyles'
function Form() {
    return (
        <FormStyles>
            <form action="">
                <h1>COMPILA IL FORM</h1>
                <div className="div-1">
                    <div className="nome small">
                        <label htmlFor="" className='red'>NOME E COGNOME*</label>
                        <input type="text" />
                    </div>

                    <div className="email small">
                        <label htmlFor="" className='red'>EMAIL*</label>
                        <input type="text" />
                    </div>

                    <div className="tlf small">
                        <label htmlFor="" className='red'>TELEFONO*</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="div-2">
                    <h2 className='red small'>SCEGLI LA TUA CITTÀ*</h2>
                    <div className="check">
                        <input type="checkbox" name="city" />
                        <label htmlFor="" >MILANO</label>

                    </div>
                    <div className="check">
                        <input type="checkbox" name="city" />
                        <label htmlFor="">TORINO</label>

                    </div>
                    <div className="check">
                        <input type="checkbox" name="city" />
                        <label htmlFor="">TRIESTE</label>

                    </div>
                    <div className="check">
                        <input type="checkbox" name="city" />
                        <label htmlFor="">UDINE</label>

                    </div>
                </div>

                <div className="div-3">
                    <h2 className='red small'>DESCRIVI LE TUE COMPETENZE*</h2>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>

                <div className="div-4">
                    <input type="checkbox" name="conditions" />
                    <p className="ultra-small">
                        Ho letto l'informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio
                        <br /> secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali n. 679/2016, GDPR.
                    </p>
                </div>
                <div className="div-5">
                    <span className="big red">INVIA</span>
                </div>
            </form>
        </FormStyles>
    )
}

export default Form