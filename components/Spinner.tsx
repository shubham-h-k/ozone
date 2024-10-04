import styles from "@/styles/spinner.module.css";

function Spinner() {
  return (
    <div className="flex justify-center mt-8">
      <span className={`${styles.spinner}`}></span>
    </div>
  );
}

export default Spinner;
