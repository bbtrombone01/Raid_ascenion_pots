import React from "react";
import SuperiorArcanePotionImage from "../images/Superior_Arcane_Potion-icon.jpeg"
import GreaterArcanePotionImage from "../images/Greater_Arcane_Potion-icon.jpeg"
import LesserArcanePotionImage from "../images/Lesser_Arcane_Potion-icon.jpeg"
import SuperiorForcePotionImage from "../images/Superior_Force_Potion-icon.png"
import GreaterForcePotionImage from "../images/Greater_Force_Potion-icon.png"
import LesserForcePotionImage from "../images/Lesser_Force_Potion-icon.png"
import SuperiorMagicPotionImage from "../images/Superior_Magic_Potion-icon.png" 
import GreaterMagicPotionImage from "../images/Greater_Magic_Potion-icon.png"
import LesserMagicPotionImage from "../images/Lesser_Magic_Potion-icon.png"
import SuperiorSpiritPotionImage from "../images/Superior_Spirit_Potion-icon.png"
import GreaterSpiritPotionImage from "../images/Greater_Spirit_Potion-icon.png"
import LesserSpiritPotionImage from "../images/Lesser_Spirit_Potion-icon.png"
import SuperiorVoidPotionImage from "../images/Superior_Void_Potion-icon.png"
import GreaterVoidPotionImage from "../images/Greater_Void_Potion-icon.jpeg"
import LesserVoidPotionImage from "../images/Lesser_Void_Potion-icon.jpeg"
import {useSelector} from "react-redux"

function TestPoitonTable (){

    let testState = useSelector((state)=> state.potionCountReducer)

    return <table className="poitonOutputTable">
                <tr className="testWidth"> 
                    <th>Superior potions</th>
                    <th>greater potions</th>
                    <th>lesser potions</th>
                </tr>
                <tr className="testWidth">
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={SuperiorArcanePotionImage} alt="test"/>
                        <br />
                        {testState["Superior Arcane"]}
                    </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage"  src={GreaterArcanePotionImage} alt=""/>
                        <br />
                        {testState["Greater Arcane"]} 
                    </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage"  src={LesserArcanePotionImage} alt =""/>
                            <br />
                            {testState["Lesser Arcane"]}
                    </td>
                </tr>
                <tr className="testWidth">
                    <td className="userOutputTdTest">
                        <img className="potionImage"  src={SuperiorForcePotionImage} alt=""/>
                        <br />
                        {testState["Superior Force"]}
                    </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={GreaterForcePotionImage} alt =""/>
                        <br />
                        {testState["Greater Force"]}
                    </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={LesserForcePotionImage} alt=""/>
                        <br/>
                        {testState["Lesser Force"]}
                    </td>
                </tr>
                <tr className="testWidth">
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={SuperiorMagicPotionImage} alt=""/>
                        <br />
                        {testState["Superior Magic"]}
                    </td>
                    <td className="userOutputTdTest"> 
                        <img className="potionImage" src={GreaterMagicPotionImage} alt=""/>
                        <br />
                        {testState["Greater Magic"]}
                        </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={LesserMagicPotionImage} alt=""/>
                        <br />
                        {testState["Lesser Magic"]}
                        </td>
                </tr>
                <tr className="testWidth">
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={SuperiorSpiritPotionImage} alt=""/>
                        <br />
                        {testState["Superior Spirit"]}
                        </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={GreaterSpiritPotionImage} alt=""/>
                        <br />
                        {testState["Greater Spirit"]}
                        </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={LesserSpiritPotionImage} alt=""/>
                        <br />
                        {testState["Lesser Spirit"]}
                        </td>
                </tr>
                <tr className="testWidth">
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={SuperiorVoidPotionImage} alt=""/>
                        <br />
                        {testState["Superior Void"]}
                    </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={GreaterVoidPotionImage} alt=""/>
                        <br />
                        {testState["Greater Void"]}
                    </td>
                    <td className="userOutputTdTest">
                        <img className="potionImage" src={LesserVoidPotionImage} alt=""/>
                        <br />
                        {testState["Lesser Void"]}
                    </td>
                </tr>
    </table>
}

 export default TestPoitonTable