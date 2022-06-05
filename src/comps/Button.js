import React, {useState} from 'react'
import countries from './countries'

const Button = ({content, backgroundImg}) => {
    const [showContent, setShowContent] = useState(false)
    // const bgImage = countries.map((country) => )

    console.log(backgroundImg)

    return (
        <div style={{
            width: '33%',
            }}
        >
            <div
                style={{
                    height: '200px',
                    border: 'solid 3px #000',
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover'
                }}>
                <button
                    onClick={()=>{
                        setShowContent(!showContent)
                    }}>
                        show
                </button>
            </div>
            <div>
                {showContent ? content : null}
            </div>
        </div>
    )
}

export default Button