import styles from "@/styles/dualRangeSlider.module.css";

export default function DualRangeSlider() {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <input
          className={`${styles.input} ${styles["input--1"]}`}
          type="range"
          min="0"
          max="100"
          //   value={10}
        />
        <input
          className={styles.input}
          type="range"
          //   value={80}
          min="0"
          max="100"
        />
      </div>

      <div className="flex justify-between">
        <div className="text-sm font-semibold text-[#4d4d4d]">$ 0</div>
        <div className="text-sm font-semibold text-[#4d4d4d]">$ 200</div>
      </div>
    </div>
  );
}

// export default function DualRangeSlider() {
//     return (
//       <div className={styles.container}>
//         <input
//           type="range"
//           min={0}
//           max={200}
//           className={`${styles.thumb} ${styles["thumb--zindex-3"]}`}
//         />

//         <input
//           type="range"
//           min={0}
//           max={200}
//           className={`${styles.thumb} ${styles["thumb--zindex-4"]}`}
//         />

//         <div className={`${styles.slider}`}>
//           {/* <div className={`${styles.slider__track}`}></div> */}
//           {/* <div className={`${styles.slider__range}`}></div> */}
//           {/* <div className={`${styles["slider__left-value"]}`}>{50}</div> */}
//           {/* <div className={`${styles["slider__right-value"]}`}>{100}</div> */}
//         </div>
//       </div>
//     );
//   }
