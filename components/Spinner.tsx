import styles from "@/styles/spinner.module.css";

interface PropsSpinner {
  width?: number;
  height?: number;
  borderWidth?: number;
}

function Spinner({ width, height, borderWidth }: PropsSpinner) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: `${borderWidth}px`,
      }}
      className={`${styles.spinner}`}
    ></div>
  );
}

export default Spinner;
