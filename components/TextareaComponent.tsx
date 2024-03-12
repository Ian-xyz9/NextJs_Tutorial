"use client";

import { useFormState } from "react-dom";
import { createInput } from "../app/actions"
import styles from '../styles/main_app.module.css';

const initialState = {
  message: "init",
};

const TextareaComponent: React.FC = () => {
  const [state, formAction] = useFormState(createInput,initialState);
  
  return (
    <form className={styles.input_container}>
      <textarea
        id="fname"
        name="fname"
        placeholder="Paste input here..."
        className={styles.text_input}
      ></textarea>
      <input type="submit" value="📨" className={styles.input_button} formAction={formAction}/>
      <div>
        {state?.message} {/* DELETE FOR TESTING */}
      </div>
    </form>
  );
};

export default TextareaComponent;