import styles from './Footer.module.css';
import React from 'react';
import { ReactComponent as Logo } from "../../assets/image/logo.svg";
import { ReactComponent as AppStore } from "../../assets/image/appstorebadge.svg";

const Footer = props => {
    const {
        handleAbout,
        handleGuide,
        handleHome
    } = props;

    return (
        <div className={styles.footer}>
            <div className={styles.footerTop} onClick={handleHome} style={{ cursor: 'pointer' }}>
                <Logo className={styles.logo} />
                <h2>Game Store</h2>
            </div>
            <div className={styles.sections}>
              <div className={`${styles.section} ${styles.section1}`}>
                <h3 className={styles.first}>Công ty</h3>
                <h3 onClick={handleAbout} style={{ cursor: 'pointer' }}>Giới thiệu</h3>
                <h3>Trung tâm báo chí</h3>
                <h3>Cơ hội nghề nghiệp</h3>
              </div>
              <div className={`${styles.section} ${styles.section2}`}>
                <h3 className={styles.first}>Máy chơi game</h3>
                <h3>Playstation 5</h3>
                <h3>Xbox One</h3>
                <h3>Switch</h3>`` ``
              </div>
              <div className={`${styles.section} ${styles.section3}`}>
                <h3 className={styles.first}>Tài nguyên</h3>
                <h3>Trung tâm trợ giúp</h3>
                <h3>Liên hệ</h3>
              </div>
              <div className={`${styles.section} ${styles.section4}`}>
                <h3 className={styles.first}>Hỗ trợ sản phẩm</h3>
                <h3 onClick={handleGuide} style={{ cursor: 'pointer' }}>Hướng dẫn</h3>
                <h3>Báo lỗi</h3>
              </div>
            </div>
    
            <div className={styles.footerInfo}>
              <div className={styles.infoLeft}>
                <p>Trang này được xây dựng chỉ cho mục đích giáo dục.</p>
              </div>
              <div className={styles.infoRight}>
                <img className={styles.google} src={require("../../assets/image/googleplaybadge.png")} alt="Google Play Badge" />
                <AppStore className={styles.apple} />
              </div>
            </div>
    
            <div className={styles.footerEnd}>
              <div className={styles.endLeft}>
                <h4>Quyền riêng tư</h4>
                <h4>Bảo mật</h4>
                <h4>Cookie</h4>
                <h4>Pháp lý</h4>
                <h4>Hướng dẫn hợp tác</h4>
              </div>
    
              <div className={styles.endRight}>
                <img className={styles.social} src={require("../../assets/image/twitter.png")} alt="Twitter Logo" />
                <img className={styles.social} src={require("../../assets/image/instagram.png")} alt="Instagram Logo" />
              </div>
            </div>
        </div>
    );
  }
  
  export default Footer;