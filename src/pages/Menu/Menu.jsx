import React, { useState } from 'react';
import DrinkModel from '../../components/DrinkModel/DrinkModel'; 
import styles from './Menu.module.css';
import Navbar from '../../components/Navbar/Navbar';
import coffeeIcon from '../../assets/coffee-cup.png';
import latteIcon from '../../assets/latte.png';
import bobaIcon from '../../assets/bubble-tea.png';
import hotbiteIcon from '../../assets/nachos.png';
import drinkingIcon from '../../assets/drinking.png';
import foodIcon from '../../assets/sandwich.png';
import seasonalIcon from '../../assets/seasonal.png';
import CoffeeModel from '../../components/DrinkModel/CoffeeModel';
import BobaModel from '../../components/DrinkModel/BobaMode';
import NuggetModel from '../../components/DrinkModel/NuggetModel';
import BeerModel from '../../components/DrinkModel/BeerModel';
import SandwichModel from '../../components/DrinkModel/SandwichModel';
import SeasonalModel from '../../components/DrinkModel/SeasonalModel';
const Menu = () => {
    const [activeIcon, setActiveIcon] = useState(coffeeIcon);

    const handleOnClick = (icon) => {
        setActiveIcon(icon);
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.menuIcons}>
                <img
                    src={coffeeIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(coffeeIcon)}
                    style={{ background: activeIcon === coffeeIcon ? "#ccc" : '' }}
                />
                <img
                    src={latteIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(latteIcon)}
                    style={{ background: activeIcon === latteIcon ? "#ccc" : '' }}
                />
                <img
                    src={bobaIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(bobaIcon)}
                    style={{ background: activeIcon === bobaIcon ? "#ccc" : '' }}
                />
                <img
                    src={hotbiteIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(hotbiteIcon)}
                    style={{ background: activeIcon === hotbiteIcon ? "#ccc" : '' }}
                />
                <img
                    src={drinkingIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(drinkingIcon)}
                    style={{ background: activeIcon === drinkingIcon ? "#ccc" : '' }}
                />
                <img
                    src={foodIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(foodIcon)}
                    style={{ background: activeIcon === foodIcon ? "#ccc" : '' }}
                />
                <img
                    src={seasonalIcon}
                    className={styles.icon}
                    onClick={() => handleOnClick(seasonalIcon)}
                    style={{ background: activeIcon === seasonalIcon ? "#ccc" : '' }}
                    />
            </div>
            <hr />
            {
                activeIcon == latteIcon && (
                    <div className={styles.drinkModelContainer}>
                        <DrinkModel />
                    </div>
                )
            }
            {
                activeIcon == coffeeIcon && (
                    <div className={styles.drinkModelContainer}>
                        <CoffeeModel />
                    </div>
                )
            }
            {
                activeIcon == bobaIcon && (
                    <div className={styles.drinkModelContainer}>
                        <BobaModel />
                    </div>
                )
            }
            {
                activeIcon == hotbiteIcon && (
                    <div className={styles.drinkModelContainer}>
                        <NuggetModel />
                    </div>
                )
            }
            {
                activeIcon == drinkingIcon && (
                    <div className={styles.drinkModelContainer}>
                        <BeerModel />
                    </div>
                )
            }
            {
                activeIcon == foodIcon && (
                    <div className={styles.drinkModelContainer}>
                        <SandwichModel />
                    </div>
                )
            }
            {
                activeIcon == seasonalIcon && (
                    <div className={styles.drinkModelContainer}>
                        <SeasonalModel />
                    </div>
                )
            }
            <div className={styles.menuList}>
                {activeIcon === latteIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>MATCHA LATTE</h3>
                            <p className={styles.pTag}>$5.25(H)/$5.75(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>HOT CHOCOLATE</h3>
                            <p className={styles.pTag}>$4.50(H)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>S'mores</h3>
                            <p className={styles.pTag}>$5.50</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>NUTELLA LATTE</h3>
                            <p className={styles.pTag}>$5.75(H)/$6.25(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CHAI</h3>
                            <p className={styles.pTag}>$5.00(H)/$5.50(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>DIRTY CHAI</h3>
                            <p className={styles.pTag}>$6.25(H)/$6.75(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>LAVENDER LATTE</h3>
                            <p className={styles.pTag}>$5.75(H)/$6.25(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ROSE LATTE</h3>
                            <p className={styles.pTag}>$5.75(H)/$6.25(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BROWN SUGAR LATTE</h3>
                            <p className={styles.pTag}>$5.75(H)/$6.25(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BUMBLEBEE LATTE</h3>
                            <p className={styles.pTag}>$6.25(H)/$6.75(C)</p>
                        </div>
                    </>
                )}

                {activeIcon === coffeeIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>LATTE</h3>
                            <p className={styles.pTag}>$4.75(H)/$5.25(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CORTADO</h3>
                            <p className={styles.pTag}>$4.25(H)/$4.75(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>DRIP COFFEE</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>S: $2.50(H)/$3.00(C)</p>
                                <p className={styles.pTag}>M: $3.00(H)/$3.50(C)</p>
                                <p className={styles.pTag}>L: $3.50(H)/$4.00(C)</p>
                            </div>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CAFE AU LAITE</h3>
                            <p className={styles.pTag}>$3.25(H)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CHAI</h3>
                            <p className={styles.pTag}>$5.00(H)/$5.50(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CAPPUCHINO</h3>
                            <p className={styles.pTag}>$4.50(H)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>MOCHA</h3>
                            <p className={styles.pTag}>$5.75(H)/$6.25(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>RED EYE</h3>
                            <p className={styles.pTag}>$4.50(H)/$4.75(C)</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>AMERICANO</h3>
                            <p className={styles.pTag}>$3.75(H)/$4.25(C)</p>
                        </div>
                    </>
                )}
                {activeIcon === bobaIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>THE OG</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.25</p>
                                <p className={styles.pTag}>Hot: $5.25</p>
                            </div>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BROWN SUGAR BOBA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.75</p>
                                <p className={styles.pTag}>Hot: $5.75</p>
                            </div>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>TARO BOBA COCONUT BOBA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.25</p>
                                <p className={styles.pTag}>Hot: $5.25</p>
                            </div>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>FRUIT GREEN/BLACK TEA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.25</p>
                            </div>                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>FRUIT BLACK TEA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.25</p>
                            </div>                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>JASMINE MILK TEA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.25</p>
                                <p className={styles.pTag}>Hot: $5.25</p>
                            </div>                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>WINTERMELON MILK TEA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>M: $4.25</p>
                                <p className={styles.pTag}>L: $5.25</p>
                                <p className={styles.pTag}>Hot: $5.25</p>
                            </div>                        
                        </div>

                    </>
                )}
                {activeIcon === hotbiteIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CHICKEN POPPER</h3>
                            <p className={styles.pTag}>$6.00</p>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>MOZZ STICKS</h3>
                            <p className={styles.pTag}>$7.00</p>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>PIGS IN A BLANKET</h3>
                            <p className={styles.pTag}>$7.00</p>


                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>TATTER TOTS</h3>
                            <p className={styles.pTag}>$5.00</p>

                         </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CHICKEN TENDERS</h3>
                            <p className={styles.pTag}>$8.00</p>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ONION RINGS</h3>
                            <p className={styles.pTag}>$5.00</p>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>FRIES</h3>
                            <p className={styles.pTag}>$5.00</p>
                       
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>SWEET POTATO FRIES</h3>
                            <p className={styles.pTag}>$5.00</p>
                       
                        </div>
                    </>
                )}
                {activeIcon === drinkingIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BABE ROSE</h3>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ARCHER ROOSE WHITE/RED</h3>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>KONA LAGER</h3>

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BLUE POINT</h3>
                         </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>JUNESHINE</h3>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>LUNAR HARD SELTZERS</h3>
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ALLAGASH WHITE</h3>                       
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>DOC CIDER</h3>                       
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>STELLA ARTOIS</h3>                       
                        </div>    
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>SHOCKTOP</h3>                       
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>FIN BACK</h3>                       
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>THREE'S BREWERY</h3>                       
                        </div>                    
                    </>
                )}
               {activeIcon === foodIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BEYOND BUSSIN SANDWICH</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$15.00</p>
                                <p className={styles.pTag}>+ Homemade chipotle aioli and chips</p>  
                            </div>  

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ARCHER ROOSE WHITE/RED</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$13.00</p>
                                <p className={styles.pTag}>+ Chips</p>
                            </div>  

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ITALIAN PANINI</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$11.00</p>
                                <p className={styles.pTag}>+ Chips</p>
                            </div>  
                            

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>TUNA MELT</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$11.00</p>
                                <p className={styles.pTag}>+ Chips</p>
                            </div>  
                         </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>ZESTO CHICKEN SANDWICH</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$13.00</p>
                                <p className={styles.pTag}>+ Chips</p>
                            </div>  
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>TURKEY CLUB</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$11.00</p>
                                <p className={styles.pTag}>+ Chips</p>
                            </div>  
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>GRILLED CHEESE</h3>  
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$6.50</p>
                                <p className={styles.pTag}>+ Chips</p>
                                <p className={styles.pTag}>+ bacon/tomato/turkey: $1.50</p>
                            </div>                       
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>MIXED GREEN SALAD</h3>     
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$6.50</p>
                                <p className={styles.pTag}>+ smoked salmon: $5.00</p>
                                <p className={styles.pTag}>+ avocado: $1.50</p>
                                <p className={styles.pTag}>+ boiled egg: $1.50</p>

                            </div>                    
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>COBB SALAD</h3>  
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$10.0</p>

                            </div>                         
                        </div>    
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>PIZZA PANINI</h3> 
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$11.0</p>
                                <p className={styles.pTag}>+ chips</p>

                            </div>                          
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>SMOKED SALMON TARTINE</h3>  
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$11.0</p>
                                <p className={styles.pTag}>+ side salad</p>


                            </div>                         
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>AVOCADO TOAST</h3> 
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$1.00</p>
                                <p className={styles.pTag}>+ side salad</p>
                                <p className={styles.pTag}>+ egg: $1.00</p>
                            </div>                          
                        </div>                    
                    </>
                )}
                {activeIcon === seasonalIcon && (
                    <>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>PINA COLADA</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$4.75(M)/$5.75(L)</p>
                            </div>  

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>MATCHA LEMONDADE</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$5.75(L)</p>
                            </div>  

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>YUZU-ADE</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$5.25(L)</p>
                            </div>  
                            

                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>FRESHLY SQUEEZED LEMONDADE</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$4.05(M)/$5.05(L)</p>
                            </div>  
                         </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>MATCHA LAVENDER OAT</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$6.50</p>
                            </div>  
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>BERRY LAVENDER LEMONADE</h3>
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$5.25(M)/$6.25(L)</p>
                            </div>  
                        </div>
                        <div className={styles.menuItem}>
                            <h3 className={styles.h3Tag}>CIRTUS BOBA (GRAPEFRUIT OR ORANGE)</h3>  
                            <div className={styles.sizeTag}>
                                <p className={styles.pTag}>$6.00</p>
                            </div>                       
                        </div>
                  
                    </>
                )}
            </div>
        </div>
    );
};

export default Menu;
