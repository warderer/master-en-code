import React, {useState} from 'react'

function Header () {
    const [showName, setShowName] = useState('');

    const onSearchShow = (e) => {
        e.preventDefault();
        console.log('Le dieron submit');
        //agregarContacto(name,lastName);
    }

    return (
        <div>
            <form onSubmit={onSearchShow}>
                <input value={showName} onChange={(e)=>{
                    setShowName(e.target.value)
                    console.log(showName)}
                } required placeholder="What Show are you looking for?..."/>
                <button type="submit">Search</button>
            </form>            
        </div>
    )
}

export default Header;