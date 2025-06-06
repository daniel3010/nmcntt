import styles from './Cart.module.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Right } from "../../assets/image/arrowRight.svg";
import { ReactComponent as Cross } from "../../assets/image/cross.svg";
import { motion } from "framer-motion";
import AnimatedCart from '../../pages/AnimatedPage/AnimatedCart';
import { useNavigate } from 'react-router-dom';

const Cart = props => {
    const {
        cartAmount,
        cart,
        handleOpenCart,
        handleCloseCart,
        cartDisplayed,
        handleHover,
        hoverState,
        clearCart,
        handleRemoveFromCart,
        openGamePage
    } = props;

    const [total, setTotal] = useState(0);
    let newTotal = 0;
    const navigate = useNavigate();

    useEffect(() => {
        if (cartDisplayed) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [cartDisplayed]);

    cart.forEach((item, i) => {
        let priceAsNumber = parseFloat(item.price);
        let currentTotal = parseFloat(newTotal);
        newTotal = (priceAsNumber + currentTotal).toFixed(2);

        if (i === cart.length) {
            setTotal(newTotal);
        }
    })

    const variants = {
        initial: { x: 100 },
        animate: { x: 0, transition: {  x: { type: "spring", duration: 1.2, bounce: 0.4 }} },
        exit: { x: 100, transition: {  x: { type: "spring", duration: 1.2, bounce: 0.575 }} },
    }

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className={styles.cartWindow}>
                <div className={styles.back} onClick={handleCloseCart}>
    
                </div>
            <AnimatedCart>
                    <div 
                      className={styles.cart} 
                      style={{ backgroundColor: "#1A1A1A", height: "100vh" }}
                    >
                        <div className={styles.top}>
                            <div className={styles.topHeader}>
                                <h2>{cartAmount >= 1 ? cartAmount > 1 ? `${cartAmount} games` : "1 game" : "Chưa có game nào"}</h2>
                                <h3 onClick={clearCart}>{cartAmount >= 1 ? "Xóa" : ""}</h3>
                            </div>
            
                            <div className={styles.topGames}>
                                {cart.map((item, i) => {
                                    return <motion.div 
                                             className={styles.item} 
                                             key={i} 
                                             variants={variants} 
                                             initial="initial" 
                                             animate="animate" 
                                             exit="exit"
                                            >
                                              <h3 id={item.surname} onClick={openGamePage}>{item.name}</h3>
                                              <div>
                                                  ${item.price}
                                                  <button id={item.id} onClick={handleRemoveFromCart} className={styles.removeButton} aria-label="Close">
                                                      <Cross className={styles.cross} />
                                                  </button>
                                              </div>
                                            </motion.div>
                                })}
                            </div>
                        </div>
            
                        <div 
                          className={styles.bottom}  
                          style={{ width: "87.5%" , display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                                <h3>Total: ${newTotal}</h3>
                                <button 
                                  id="24" 
                                  onMouseEnter={handleHover} 
                                  onMouseLeave={handleHover} 
                                  onClick={handleCheckout}
                                  style={{ color: hoverState[24].hovered ? "#92f" : "#fff" }} 
                                  aria-label="Checkout"
                                >
                                    Checkout
                                    <Right 
                                      className={styles.right}
                                      style={{ fill: hoverState[24].hovered ? "#92f" : "#fff" }}
                                    />
                                </button>
                        </div>
                    </div>
                    </AnimatedCart>
        </div>
    );
  }
  
  export default Cart;