import React from 'react';
import styles from './Guide.module.css';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h1>Hướng dẫn mua game</h1>
      <div className={styles.content}>
        <div className={styles.step}>
          <h2>Bước 1: Tìm kiếm game</h2>
          <p>- Sử dụng thanh tìm kiếm ở góc trên bên phải</p>
          <p>- Lọc game theo thể loại từ menu bên trái</p>
          <p>- Xem các game được đề xuất trên trang chủ</p>
        </div>

        <div className={styles.step}>
          <h2>Bước 2: Xem thông tin chi tiết</h2>
          <p>- Click vào game để xem thông tin chi tiết</p>
          <p>- Đọc mô tả, xem hình ảnh và video gameplay</p>
          <p>- Kiểm tra yêu cầu hệ thống</p>
        </div>

        <div className={styles.step}>
          <h2>Bước 3: Thêm vào giỏ hàng</h2>
          <p>- Click nút "Thêm vào giỏ hàng"</p>
          <p>- Kiểm tra giỏ hàng bằng cách click vào biểu tượng giỏ hàng</p>
          <p>- Điều chỉnh số lượng nếu cần</p>
        </div>

        <div className={styles.step}>
          <h2>Bước 4: Thanh toán</h2>
          <p>- Xác nhận các game trong giỏ hàng</p>
          <p>- Chọn phương thức thanh toán</p>
          <p>- Hoàn tất đơn hàng</p>
        </div>

        <div className={styles.step}>
          <h2>Bước 5: Tải và cài đặt</h2>
          <p>- Sau khi thanh toán thành công, bạn sẽ nhận được link tải game</p>
          <p>- Tải game về máy</p>
          <p>- Cài đặt và bắt đầu chơi!</p>
        </div>
      </div>
    </div>
  );
};

export default Guide; 