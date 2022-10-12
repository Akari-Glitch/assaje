import React from 'react'
import { FormStyles } from '../../styles/carriera/FormStyles'
function Form() {
    return (
        <FormStyles white={false}>
            <form action="">
                <h1>COMPILA IL FORM</h1>
                <div className="div-1">
                    <div className="nome small">
                        <label htmlFor="" className='red'>NOME E COGNOME*</label>
                        <input className="small" type="text" required />
                    </div>

                    <div className="email small">
                        <label htmlFor="" className='red'>EMAIL*</label>
                        <input className="small" type="text" required />
                    </div>

                    <div className="tlf small">
                        <label htmlFor="" className='red'>TELEFONO*</label>
                        <input className="small" type="text" required />
                    </div>
                </div>
                <div className="div-2">
                    <h2 className='red small'>SCEGLI LA TUA CITTÀ*</h2>
                    <div className="check">
                        <input type="checkbox" name="city" required />
                        <label htmlFor="" >MILANO</label>

                    </div>
                    <div className="check">
                        <input type="checkbox" name="city" required />
                        <label htmlFor="">TORINO</label>

                    </div>
                    <div className="check">
                        <input type="checkbox" name="city" required />
                        <label htmlFor="">TRIESTE</label>

                    </div>
                    <div className="check">
                        <input type="checkbox" name="city" required />
                        <label htmlFor="">UDINE</label>

                    </div>
                </div>

                <div className="div-3">
                    <h2 className='red small'>DESCRIVI LE TUE COMPETENZE*</h2>
                    <textarea className="small" name="" id="" cols={30} rows={10} required></textarea>
                </div>

                <div className="div-4">
                    <input type="checkbox" name="conditions" required />
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