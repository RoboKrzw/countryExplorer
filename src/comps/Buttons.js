import React, {useState, useEffect} from 'react'
import countries from './countries'
import './buttons.scss'
import {Container} from 'react-bootstrap'
import classNames from 'classnames';

export const Buttons = () => {
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(false);
    const [isRow, setIsRow] = useState(false);

    const handleButtonClick = () => {
        setIsRow(!isRow);
    };

    useEffect(() => {
        setShowContent(isRow);
      }, [isRow]);
    
    const buttonClass = isRow ? 'wrapper__country-row' : 'wrapper__country';    

    return (
        <div className='wrapper'>
            <div className={buttonClass}>
                {countries.map((country) => {
                    return (
                        <button
                            className='wrapper__country__button'
                            key={country.id}
                            onClick={() => {
                                handleButtonClick();
                                setShowContent(true);
                                content !== country.props.content
                                    ? setContent(country.props.content)
                                    : setShowContent(!showContent);
                            }}
                        >
                            <div 
                                className='wrapper__country__button__bcg'
                                // onMouseOver={toggleHandler}
                                key={country.id}
                                style={{
                                backgroundImage: `url(${country.props.url})`,
                                backgroundSize: 'cover'
                            }}></div>
                        </button>
                    );
                })}
            </div>
            <div className={showContent ? 'wrapper__content--show' : 'wrapper__content'}>
                <Container fluid>{content}</Container>
            </div>
        </div>
    );
};

export default Buttons