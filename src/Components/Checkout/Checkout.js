import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.css';

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

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        // Shipping Information Validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }
        
        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }
        
        if (!formData.country.trim()) {
            newErrors.country = 'Country is required';
        }
        
        if (!formData.zipCode.trim()) {
            newErrors.zipCode = 'ZIP code is required';
        }

        // Payment Information Validation
        if (!formData.cardNumber.trim()) {
            newErrors.cardNumber = 'Card number is required';
        } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
            newErrors.cardNumber = 'Card number must be 16 digits';
        }
        
        if (!formData.cardName.trim()) {
            newErrors.cardName = 'Name on card is required';
        }
        
        if (!formData.expiryDate.trim()) {
            newErrors.expiryDate = 'Expiry date is required';
        } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
            newErrors.expiryDate = 'Expiry date must be in MM/YY format';
        }
        
        if (!formData.cvv.trim()) {
            newErrors.cvv = 'CVV is required';
        } else if (!/^\d{3,4}$/.test(formData.cvv)) {
            newErrors.cvv = 'CVV must be 3 or 4 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // Format card number with spaces
        if (name === 'cardNumber') {
            formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        }

        // Format expiry date
        if (name === 'expiryDate') {
            formattedValue = value
                .replace(/\D/g, '')
                .replace(/^(\d{2})/, '$1/')
                .substr(0, 5);
        }

        setFormData(prev => ({
            ...prev,
            [name]: formattedValue
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            alert('Order placed successfully!');
            navigate('/');
            setIsSubmitting(false);
        }, 1500);
    };

    const handleCancel = () => {
        navigate('/cart');
    };

    if (cart.length === 0) {
        return (
            <div className={styles.checkoutContainer}>
                <div className={styles.checkoutContent}>
                    <div className={styles.emptyCart}>
                        <h2>Giỏ hàng của bạn đang trống</h2>
                        <p>Hãy thêm một số game vào giỏ hàng trước khi tiến hành thanh toán.</p>
                        <button onClick={() => navigate('/nmcntt')}>
                            Trang chủ
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.checkoutContent}>
                <h1>Checkout</h1>
                
                <div className={styles.orderSummary}>
                    <h2>Order Summary</h2>
                    <div className={styles.cartItems}>
                        {cart.map((item, index) => (
                            <div key={index} className={styles.cartItem}>
                                <img src={item.cover} alt={item.name} />
                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <h3>
                            <span>Total:</span>
                            <span>${total}</span>
                        </h3>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.checkoutForm}>
                    <div className={styles.formSection}>
                        <h2>Shipping Information</h2>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                            />
                            {errors.email && <div className={styles.error}>{errors.email}</div>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                            />
                            {errors.address && <div className={styles.error}>{errors.address}</div>}
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="Enter your city"
                                />
                                {errors.city && <div className={styles.error}>{errors.city}</div>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="country">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    placeholder="Enter your country"
                                />
                                {errors.country && <div className={styles.error}>{errors.country}</div>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="zipCode">ZIP Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    placeholder="Enter ZIP code"
                                />
                                {errors.zipCode && <div className={styles.error}>{errors.zipCode}</div>}
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h2>Payment Information</h2>
                        <div className={styles.formGroup}>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="1234 5678 9012 3456"
                                maxLength="19"
                            />
                            {errors.cardNumber && <div className={styles.error}>{errors.cardNumber}</div>}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="cardName">Name on Card</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleInputChange}
                                placeholder="Enter name on card"
                            />
                            {errors.cardName && <div className={styles.error}>{errors.cardName}</div>}
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="expiryDate">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                    placeholder="MM/YY"
                                    maxLength="5"
                                />
                                {errors.expiryDate && <div className={styles.error}>{errors.expiryDate}</div>}
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    placeholder="123"
                                    maxLength="4"
                                />
                                {errors.cvv && <div className={styles.error}>{errors.cvv}</div>}
                            </div>
                        </div>
                    </div>

                    <div className={styles.formActions}>
                        <button
                            type="button"
                            className={styles.cancelButton}
                            onClick={handleCancel}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : 'Place Order'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout; 