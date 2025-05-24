import React from "react";
import styles from "./Filters.module.css";
import { ReactComponent as Wishlist } from "../../assets/image/wishlist.svg";
import { ReactComponent as Ratings } from "../../assets/image/ratings.svg";
import { ReactComponent as Reviews } from "../../assets/image/reviews.svg";
import { ReactComponent as Action } from "../../assets/image/action.svg";
import { ReactComponent as Strategy } from "../../assets/image/strategy.svg";
import { ReactComponent as RPG } from "../../assets/image/RPG.svg";
import { ReactComponent as Shooter } from "../../assets/image/shooter.svg";
import { ReactComponent as Adventure } from "../../assets/image/adventure.svg";
import { ReactComponent as Puzzle } from "../../assets/image/puzzle.svg";
import { ReactComponent as Racing } from "../../assets/image/racing.svg";
import { ReactComponent as Sports } from "../../assets/image/sports.svg";

const Filters = props => {
    const {
        hoverState,
        handleHover,
        handleSelect,
        currentFilter
    } = props;

    return (
        <div className={styles.filters}>
          <h2>Bộ lọc</h2>

          <div className={styles.globalFilters}>
               <div 
                 className={styles.filterDiv} 
                 id="8" 
                 onMouseEnter={handleHover} 
                 onMouseLeave={handleHover} 
                 onClick={handleSelect}
               >
                 <button 
                   className={styles.filterBtn} 
                   style={{ backgroundColor: (hoverState[8].hovered || currentFilter == "Wishlist") ? "#fff" : "#2d2d2d" }}
                   aria-label="Mở danh sách yêu thích"
                 >
                     <Wishlist 
                        style={{ fill: (hoverState[8].hovered || currentFilter == "Wishlist") ? "#000000" : "#fff" }} 
                        className={styles.Wishlist}
                     />
                 </button>
                 Danh sách yêu thích
               </div>
     
               <div 
                 className={styles.filterDiv} 
                 id="9" 
                 onMouseEnter={handleHover} 
                 onMouseLeave={handleHover} 
                 onClick={handleSelect}
               >
                 <button 
                   className={`${styles.filterBtn2} ${styles.Ratings}`} 
                   style={{ backgroundColor: (hoverState[9].hovered || currentFilter == "Ratings") ? "#fff" : "#2d2d2d" }}
                   aria-label="Sắp xếp theo đánh giá"
                 >
                     <Ratings
                       className={`${styles.filterSVG2} ${styles.Ratings}`} 
                       style={{ fill: (hoverState[9].hovered || currentFilter == "Ratings") ? "#000000" : "#fff" }} 
                     />
                 </button>
                 Đánh giá
               </div>
     
               <div 
                 className={styles.filterDiv}
                 id="10" 
                 onMouseEnter={handleHover} 
                 onMouseLeave={handleHover} 
                 onClick={handleSelect}
               >
                 <button 
                   className={`${styles.filterBtn3} ${styles.Reviews}`} 
                   style={{ backgroundColor: (hoverState[10].hovered || currentFilter == "Reviews") ? "#fff" : "#2d2d2d" }}
                   aria-label="Sắp xếp theo nhận xét"
                 >
                     <Reviews
                       className={`${styles.filterSVG3} ${styles.Reviews}`} 
                       viewBox="0 0 48 48" 
                       style={{ fill: (hoverState[10].hovered || currentFilter == "Reviews") ? "#000000" : "#fff" }} 
                     />
                 </button>
                 Nhận xét
               </div>
          </div>

          <div className={styles.genreFilters}>
            <h2>Thể loại</h2>

            <div 
              className={styles.filterDiv} 
              id="11" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn3} 
                   style={{ backgroundColor: (hoverState[11].hovered || currentFilter == "Action") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Hành động"
                 >
                    <Action 
                      className={styles.filterSVG3}
                      style={{ fill: (hoverState[11].hovered || currentFilter == "Action") ? "#000000" : "#fff" }} 
                    />
                 </button>
                 Hành động
            </div>

            <div 
              className={styles.filterDiv} 
              id="12" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn2} 
                   style={{ backgroundColor: (hoverState[12].hovered || currentFilter == "Strategy") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Chiến lược"
                 >
                     <Strategy 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[12].hovered || currentFilter == "Strategy") ? "#000000" : "#fff" }} 
                     />
                 </button>
                 Chiến lược
            </div>

            <div 
              className={styles.filterDiv} 
              id="13" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn3} 
                   style={{ backgroundColor: (hoverState[13].hovered || currentFilter == "RPG") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Nhập vai"
                 >
                     <RPG 
                       className={styles.filterSVG3} 
                       style={{ fill: (hoverState[13].hovered || currentFilter == "RPG") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Nhập vai
            </div>

            <div 
              className={styles.filterDiv} 
              id="14" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn2} 
                   style={{ backgroundColor: (hoverState[14].hovered || currentFilter == "Shooter") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Bắn súng"
                 >
                     <Shooter 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[14].hovered || currentFilter == "Shooter") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Bắn súng
            </div>

            <div 
              className={styles.filterDiv} 
              id="15" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn2} 
                   style={{ backgroundColor: (hoverState[15].hovered || currentFilter == "Adventure") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Phiêu lưu"
                 >
                     <Adventure 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[15].hovered || currentFilter == "Adventure") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Phiêu lưu
            </div>

            <div 
              className={styles.filterDiv} 
              id="16" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn4} 
                   style={{ backgroundColor: (hoverState[16].hovered || currentFilter == "Puzzle") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Giải đố"
                  >
                     <Puzzle 
                       className={styles.filterSVG2} 
                       style={{ fill: (hoverState[16].hovered || currentFilter == "Puzzle") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Giải đố
            </div>

            <div 
              className={styles.filterDiv} 
              id="17" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn3} 
                   style={{ backgroundColor: (hoverState[17].hovered || currentFilter == "Racing") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Đua xe"
                 >
                     <Racing 
                       className={styles.filterSVG3} 
                       style={{ fill: (hoverState[17].hovered || currentFilter == "Racing") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Đua xe
            </div>

            <div 
              className={styles.filterDiv} 
              id="18" 
              onMouseEnter={handleHover} 
              onMouseLeave={handleHover} 
              onClick={handleSelect}
            >
                 <button 
                   className={styles.filterBtn4} 
                   style={{ backgroundColor: (hoverState[18].hovered || currentFilter == "Sports") ? "#fff" : "#2d2d2d" }}
                   aria-label="Hiển thị thể loại Thể thao"
                 >
                     <Sports 
                       className={styles.filterSVG3} 
                       style={{ fill: (hoverState[18].hovered || currentFilter == "Sports") ? "#000000" : "#fff" }} 
                      />
                 </button>
                 Thể thao
            </div>
          </div>
        </div>
    )
}

export default Filters;