// adding state to be able switch between components
import {useState} from 'react';

// we will use them for handling the state
import Modal from "./Modal";
import Backdrop from "./Backdrop";

/**
 * {notice that in react the functions that will represent components must have capital letter at the start!}
 * notice that html params in react are key-senstive!
 * @param props - the obj that will hold all the params that i sent to this component (function).
 * @returns - the finalized Todo compoment (which is a card in this example)
 */
function Todo(props) {
  // always return arr with 2 vals: 
  // modalIsOpen - current snap-shot of the data in useState.
  // setModalIsOpen - the function to update the data in useState / change the modalIsOpen. 
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  /**
   * to use events - for example the click of a button i can create functions inside my main function and call this funciton
   * in the main function that return the component.
   */
  function clickButtonHandler(){
    console.log("I clicked "+ props.title + " button! to open");
    // When i clicking on the button the stat will update and open the component
    setModalIsOpen(true);
  }

  /**
   * Close the card by click the background!
   */
  function closeModalHandler(){
    console.log("I clicked "+ props.title + " button! to close");
    // When i clicking on the button the stat will update and open the component
    setModalIsOpen(false);
  }


  // in js = if there is a if with && and no val to return it will return automaticly the second value!
  // notice that specificly for this demo i send for onCancel & onConfirm the same function although in real project i would have different functionality for each one!
  return (
    <div className = "card">
      <h2>{props.title}</h2>
      <div className = "actions">
        <button className = "btn" onClick={clickButtonHandler} >{props.btnName}</button>
      </div>
      {/* <div className = "actions">
        <button className = "btn" onClick={example2} >{props.btnName}</button>
      </div> */}
    {/* modalIsOpen ? <Modal /> : null the line under this is the shorter way*/}
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>/*a component function is always true thus it works */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>/*a component function is always true thus it works */}
    </div>
  );
}
/**
 * notice you can also create the funtions outside and call them as i did in example2.
 */
// function example2(){
//   console.log("test2");
// }
export default Todo;
