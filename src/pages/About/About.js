import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>Giới thiệu về sinh viên</h1>
      <div className={styles.content}>
        <div className={styles.studentInfo}>
          <h2>Thông tin sinh viên</h2>
          <h3>Nhóm: 4</h3>
          <p>Họ và tên 1: Lâm Trọng Nghĩa</p>
          <p>Mã số sinh viên 1: 22810209</p>
          <p>Họ và tên 2: Nguyễn Hưng Thịnh</p>
          <p>Mã số sinh viên 2: 24810216</p>
          <p>Họ và tên 3: Viên Phạm Trí Dũng</p>
          <p>Mã số sinh viên 3: 1881011</p>
          <p>Lớp: NHẬP MÔN CÔNG NGHỆ THÔNG TIN</p>
          <p>Khoa: Công nghệ thông tin</p>
          <p>Trường: Đại học Khoa học Tự nhiên - ĐHQG TP.HCM</p>
        </div>
        <div className={styles.projectInfo}>
          <h2>Về dự án</h2>
          <p>Đây là dự án môn Nhập môn Công nghệ thông tin, được thực hiện với mục đích học tập và rèn luyện kỹ năng lập trình web.</p>
          <p>Dự án được xây dựng bằng React.js và các công nghệ web hiện đại khác.</p>
        </div>
      </div>
    </div>
  );
};

export default About; 