import React from "react";
import KitchenSection from '../images/shawama.jpg';
import KitchenSection2 from '../images/shawama_2.jpg';
import Chicken from '../images/chicken_meat.jpg';
import { FiStar } from "react-icons/fi";
const Section = () =>{
    return(
        <div className="section">
                <div className="sectionchild">
                <div className="hometxt">
                <h5>Home Kitchen</h5>
                </div>

                <div className="table">
                    <tbody>
                        <tr>
                        <td className="all">
                            <button>All</button>
                        </td>
                        <td className="button">
                            <button>Button</button>
                        </td>
                        <td className="deliver">
                            <button>Free delivery</button>
                        </td>
                        <td className="new">
                            <button>New</button>
                        </td>
                        <td className="coming">
                            <button>Coming</button>
                        </td>

                        </tr>
                    </tbody>
                </div>


                <div className="option">
                    <select>
                        <option className="option">Filters</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                            <option>Supper</option>
                            </select>
                    </div>
                </div>


                
               

                    <div className="herodetails">
                        <div className="herodetails1">
                        <img src={KitchenSection}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made pizza</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>

                            {/* kitchensection2 */}
                            <div className="herodetails2">
                        <img src={KitchenSection2}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made pizza</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>

                            {/* kitchensection3 */}
                            <div className="herodetails3">
                        <img src={Chicken}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made chicken</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>
                        
                            {/* kitchensection4 */}
                            <div className="herodetails4">
                        <img src={KitchenSection2}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made pizza</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>
                    </div>
                        
                        {/* section2 */}


                        
                    <div className="herodetails">
                        <div className="herodetails1">
                        <img src={KitchenSection}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made pizza</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>

                            {/* kitchensection2 */}
                            <div className="herodetails2">
                        <img src={KitchenSection2}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made pizza</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>

                            {/* kitchensection3 */}
                            <div className="herodetails3">
                        <img src={Chicken}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made chicken</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>
                        
                            {/* kitchensection4 */}
                            <div className="herodetails4">
                        <img src={KitchenSection2}/>
                        <div className="pizzadtl">
                           <div  className="pizzatxt">
                           <h4>Home made pizza</h4>
                           </div>
                           <div className="dollar">
                            $19
                           </div>

                        </div>

                            <div className="ratecontent">
                                    <div className="rate">
                                <FiStar size="10"/><span className="ratenmb">{20+20}</span>
                                     </div>

                                     <div className="btnadder">
                                        <div>
                                        <button>+</button>
                                        </div>
                                     </div>
                            </div>

                                <div className="addcart">
                                    <button>Add cart</button>
                                </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <button className="border border-orange-500 hover:bg-orange-500 hover:text-white btn-txt">+ Load More..</button>
                    </div>
        </div>
    )

  
}


export default Section;