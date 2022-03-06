/**
 * {notice that in react the functions that will represent components must have capital letter at the start!}
 * @param props - the obj that will hold all the params that i sent to this component (function).
 * @returns - the finalized Todo compoment (which is a card in this example)
 */
function Todo(props){
    return (
        <div>
          <h1>My Todos</h1>
          <div className="card">
            <h2 >{props.title}</h2>
            <div className="actions">
              <button className="btn">{props.btnName}</button>
            </div>
          </div>
        </div>
      );
}
export default Todo;