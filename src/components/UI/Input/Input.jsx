import { useEffect, useState } from "react";
import { Field } from "formik";

import crossIcon from "../../../assets/icons/crossIcon.svg";
import checkIcon from "../../../assets/icons/greencheckIcon.svg";

import styles from "./Input.module.css";

const Input = ({ id, name, placeholder, img, error, touched }) => {
  const [isHideErrMsg, setIsHideErrMsg] = useState(false);

  useEffect(() => {
    error[name] ? setIsHideErrMsg(false) : setIsHideErrMsg(true);
  }, [error, name]);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {!touched[name] ? (
          <img src={img} alt={img} className={styles.icon} />
        ) : error[name] ? (
          <img src={crossIcon} alt="cross" className={styles.icon} />
        ) : (
          <img src={checkIcon} alt="check" className={styles.icon} />
        )}

        <Field
          autoComplete="off"
          name={name}
          id={id}
          placeholder={placeholder}
          className={
            !touched[name] || isHideErrMsg
              ? error[name]
                ? `${styles.inputField} ${styles.inputFieldErr}`
                : `${styles.inputField} ${styles.inputFieldCorrect}`
              : `${styles.inputField} ${styles.inputNotvisible}`
          }
        />
      </div>
      {error[name] && touched[name] ? (
        <div
          onClick={() => setIsHideErrMsg(true)}
          className={isHideErrMsg ? styles.hideErrField : styles.errField}
        >
          <p>{error[name]}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
