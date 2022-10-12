import React from "react";
import { FormStyles } from "../../styles/carriera/FormStyles";
function Form() {
    return (
        <FormStyles white={true}>
            <form action="">
                <h1>COMPILA IL FORM</h1>
                <div className="div-1">
                    <div className="nome small">
                        <label htmlFor="" className="red">
                            NOME E COGNOME*
                        </label>
                        <input className="small" type="text" required />
                    </div>

                    <div className="email small">
                        <label htmlFor="" className="red">
                            EMAIL*
                        </label>
                        <input className="small" type="text" required />
                    </div>

                    <div className="tlf small">
                        <label htmlFor="" className="red">
                            TELEFONO*
                        </label>
                        <input className="small" type="text" required />
                    </div>
                    <div className="city small">
                        <label htmlFor="" className="red">
                            SCEGLI LA TUA CITTÀ ITALIANA
                        </label>
                        <select className="input" required>
                            <option className="small" value="">---</option>
                            <option className="small" value="Agrigento">Agrigento</option>
                            <option className="small" value="Alessandria">Alessandria</option>
                            <option className="small" value="Ancona">Ancona</option>
                            <option className="small" value="Aosta">Aosta</option>
                            <option className="small" value="Arezzo">Arezzo</option>
                            <option className="small" value="Ascoli Piceno">Ascoli Piceno</option>
                            <option className="small" value="Asti">Asti</option>
                            <option className="small" value="Avellino">Avellino</option>
                            <option className="small" value="Bari">Bari</option>
                            <option className="small" value="Barletta-Andria-Trani">
                                Barletta-Andria-Trani
                            </option>
                            <option className="small" value="Belluno">Belluno</option>
                            <option className="small" value="Benevento">Benevento</option>
                            <option className="small" value="Bergamo">Bergamo</option>
                            <option className="small" value="Biella">Biella</option>
                            <option className="small" value="Bologna">Bologna</option>
                            <option className="small" value="Bolzano">Bolzano</option>
                            <option className="small" value="Brescia">Brescia</option>
                            <option className="small" value="Brindisi">Brindisi</option>
                            <option className="small" value="Cagliari">Cagliari</option>
                            <option className="small" value="Caltanissetta">Caltanissetta</option>
                            <option className="small" value="Campobasso">Campobasso</option>
                            <option className="small" value="Carbonia-Iglesias">Carbonia-Iglesias</option>
                            <option className="small" value="Caserta">Caserta</option>
                            <option className="small" value="Catania">Catania</option>
                            <option className="small" value="Catanzaro">Catanzaro</option>
                            <option className="small" value="Chieti">Chieti</option>
                            <option className="small" value="Como">Como</option>
                            <option className="small" value="Cosenza">Cosenza</option>
                            <option className="small" value="Cremona">Cremona</option>
                            <option className="small" value="Crotone">Crotone</option>
                            <option className="small" value="Cuneo">Cuneo</option>
                            <option className="small" value="Enna">Enna</option>
                            <option className="small" value="Fermo">Fermo</option>
                            <option className="small" value="Ferrara">Ferrara</option>
                            <option className="small" value="Firenze">Firenze</option>
                            <option className="small" value="Foggia">Foggia</option>
                            <option className="small" value="Forlì-Cesena">Forlì-Cesena</option>
                            <option className="small" value="Frosinone">Frosinone</option>
                            <option className="small" value="Genova">Genova</option>
                            <option className="small" value="Gorizia">Gorizia</option>
                            <option className="small" value="Grosseto">Grosseto</option>
                            <option className="small" value="Imperia">Imperia</option>
                            <option className="small" value="Isernia">Isernia</option>
                            <option className="small" value="La Spezia">La Spezia</option>
                            <option className="small" value="LAquila">LAquila</option>
                            <option className="small" value="Latina">Latina</option>
                            <option className="small" value="Lecce">Lecce</option>
                            <option className="small" value="Lecco">Lecco</option>
                            <option className="small" value="Livorno">Livorno</option>
                            <option className="small" value="Lodi">Lodi</option>
                            <option className="small" value="Lucca">Lucca</option>
                            <option className="small" value="Macerata">Macerata</option>
                            <option className="small" value="Mantova">Mantova</option>
                            <option className="small" value="Massa e Carrara">Massa e Carrara</option>
                            <option className="small" value="Matera">Matera</option>
                            <option className="small" value="Medio Campidano">Medio Campidano</option>
                            <option className="small" value="Messina">Messina</option>
                            <option className="small" value="Milano">Milano</option>
                            <option className="small" value="Modena">Modena</option>
                            <option className="small" value="Monza e Brianza">Monza e Brianza</option>
                            <option className="small" value="Napoli">Napoli</option>
                            <option className="small" value="Novara">Novara</option>
                            <option className="small" value="Nuoro">Nuoro</option>
                            <option className="small" value="Ogliastra">Ogliastra</option>
                            <option className="small" value="Olbia-Tempio">Olbia-Tempio</option>
                            <option className="small" value="Oristano">Oristano</option>
                            <option className="small" value="Padova">Padova</option>
                            <option className="small" value="Palermo">Palermo</option>
                            <option className="small" value="Parma">Parma</option>
                            <option className="small" value="Pavia">Pavia</option>
                            <option className="small" value="Perugia">Perugia</option>
                            <option className="small" value="Pesaro e Urbino">Pesaro e Urbino</option>
                            <option className="small" value="Pescara">Pescara</option>
                            <option className="small" value="Piacenza">Piacenza</option>
                            <option className="small" value="Pisa">Pisa</option>
                            <option className="small" value="Pistoia">Pistoia</option>
                            <option className="small" value="Pordenone">Pordenone</option>
                            <option className="small" value="Potenza">Potenza</option>
                            <option className="small" value="Prato">Prato</option>
                            <option className="small" value="Ragusa">Ragusa</option>
                            <option className="small" value="Ravenna">Ravenna</option>
                            <option className="small" value="Reggio Calabria">Reggio Calabria</option>
                            <option className="small" value="Reggio Emilia">Reggio Emilia</option>
                            <option className="small" value="Rieti">Rieti</option>
                            <option className="small" value="Rimini">Rimini</option>
                            <option className="small" value="Roma">Roma</option>
                            <option className="small" value="Rovigo">Rovigo</option>
                            <option className="small" value="Salerno">Salerno</option>
                            <option className="small" value="Sassari">Sassari</option>
                            <option className="small" value="Savona">Savona</option>
                            <option className="small" value="Siena">Siena</option>
                            <option className="small" value="Siracusa">Siracusa</option>
                            <option className="small" value="Sondrio">Sondrio</option>
                            <option className="small" value="Taranto">Taranto</option>
                            <option className="small" value="Teramo">Teramo</option>
                            <option className="small" value="Terni">Terni</option>
                            <option className="small" value="Tornino">Tornino</option>
                            <option className="small" value="Trapani">Trapani</option>
                            <option className="small" value="Trento">Trento</option>
                            <option className="small" value="Treviso">Treviso</option>
                            <option className="small" value="Trieste">Trieste</option>
                            <option className="small" value="Udine">Udine</option>
                            <option className="small" value="Varese">Varese</option>
                            <option className="small" value="Venezia">Venezia</option>
                            <option className="small" value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
                            <option className="small" value="Vercelli">Vercelli</option>
                            <option className="small" value="Verona">Verona</option>
                            <option className="small" value="Vibo Valentia">Vibo Valentia</option>
                            <option className="small" value="Vicenza">Vicenza</option>
                            <option className="small" value="Viterbo">Viterbo</option>
                        </select>
                    </div>
                    <div className="tlf small">
                        <label htmlFor="" className="red">
                            SCEGLI LA TUA CITTÀ ESTERA
                        </label>
                        <input className="small" type="text" required />
                    </div>
                    <div></div>
                </div>

                <div className="div-3">
                    <h2 className="red small">DESCRIVI LE TUE COMPETENZE*</h2>
                    <textarea className="small" name="" id="" cols={30} rows={10} required></textarea>
                </div>

                <div className="div-4">
                    <input type="checkbox" name="conditions" required />
                    <p className="ultra-small">
                        Ho letto l'informativa privacy e acconsento alla memorizzazione dei
                        miei dati nel vostro archivio
                        <br /> secondo quanto stabilito dal regolamento europeo per la
                        protezione dei dati personali n. 679/2016, GDPR.
                    </p>
                </div>
                <div className="div-5">
                    <span className="big red">INVIA</span>
                </div>
            </form>
        </FormStyles>
    );
}

export default Form;
