import React, {useRef} from 'react'

function Input () {
    // usa useRef cuando quiera acceder/manipular al DOM de los elementos
    // es similar a document.querySelector()
    const myInput = useRef();

    const onFocus = () => {
        //document no EXISTE en React, por que hace referencia al DOM y no al Virtual DOM
        //document.getElementById('myInput')
        console.log(myInput.current);
        myInput.current.focus();
        console.log(myInput.current.getAttribute('type'));
    }

    return (
        <div>
            <input type="button" name="" id="myinput" placeholder="Mi texto" ref={myInput}/>
            <button onClick={onFocus}>Llevame al input</button>
        </div>
    )
}

export default Input;