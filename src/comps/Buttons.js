import React, {useState} from 'react'
import countries from './countries'

export const Buttons = () => {
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(false);

    return (
        <div>
            <div>
                <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '100%'
                }}>
                    {countries.map((country) => {
                        return (
                            <div 
                                key={country.id}
                                style={{
                                backgroundImage: `url(${country.props.url})`,
                                backgroundSize: 'cover',
                                height: '200px',
                                width: "33%"
                            }}>
                                <button
                                    key={country.id}
                                    onClick={() => {
                                        setShowContent(true);
                                        content !== country.props.content
                                            ? setContent(country.props.content)
                                            : setShowContent(!showContent);
                                    }}
                                >
                                Pokaż {country.id}
                                </button>
                            </div>
                        );
                    })}
                </div>
            
            </div>
            <div>
                {showContent ? <div>{content}</div> : null}
            </div>
        </div>
    );
};

export default Buttons