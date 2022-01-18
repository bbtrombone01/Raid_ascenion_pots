import React from "react";
import ErrorHandling from "./ErrorHandling";
import {useSelector} from "react-redux"

function TestPoitonTable (){

    let testState = useSelector((state)=> state.potionCountReducer)

    return <div>
        <table className="poitonOutputTable">
                    <tr className="testWidth"> 
                        <th>Superior potions</th>
                        <th>greater potions</th>
                        <th>lesser potions</th>
                    </tr>
                    <tr className="testWidth">
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Superior_Arcane_Potion-icon.jpeg"} alt="test"/>
                            <br />
                            {testState["Superior Arcane"]}
                        </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage"  src={process.env.PUBLIC_URL + "/images/Greater_Arcane_Potion-icon.jpeg"} alt=""/>
                            <br />
                            {testState["Greater Arcane"]} 
                        </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage"  src={process.env.PUBLIC_URL + "/images/Lesser_Arcane_Potion-icon.jpeg"} alt =""/>
                                <br />
                                {testState["Lesser Arcane"]}
                        </td>
                    </tr>
                    <tr className="testWidth">
                        <td className="userOutputTdTest">
                            <img className="potionImage"  src={process.env.PUBLIC_URL + "/images/Superior_Force_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Superior Force"]}
                        </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Greater_Force_Potion-icon.png"} alt =""/>
                            <br />
                            {testState["Greater Force"]}
                        </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Lesser_Force_Potion-icon.png"} alt=""/>
                            <br/>
                            {testState["Lesser Force"]}
                        </td>
                    </tr>
                    <tr className="testWidth">
                        <td className="userOutputTdTest">
                        <img className="potionImage"  src={process.env.PUBLIC_URL + "/images/Superior_Magic_Potion-icon.png"} alt =""/>
                            <br />
                            {testState["Superior Magic"]}
                        </td>
                        <td className="userOutputTdTest"> 
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Greater_Magic_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Greater Magic"]}
                            </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Lesser_Magic_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Lesser Magic"]}
                            </td>
                    </tr>
                    <tr className="testWidth">
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Superior_Spirit_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Superior Spirit"]}
                            </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Greater_Spirit_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Greater Spirit"]}
                            </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Lesser_Spirit_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Lesser Spirit"]}
                            </td>
                    </tr>
                    <tr className="testWidth">
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Superior_Void_Potion-icon.png"} alt=""/>
                            <br />
                            {testState["Superior Void"]}
                        </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Greater_Void_Potion-icon.jpeg"} alt=""/>
                            <br />
                            {testState["Greater Void"]}
                        </td>
                        <td className="userOutputTdTest">
                            <img className="potionImage" src={process.env.PUBLIC_URL + "/images/Lesser_Void_Potion-icon.jpeg"} alt=""/>
                            <br />
                            {testState["Lesser Void"]}
                        </td>
                    </tr>
        </table>
    <ErrorHandling />
    </div>
}

 export default TestPoitonTable