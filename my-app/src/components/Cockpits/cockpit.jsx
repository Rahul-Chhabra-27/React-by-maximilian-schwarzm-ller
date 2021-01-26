import React, { useEffect, useRef } from 'react';


const Cockpit = ( props ) => {
    const toggleBtn = useRef(null);
    
        const style = {
        backgroundColor : 'green',
        color:"white",
        font : 'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursor : 'pointer',
        ':hover':{
            backgroundColor:'lightgreen',
            color:"red"
        },
    }
   useEffect(() => {
       toggleBtn.current.click(); 
       return () => console.log('clean up work in useEffect');
   },[]);
   useEffect(() => {
       console.log(" 2nd useEffect")
   })
    let classes = [];
        if(props.personsLength === 3){
            classes.push('blue');
        }
        if(props.personsLength <= 2){
            classes.push('red');
        }
        if(props.personsLength <=1){
            classes.push('bold');
        }
    return(
    <div className="App">

        <h1 className={classes.join(' ')}>Hii I'm a React app!!</h1>
        <h1>{props.title}</h1>
        <button ref={toggleBtn} style={style} onClick={props.toggleperson}>Toggle Person</button>

    </div>
    )
}
export default React.memo(Cockpit);