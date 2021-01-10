import React from 'react'
import './Modal.sass'

export default function Modal() {
    return (
        <div>
        <div>
             <div id="backdrop">
    </div>
    <div className="modal" id="covid-modal">
        <img id="logo_covid" src="./img/logo_covid.png" alt="logo" />
        <strong>#Bądźmyrazembezpieczni</strong>


       <p> Jeżeli jesteś umówiony do nas na wizytę zapoznaj się z zaleceniami Ministerstwa Rozwoju w konsultacji z GIS:</p>                
        
       <ol> 
       <li> Na wizytę przyjdź punktualnie, poczekaj przed wejściem i daj znać dzwonkiem żebyśmy wiedzieli, że już jesteś. Wtedy będziemy mogli przygotować Cię odpowiednio do bezpiecznej wizyty.</li>
        
       <li>Przed wizytą wykonujemy pomiar temperatury. Informujemy że wizyta nie zostanie zrealizowana jeżeli termometr wskaże temperaturę 37,1 °C lub wyższą (maksymalna dozwolona temperatura to 37 °C uwzględniając 2 kreskowy błąd pomiaru).</li>
        
        <li> W czasie pobytu na terenie salonu ubierz maskę i rękawiczki. Utylizacja rękawiczek i maseczki pozostaje  po stronie klienta.</li>
        
        <li> Na terenie salonu obowiązuje bezwzględny zakaz używania telefonu komórkowego.</li>
        
         <li> Poczekalnie są wyłączone z użytku dlatego niestety nie powinieneś przychodzić z os. towarzyszącą.</li>
        
         <li> Zachęcamy do pozostawienia okryć wierzchnich poza salonem (w domu/samochodzie) o ile pogoda na to pozwoli:).</li>
         <li> W okresie stanu epidemicznego nie serwujemy kawy i herbaty, ale zachęcamy Cię do odwiedzenia pobliskich kawiarni.</li>
        
         <li>Zachęcamy do płatności bezgotówkowych.</li>
        
         <li> Staramy się unikać kontaktu z innymi klientami (zachowanie 2m odległości).</li>
        <li>Po każdorazowym wstaniu od stanowiska zaleca się dezynfekować ręce (dozwolona jest dezynfekcja rąk w rękawiczkach).</li>
        
    </ol>
    <img id="viris" src="./img/covid_Virus.png" alt="virus" />
        
        
        
        
    <strong>
    #staysafe
    </strong>
        
        
    <p className="przypis">Wytyczne dla funkcjonowania salonów fryzjerskich w trakcie pandemii SARS-CoV-2 
    Ministerstwa Rozwoju w konsultacji z GIS, 13.05.2020 r.
    </p>

<div id="close_covid" className="button">OK</div>
        </div>
        </div>
        </div>
        
    )
}
