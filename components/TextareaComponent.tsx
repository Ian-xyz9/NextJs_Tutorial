"use client";

import { useState } from "react";
// import { createInput } from "../app/actions"
import styles from '../styles/main_app.module.css';

interface FetchClientDataFunction {
  (data: string): Promise<string>;
}

interface TextareaComponentProps {
  fetchclientData: FetchClientDataFunction;
}

export default function TextareaComponent(props: TextareaComponentProps) {
  const { fetchclientData } = props; //destructure props to get fetchclientData fn
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("msg from client: submit button pressed")
    // for testing call server function 
    fetchclientData("hello from client");
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.input_container}
    >
      <textarea
        id="fname"
        name="fname"
        placeholder="Paste input here..."
        className={styles.text_input}
      ></textarea>
      <button 
        type="submit" 
        className={styles.input_button}>📨</button>
    </form>
  );
};