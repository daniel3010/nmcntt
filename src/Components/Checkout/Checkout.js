import React, { useState } from 'react';
import styles from './Checkout.module.css';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, total, handleHome }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the payment processing
        alert('Order placed successfully!');
        navigate('/');
    };

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.checkoutContent}>
                <h1>Checkout</h1>
                
                <div className={styles.orderSummary}>
                    <h2>Order Summary</h2>
                    <div className={styles.cartItems}>
                        {cart.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.cover} alt={item.name} />
                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <h3>Total: ${total}</h3>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.checkoutForm}>
                    <div className={styles.formSection}>
                        <h2>Shipping Information</h2>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="ZIP Code"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h2>Payment Information</h2>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="cardName"
                                placeholder="Name on Card"
                                value={formData.cardName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formActions}>
                        <button type="button" onClick={handleHome} className={styles.cancelButton}>
                            Cancel
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout; 