import Button from './Button'
import React from 'react'
import countries from './countries'

const Buttons = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {countries.map((country)=> (
                <Button 
                    key={country.id} 
                    content={country.props.content} 
                    backgroundImg={country.props.url}
                />
            ))}
        </div>
    )
}

export default Buttons