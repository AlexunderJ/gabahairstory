import React, { Component } from 'react'
import './Cennik.sass'
export default class Cennik extends Component {
    render() {
        return (
            <div>
            
        <div className="title">Cennik</div>
        <div className="cennik">
            <table id="ceny">
                <tr>
                    <th></th>
                    <th>
                        <div>Gaba</div>
                        <div>Natalia</div>
                        <div>Sandra</div>
                    </th>
                    <th>Angela</th>
                  
                </tr>
                <tr>
                    <td>Strzyżenie damskie<span>(1h)</span></td>
                    <td>300</td>
                    <td>200</td>
                   
                </tr>
                <tr>
                    <td>Strzyżenie męskie<span>(1h)</span></td>
                    <td>220</td>
                    <td>140</td>
                    
                </tr>
                <tr>
                    <td>Czesanie, modelowanie<span>(1h)</span></td>
                    <td>220</td>
                    <td>150</td>
                    
                </tr>
                <tr>
                    <td className="noBorder">Farbowanie jednolite z cięciem<span>(2h)</span></td>
                    <td className="noBorder">450 - 600</td>
                    <td className="noBorder">350 - 450</td>
                   
                </tr>
                <tr>
                    <td>bez cięcia<span>(1,5 -2h)</span></td>
                    <td>350 - 500</td>
                    <td>300 - 400</td>                   
                </tr>
                <tr>
                    <td className="noBorder">Farbowanie Refleks z cięciem<span>(3h)</span></td>
                    <td className="noBorder">730 - 830</td>
                    <td className="noBorder">450 - 600</td>                

                </tr>
                <tr>
                    <td> bez cięcia<span>(2,5 - 3h)</span></td>
                    <td>630 - 730</td>
                    <td>400 - 500</td>                

                </tr>
                <tr>
                    <td className="noBorder">Refleks g. / baleyage/airtouch z cięciem
                        <span>(3h)</span></td>
                    <td className="noBorder">830 - 930</td>
                    <td className="noBorder">630 - 730</td>                
                </tr>
                <tr>
                    <td>bez cięcia
                        <span>(3h)</span></td>
                    <td>730 - 830</td>
                    <td>530 - 630</td>                
                </tr>
                <tr>
                    <td>Metamorfoza dekoloryzacja<span>(7h)</span></td>
                    <td>1000 - 1400</td>
                    <td>600 - 900</td>
                </tr>
                <tr>
                    <td>Olaplex do usługi<span></span></td>
                    <td>150 </td>
                    <td>150</td>
                </tr>
            </table>
        </div>
        </div>
    
            
        )
    }
}
