import React, {useState} from 'react'
import propTypes from 'prop-types'

function Header ({updateData}) {
    const [showName, setShowName] = useState('');

    const onSearchShow = (e) => {
        e.preventDefault();
        console.log('Buscaron:',showName);
        updateData(showName);
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

Header.propTypes = {
    updateData: propTypes.func
}

export default Header;