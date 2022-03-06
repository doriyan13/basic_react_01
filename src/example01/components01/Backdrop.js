function Backdrop(props){
    // Notice that in regular html you can't do it! but in jsx you can (aka react)
    // props.onCancel - custom event we created for out custom component to update the state!
    // the onClick - let us to chain functions!
    return <div className='backdrop' onClick={props.onCancel}/>
}

export default Backdrop;