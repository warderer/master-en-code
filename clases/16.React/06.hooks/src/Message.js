import React, {useState, useRef} from 'react';

function MessageInput() {

    const [message, setMessage] = useState("");
    //const [counter, setCounter] = useState(0);
    const counter = useRef(0);

    const sendMessage = () => {
        console.log("Mensaje enviado: ", message);
        //setCounter(counter + 1);
        if(counter.current >= 5){
            alert('Ya te pasaste de mensajes');
        }
        counter.current += 1;
    }

    return(
        <div>
            <input type="text" name="" id=""
                value={message}
                onChange={e => setMessage(e.target.value)}
            />

            <button onClick={sendMessage}> Enviar Mensaje </button>
        </div>
    )

}

export default MessageInput;