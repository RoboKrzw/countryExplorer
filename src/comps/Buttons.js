import React, {useState} from 'react'
import countries from './countries'
import './buttons.scss'
import {Container} from 'react-bootstrap'
import classNames from 'classnames';

export const Buttons = () => {
    const [content, setContent] = useState("");
    const [showContent, setShowContent] = useState(false);
    // const [isFullHeight, setIsFullHeight] = useState(false);

    // const toggleHandler = (e) => {
    //     setIsFullHeight(!isFullHeight);
    // };

    return (
        <div className='wrapper'>
            <div className='wrapper__country'>
                {countries.map((country) => {
                    return (
                        <button
                            className='wrapper__country__button'
                            key={country.id}
                            onClick={() => {
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