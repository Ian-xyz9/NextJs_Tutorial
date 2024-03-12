import styles from '../styles/main_app.module.css'
import TextareaComponent from '../components/TextareaComponent';
import DisplayWindow from '../components/DisplayWindow'; 

//Need to load button state from db
//Load display window state from browser storage api

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <DisplayWindow />
          <div className="opt_buttons">
            <div className="gr_contain_buttons">
              <button>button 1</button>
              <button>button 2</button>
              <button>button 3</button>
              <button>button 4</button>
              <button>button 5</button>
              <button>button 6</button>
              <button>button 7</button>
              <button>button 8</button>
            </div>
          </div>
            <TextareaComponent />
      </div>
    </>
  );
}