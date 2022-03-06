// Imports -
import Todo from "./components/Todo";

/**
 * main, base function compoment.
 * @returns the return of jsx functions must return html elemnt!
 */
function App() {
  // Notice when i add css in js functions i must keep the special names of js!
  // *for example instead of 'class' i will have to use 'className'! (it's not often that it's happening but i do have to notice that!)

  /* Notice that you can add parameters to your custom compoments which you will
      be able to-access with the props object and then get access to the fields/ params that i sent*/
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title ="first" btnName="Check"/> 
      <Todo title ="second" btnName="Delete"/>
      <Todo title ="third" btnName="Add"/>
    </div>
  );
}

export default App;
