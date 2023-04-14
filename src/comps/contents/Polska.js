import React, { useState, useEffect, useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import Landscapes from './landscapes-Polska/Landscapes'
//  import Tooltip from '@mui/material/Tooltip';

import SvgRivers from './svg-Polska/SvgRivers';
import SvgMountains from './svg-Polska/SvgMountains';
import SvgLakes from './svg-Polska/SvgLakes';

import './polska.scss'


export const Polska = () => {
  const [mountainVisible, setMountainVisible] = useState(false)
  const [riverVisible, setRiverVisible] = useState(false)
  const [lakeVisible, setLakeVisible] = useState(false)

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (direction) => {
    direction === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < 3 -1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='polska'>
      <Row>
        <Col className="landscapeBox">
          <svg viewBox="0 0 793 759" className='landscapeBox__contour'>
              <g id="Warstwa_2"><g id="Warstwa_1-2"><path className="cls-polska1" d="M305.88,0h3c.38,2.44,2.45,1.86,3.95,2.11,9.65,1.61,18.59,4.8,26.38,11,6.51,5.15,12.51,10.92,19.57,15.41,2.31,1.47,4.12,3.87,5.85,6.09,1.37,1.74,2,3.84.27,5.93s-3.54,1.34-5.44.56c-2.66-1.09-4.75-3-6.95-4.76-4.87-4-9.32-8.64-15.66-10.39-5.39-1.49-9.78,2.72-8.4,8,1.89,7.28,6,13.39,11,18.71,3.13,3.33,7.39,6,12.23,6.2a54.93,54.93,0,0,1,14.63,2.69c8.48,2.73,16.3,1.66,23.66-3.63a196.49,196.49,0,0,0,17.46-14c3.82-3.47,7.73-6.86,12.59-8.81,1.26-.51,2.83-1.6,4.13,0s.67,3.07-.32,4.57c-3,4.5-7,7.94-11,11.49-5.94,5.3-12.4,10.23-15.68,17.82-.94,2.17-2.58,5-.34,7,2,1.81,4.42-.22,6.38-1.21a57,57,0,0,0,18.72-15.38c2.67-3.3,5.76-3.73,9.75-3,15.5,2.74,30.86,6.08,46.83,6a240.78,240.78,0,0,1,25.88.92c18.57,1.9,37.07,1.33,55.59-.46,13.37-1.3,26.72-2.8,40.11-3.7,11.52-.77,22.44-3.31,31.77-10.2s18.63-6.46,28.22-.75c6.14,3.65,12.47,7,18.5,10.85,5.55,3.53,12.75,5.41,14.34,13.35.42,2.11,1.17,4.14,1,6.35-.53,8.83.24,17.65,1.15,26.38.68,6.53,1.06,13.27,4,19.42,5.73,12,11.4,24.06,17.12,36.08a61.48,61.48,0,0,0,7.16,11.93c2.72,3.44,6.72,6.36,7.49,10.93,3.16,19,6.24,38,8.92,57,.88,6.27-.8,11.93-6.61,16.11-9,6.49-17.68,13.51-26.41,20.42-4.37,3.46-8.43,6.69-9.57,13.17-2.22,12.56-2.74,12.39,9.91,15.93,8,2.23,15.26,5.83,17.42,14.67a66.47,66.47,0,0,1,.4,28.19c-1.9-.46-3.5.22-5.21,1a381.28,381.28,0,0,1-43.5,17.5c-17.84,6-36.21,10-54.65,13.34-12.71,2.3-25.81,2.44-38.73,3.54l-7-.2a43.58,43.58,0,0,0-21,0c-15.51.46-30.94-1.2-46.2-3.31A546.52,546.52,0,0,1,429.81,364c-17.68-5.18-35.25-10.72-52.86-16.11l-2.07-.69-1.87-.42-5.12-1.52-1.92-.39-2.09-.66-1.9-.4c-13.49-4.19-27.41-6.58-41.12-9.88-.66-2.37-1.75-2.29-3.14-.56l-1.86-.45c-.69-2.37-1.79-2.27-3.16-.52l-1.84-.46c-.74-2.44-1.85-2.26-3.2-.46l-2.8-.58c-.5-1.69-1.3-2.06-2.52-.57l-.19,0a6.82,6.82,0,0,1,1-2.28c9.37-9.39,15.88-21,22.77-32,13.47-21.6,28.73-42,42-63.7,8.46-13.9,18.11-27.07,27-40.71C420,153.22,445.37,115,470.73,76.76c2.81-4.24,4.4-11.1,12.22-6.85,1,.55,3,.14,3.28-1.43.29-1.88-1.85-1.42-2.88-2a3.8,3.8,0,0,0-1.94-.34c-16.72.3-33-2.73-49.32-5.93-3.65-.72-6.22.47-8.94,3.64-6.09,7.06-13.32,13-22.54,15.9-2.44.77-4.52,1.49-6.73-.93s-2.2-4.47-1.42-7.28a30.31,30.31,0,0,1,8.22-14c2-1.92,4.66-3.37,5.2-6.48l.21-.36-.21.36c-5,2.62-9.09,6.59-13.41,10.13a26.2,26.2,0,0,1-14.8,6c-9.56.53-18.95-3-28.23-4.92C336.32,59.44,329,48.62,325.17,36c-1.32-4.36-.92-9.07,3.41-12.19s8.9-2.4,13.21-.17c2.78,1.43,5.15,3.63,7.76,5.4,3.82,2.58,6.68,6.53,11.32,7.94l.38.19-.37-.21c-.5-2.94-2.86-4.35-5-5.91-4-2.95-8.68-5.25-12-8.82C333.3,10.86,320,6.08,305,5c-10.83-.75-21,2.76-31.28,5.21-11.08,2.66-22.37,4.86-32.82,9.74a22.8,22.8,0,0,0-8.46,2.81c-7,3.58-13.21,8.31-19.55,12.86s-11.08,11.12-19.16,13c-11.94,2.78-21.94,9.28-31.54,16.57-10.74,8.15-22.74,14.42-35.75,17.19C110.65,85.77,96,92,81,97.13c-10.65,3.62-18.74,9.25-22.2,20.75-1.57,5.22-4.15,10.76-11.11,11.48-1.21.13-1.61,1.57-2.17,2.59a14.52,14.52,0,0,0-1.32,12.43,15.78,15.78,0,0,1-.42,12.15c-1.05,2.27-2.22,2.92-4.62,1.45-4-2.45-6.64-6-8.8-10a14.41,14.41,0,0,0-8.08-7c-3.67-1.35-5.2-.55-5.34,3.53s1.14,7.85,1.61,11.77c1.22,10.1,2.85,20.14,4.33,30.2.92,6.22,3.07,12.49.84,19-1.62,4.71-2.94,9.54-4.15,14.37a11.91,11.91,0,0,1-5.73,7.75c-5.9,3.55-12.18,7-8.89,15.79a.75.75,0,0,1,0,.49c-2.12,5,1.41,7.36,4.59,9.73C15.6,258.16,22.06,262.3,28,267.1c5,4,10.4,7.8,11.55,15,.76,4.85-.73,9.19-2,13.63-6.36,22.56-4.82,18.37,7,29.71a5.33,5.33,0,0,0,1.33.66c.18,3.12.24,6.21-1.41,9.08-.67,1.17-1.08,3.12-.25,3.75,4.1,3.12.78,6.52.71,9.78A2.8,2.8,0,0,1,44,349l-3.18-.22c.73-2.72,1.7-5.36-.45-8a4.43,4.43,0,0,1-.27-4.8c3.49-5.67.81-9.5-3.63-12.63-6.75-4.78-6.57-11.41-5.14-18.31,1-4.87,2.53-9.64,3.78-14.46,1.61-6.22,1-11.66-4.36-16.23C27,271,22.9,268.18,19,265.07c-8.3-6.63-20.09-10.31-18.93-24.79.39-5,1.23-8.55,5.05-11.51,3.14-2.42,7.85-3.56,9.25-7.34,3.1-8.34,7.15-16.72,6.26-25.9-.95-9.88-2.93-19.65-4.29-29.5-1.17-8.49-3.47-16.83-2.65-25.58.41-4.28,2.25-4.92,5.93-4.11,7.76,1.71,13,6.25,16.26,13.4.8,1.75,2.22,4.26,4.2,3.5,2.25-.87,1.91-3.56,1-5.71a17.89,17.89,0,0,1-1.26-9.79c.85-5.08,1.64-10.89,7.41-12.47a8.34,8.34,0,0,0,6-5.08c1.52-3.15,3.43-6.15,4.6-9.42,2.85-8,8.82-12.21,16.39-14.82,1.26-.43,2.45-1,3.69-1.53,13.49-5.14,26.67-11.11,40.95-14.06,14.46-3,28-8.45,39.87-17.38,11.27-8.45,23.19-15.5,36.94-19.16C199,43,201.4,40.66,204,38.46c11.13-9.53,22.68-18.47,36.95-23,16-5.12,32.33-8.91,48.71-12.53,2-.44,4.48-.13,5.25-2.88h2A9.68,9.68,0,0,0,305.88,0Zm103,49,1-1,1-1a2,2,0,0,0,2-2l1-1,1-1,1-1,.92-.19-.24-.44-.69.62-1,1c-.33.34-.66.67-1,1l-1,1a2,2,0,0,0-2,2c-.33.34-.67.67-1,1s-.67.67-1,1l-.22.35Z"/><path className="cls-polska2" d="M679.88,721c-2.86-2.33-6.5-2.09-9.79-2.67-17.38-3-33.15-10.88-49.78-16.15-2.27-.72-3.07-2.58-3.69-4.39-4-11.59-12.13-16.82-24-19.81-11.32-2.85-22-2-33-.59a28.26,28.26,0,0,1-4,.52c-9.17-.11-16.89,2.74-22.3,10.55-2,2.85-4.26,3.48-7,.9-.23-.22-.6-.31-.84-.52-7.95-7-16.46-8.94-26.12-3.37-3.49,2-7.26.22-10.73-.61-8.17-2-13.45,2.85-18.81,7.51a12.13,12.13,0,0,0-3.22,4.42c-5.24,13-15.88,12.05-26.85,10.76-3.08-.37-2.69-2.14-2.68-4.16,0-5.59,1.47-11.3-1.47-16.66-.72-1.32-1.13-3-2.79-3.25-11.72-2.09-16-12-21.56-20.48-3.54-5.39-3.31-5-9.23-2.08-7.44,3.61-12.19,8.78-13.17,17.12-.38,3.22-2.09,4.81-5.45,5.32a94.5,94.5,0,0,0-12.11,2.94c-2.12.62-3.33.42-3.07-2,.64-6.18-.74-11.46-6.06-15.3a4.69,4.69,0,0,1-1.3-2.65,27.14,27.14,0,0,0-12-17c-9-5.9-11.18-15.26-12.68-24.81-.47-3-1.34-4.07-4.16-4-1.66,0-3.33-.39-5-.31-9.75.45-18.39-1.88-24.83-9.77-2.26-2.78-4.48-2.27-7.37-.8-7.44,3.79-14.59,2.22-20.29-4-3.26-3.56-6.35-7.32-9.85-10.63-2.64-2.5-2.32-4.22.29-6.29,3.56-2.82,6.07-6,4.11-11.07-.69-1.79-1.28-2-2.75-1.38a2.67,2.67,0,0,0-.46.2c-12.94,8.21-23.46,1.17-32.59-6.61-7.84-6.68-16.9-8.79-26.05-11.57-2.56-.78-3.06,1.17-4.08,2.62-1.49,2.1.09,2.91,1.48,3.84,1.81,1.19,3.63,2.36,5.42,3.57,4.74,3.21,4.68,8.59-.46,11.11a30.62,30.62,0,0,0-13.77,12.49c-1.29,2.3-2.74,2.6-5.3,1.65-4.82-1.79-8.83-4.22-11.71-8.68-2.71-4.18-6.25-7.82-9-12-4.25-6.46-9.22-11.7-17.34-12.88-3-.43-2.66-2.2-2.29-4.72,1.24-8.49,8.24-12.58,13.27-18.13,1.9-2.1,2.57-3.62,1.37-6.5-1.87-4.51-4.34-5.67-8.7-3.54-4.72,2.32-9.41,1.8-14.43.27-16.4-5-32.87-9.72-49.43-14.12-8.93-2.38-12.24-9.56-15.41-16.74-1.71-3.87-2.11-8.37-2.79-12.64-.38-2.39-1.36-3.18-3.62-2.61a4.13,4.13,0,0,1-.49.07c-9.41,1.16-9.71,1.1-11.77,10.41-1,4.41-2.83,5.72-7.06,5-3.06-.54-6.22-.52-9.88-.79,4.08-9.23,7.91-18.06,11.91-26.8,2-4.41,3.47-8.59,2.8-13.77a173.9,173.9,0,0,1-.95-22.95,10.38,10.38,0,0,0-4-8.55c-4.13-3.61-8-7.57-12-11.35-1.37-1.29-2.71-2.4-1.65-4.64,2.78-5.84,1.5-11.4-1.95-16.42-5.22-7.6-5.13-15.14-1.44-23.38,2.77-6.19,4.54-12.83,6.75-19.27L44,349c-1.8,5.71-3,11.73-5.53,17.07-4.66,9.66-3.91,18.5,1.93,27.22a12.76,12.76,0,0,1,1.22,12.82c-.79,1.83-.87,3.27.9,4.84,4.36,3.86,8.38,8.09,12.72,12a10.39,10.39,0,0,1,3.62,8.27c.19,9-.83,17.95.9,26.87a12.64,12.64,0,0,1-1.23,7.76c-3.62,7.85-6.95,15.84-10.54,23.7-1.19,2.61-.76,3.58,2.2,3.59,2.69,0,4.45-.57,4.87-3.64.35-2.45,1.32-4.81,1.82-7.24.38-1.89,1.23-2.89,3.23-3.15,4.27-.54,8.52-1.27,12.78-1.93,2.32-.36,3.72.25,4.15,2.91.75,4.58,1.39,9.26,2.89,13.62,2.6,7.58,6,14.44,15.17,16.56,10,2.32,19.82,5.59,29.74,8.34,12.13,3.37,24,9.75,37,3,1.31-.68,2.09.17,2.88,1.19,6.31,8.2,6,11.63-1.12,19-3.19,3.3-7.15,5.92-8.85,10.63-1.12,3.13-.6,4.79,2.64,5.31,5.71.92,9.25,4.52,12.42,9.06,4.36,6.26,9.12,12.25,13.82,18.26,4.42,5.66,8.87,5.62,12.67-.22a17.19,17.19,0,0,1,7-6.1c8.53-4.31,8.52-4.82.5-10.19-7.2-4.82-7-4.73-2.57-11.73,1.83-2.86,3.8-3.24,6.7-2.28s6,1.91,9.1,2.62a34.49,34.49,0,0,1,16.09,8.16c10.33,9.24,21.86,15.18,35.54,5.79a5.81,5.81,0,0,1,1.38-.57,1.3,1.3,0,0,1,1.64.68c2,3,1.52,13.81-1.07,16.62s-3,5.1,0,7.91,5.32,6,8.22,8.69c4.08,3.82,9.4,4.75,14.2,1.79s8.28-2.24,11.88,1.44a28.5,28.5,0,0,0,4.39,4.06c2.29,1.53,4,4.28,7.16,4.15,5.51-.23,10.93.79,16.4,1,6.79.28,6.16.25,7.16,6.93,1.25,8.36,2.1,17.13,10.63,22.41,6.17,3.82,10.9,9,12.76,16.53,1.12,4.53,4.85,7.44,8.4,10.24l.12,2.06c0,1.61-.13,3.23,0,4.83.2,2.13,1.31,2.4,2.92,1.12,9.1-.35,9.41-.63,12.18-9.27.94-2.94.94-6.4,4-8.3,4.81-3,9.74-5.75,14.45-8.87,2.9-1.92,4.37-.78,5.9,1.69,3.23,5.24,6.68,10.34,9.88,15.59,1.81,3,4,5.22,7.46,6.1,10.59,2.68,12.21,9.16,12.11,18.35s-.24,6.57,7.78,8c7,1.22,10-1.93,12.88-6.83a37.37,37.37,0,0,1,17.9-15.86,9.93,9.93,0,0,1,6.63-.87c4.82,1.09,9.94,2.69,14.68.32,8.61-4.3,16.41-3.94,23.64,2.71.36.33.95.41,1.29.75,2.68,2.69,4.68,1.74,7-.78,3.78-4.1,7.33-8.65,13.83-8.73a108.13,108.13,0,0,0,11.88-1.09c3.6-.44,7.84-.1,10.6-1.93,3.62-2.4.67-7,.68-10.52q.3-132.72.19-265.44c0-4.18.6-8.42-5.68-9,4.87-1.52,9.47-.67,14-1,1.67-.12,3.83.83,4.63-1.73,12.92-1.1,26-1.24,38.73-3.54,18.44-3.32,36.81-7.31,54.65-13.34a381.28,381.28,0,0,0,43.5-17.5c1.71-.82,3.31-1.5,5.21-1,.15,2.76-1,5.26-2,7.64-2.95,6.65-2.46,12.79,1.54,18.9,1.8,2.74,3.93,5.7,3.91,9.06,0,5.73,1.5,11.15,2.43,16.7,2.78,16.4,7.88,31.58,19.84,44,8.71,9,12.89,20.27,12.88,33,0,10.57,2.08,20.41,10.37,27.92v12c-3.15,3.43-2.51,8.57-6.28,12.09-5.17,4.85-11.53,6.4-17.67,8.78-1.85.72-3.76,1.12-5.07,2.91-8.23,11.29-16.88,22.28-24.74,33.81-12.83,18.83-26.18,37.26-39.79,55.51-3.94,5.28-7.5,10.62-8.93,17.36-1.47,6.94,1.26,13.15,2,19.69.84,7.74,4.42,15.34,3,23.11-1.21,6.82.34,11.47,5.91,15.29,2.31,1.58,5,3.47,6,5.85,1.23,3-2.58,4.91-3.5,7.64a2.44,2.44,0,0,0,.06,1Z"/><path className="cls-polska3" d="M305.88,0a9.68,9.68,0,0,1-9,0Z"/><path className="cls-polska1" d="M360.87,37c-4.64-1.41-7.5-5.36-11.32-7.94-2.61-1.77-5-4-7.76-5.4-4.31-2.23-8.89-3-13.21.17s-4.73,7.83-3.41,12.19c3.79,12.59,11.15,23.41,24.27,26.19,9.28,2,18.67,5.45,28.23,4.92a26.2,26.2,0,0,0,14.8-6c4.32-3.54,8.37-7.51,13.41-10.13h0c-.54,3.11-3.23,4.56-5.2,6.48a30.31,30.31,0,0,0-8.22,14c-.78,2.81-.7,5,1.42,7.28s4.29,1.7,6.73.93c9.22-2.9,16.45-8.84,22.54-15.9,2.72-3.17,5.29-4.36,8.94-3.64,16.3,3.2,32.6,6.23,49.32,5.93a3.8,3.8,0,0,1,1.94.34c1,.62,3.17.16,2.88,2-.24,1.57-2.25,2-3.28,1.43-7.82-4.25-9.41,2.61-12.22,6.85C445.37,115,420,153.22,394.88,191.64c-8.91,13.64-18.56,26.81-27,40.71-13.25,21.73-28.51,42.1-42,63.7-6.89,11-13.4,22.61-22.77,32a6.82,6.82,0,0,0-1,2.28c-1.65-.18-3.32-.27-5-.56-25.49-4.52-51.27-6.4-77.07-7.53a444.79,444.79,0,0,0-67.07,2.33c-17.24,1.85-34.3,4.64-51.26,8.13-19.35,4-38.18,9.8-56.89,16,.07-3.26,3.39-6.66-.71-9.78-.83-.63-.42-2.58.25-3.75,1.65-2.87,1.59-6,1.41-9.09a18.88,18.88,0,0,1,3.36-7.69c16.43-24.56,33.19-48.91,49.14-73.77,16.5-25.72,33.74-50.93,50.47-76.48q29.88-45.6,60-91.06,15.75-23.9,31.49-47.8a8.45,8.45,0,0,0,.56-9.3c10.45-4.88,21.74-7.08,32.82-9.74C284,7.8,294.14,4.29,305,5c15,1,28.33,5.82,38.94,17.22,3.32,3.57,8,5.87,12,8.82,2.11,1.56,4.47,3,5,5.91Z"/><path className="cls-polska2" d="M44.9,348.71c18.71-6.21,37.54-12,56.89-16,17-3.49,34-6.28,51.26-8.13a444.79,444.79,0,0,1,67.07-2.33c25.8,1.13,51.58,3,77.07,7.53,1.64.29,3.31.38,5,.56l.19,0c.71.76,1.64.57,2.52.57l2.8.58c1,.87,2.11.48,3.2.46l1.84.46c.91,1,2.08.53,3.16.52l1.86.45c.89,1.06,2.06.56,3.14.56,13.71,3.3,27.63,5.69,41.12,9.88.13,1-.11,2.34.45,2.86,4.08,3.82,3.45,8.71,3.45,13.52q0,147.59-.07,295.16c0,5.66,1.31,10.45,5.32,14.47.86.87,2.32,1.75.73,3.24-3.55-2.8-7.28-5.71-8.4-10.24-1.86-7.5-6.59-12.71-12.76-16.53-8.53-5.28-9.38-14-10.63-22.41-1-6.68-.37-6.65-7.16-6.93-5.47-.23-10.89-1.25-16.4-1-3.18.13-4.87-2.62-7.16-4.15a28.5,28.5,0,0,1-4.39-4.06c-3.6-3.68-7.2-4.32-11.88-1.44s-10.12,2-14.2-1.79c-2.9-2.73-5.3-6-8.22-8.69s-2.56-5.13,0-7.91,3.1-13.59,1.07-16.62a1.3,1.3,0,0,0-1.64-.68,5.81,5.81,0,0,0-1.38.57c-13.68,9.39-25.21,3.45-35.54-5.79a34.49,34.49,0,0,0-16.09-8.16c-3.07-.71-6.11-1.62-9.1-2.62s-4.87-.58-6.7,2.28c-4.47,7-4.63,6.91,2.57,11.73,8,5.37,8,5.88-.5,10.19a17.19,17.19,0,0,0-7,6.1c-3.8,5.84-8.25,5.88-12.67.22-4.7-6-9.46-12-13.82-18.26-3.17-4.54-6.71-8.14-12.42-9.06-3.24-.52-3.76-2.18-2.64-5.31,1.7-4.71,5.66-7.33,8.85-10.63,7.15-7.41,7.43-10.84,1.12-19-.79-1-1.57-1.87-2.88-1.19-13,6.73-24.87.35-37-3-9.92-2.75-19.72-6-29.74-8.34-9.16-2.12-12.57-9-15.17-16.56-1.5-4.36-2.14-9-2.89-13.62-.43-2.66-1.83-3.27-4.15-2.91-4.26.66-8.51,1.39-12.78,1.93-2,.26-2.85,1.26-3.23,3.15-.5,2.43-1.47,4.79-1.82,7.24-.42,3.07-2.18,3.65-4.87,3.64-3,0-3.39-1-2.2-3.59,3.59-7.86,6.92-15.85,10.54-23.7A12.64,12.64,0,0,0,59.77,458c-1.73-8.92-.71-17.91-.9-26.87a10.39,10.39,0,0,0-3.62-8.27c-4.34-3.87-8.36-8.1-12.72-12-1.77-1.57-1.69-3-.9-4.84a12.76,12.76,0,0,0-1.22-12.82c-5.84-8.72-6.59-17.56-1.93-27.22C41.05,360.72,42.21,354.7,44,349A2.8,2.8,0,0,0,44.9,348.71Z"/><path className="cls-polska2" d="M371.86,673c1.59-1.49.13-2.37-.73-3.24-4-4-5.33-8.81-5.32-14.47q.13-147.58.07-295.16c0-4.81.63-9.7-3.45-13.52-.56-.52-.32-1.89-.45-2.86l1.9.4c.33,1.37.81,2.25,2.09.66l1.92.39c1.21,2.17,2.79,3.12,5.12,1.52l1.87.42c.32,1.34.77,2.28,2.07.69,17.61,5.39,35.18,10.93,52.86,16.11a546.52,546.52,0,0,0,78.87,16.79c15.26,2.11,30.69,3.77,46.2,3.31a136.18,136.18,0,0,0,21,0l7,.2c-.8,2.56-3,1.61-4.63,1.73-4.52.33-9.12-.52-14,1,6.28.61,5.68,4.85,5.68,9q-.07,132.72-.19,265.44c0,3.53,2.94,8.12-.68,10.52-2.76,1.83-7,1.49-10.6,1.93A108.13,108.13,0,0,1,546.56,675c-6.5.08-10,4.63-13.83,8.73-2.32,2.52-4.32,3.47-7,.78-.34-.34-.93-.42-1.29-.75-7.23-6.65-15-7-23.64-2.71-4.74,2.37-9.86.77-14.68-.32a9.93,9.93,0,0,0-6.63.87,37.37,37.37,0,0,0-17.9,15.86c-2.89,4.9-5.9,8-12.88,6.83-8-1.4-7.89,1.09-7.78-8s-1.52-15.67-12.11-18.35c-3.47-.88-5.65-3.15-7.46-6.1-3.2-5.25-6.65-10.35-9.88-15.59-1.53-2.47-3-3.61-5.9-1.69-4.71,3.12-9.64,5.91-14.45,8.87-3.09,1.9-3.09,5.36-4,8.3-2.77,8.64-3.08,8.92-12.18,9.27-1.82-1.57.37-5.12-2.94-5.95Z"/><path className="cls-polska1" d="M240.87,20a8.45,8.45,0,0,1-.56,9.3q-15.76,23.88-31.49,47.8-30,45.52-60,91.06c-16.73,25.55-34,50.76-50.47,76.48C82.4,269.49,65.64,293.84,49.21,318.4a18.88,18.88,0,0,0-3.36,7.69,5,5,0,0,1-1.33-.65c-11.77-11.34-13.31-7.15-7-29.71,1.26-4.44,2.75-8.78,2-13.63-1.15-7.2-6.59-11-11.55-15-6-4.8-12.41-8.94-18.53-13.51-3.18-2.37-6.71-4.77-4.59-9.73a.75.75,0,0,0,0-.49c-3.29-8.79,3-12.24,8.89-15.79a11.91,11.91,0,0,0,5.73-7.75c1.21-4.83,2.53-9.66,4.15-14.37,2.23-6.48.08-12.75-.84-19-1.48-10.06-3.11-20.1-4.33-30.2-.47-3.92-1.75-7.7-1.61-11.77s1.67-4.88,5.34-3.53a14.41,14.41,0,0,1,8.08,7c2.16,4,4.78,7.53,8.8,10,2.4,1.47,3.57.82,4.62-1.45a15.78,15.78,0,0,0,.42-12.15A14.52,14.52,0,0,1,45.48,132c.56-1,1-2.46,2.17-2.59,7-.72,9.54-6.26,11.11-11.48,3.46-11.5,11.55-17.13,22.2-20.75C96,92,110.65,85.77,126.41,82.42c13-2.77,25-9,35.75-17.19,9.6-7.29,19.6-13.79,31.54-16.57,8.08-1.88,12.89-8.5,19.16-13s12.57-9.28,19.55-12.86A22.8,22.8,0,0,1,240.87,20Z"/><path className="cls-polska1" d="M575.87,384.06a136.18,136.18,0,0,1-21,0A43.58,43.58,0,0,1,575.87,384.06Z"/><path className="cls-4" d="M373,346.74c-2.33,1.6-3.91.65-5.12-1.52Z"/><path className="cls-polska1" d="M310.86,331.9c-1.09,0-2.23.41-3.2-.46C309,329.64,310.12,329.46,310.86,331.9Z"/><path className="cls-polska1" d="M315.86,332.88c-1.08,0-2.25.5-3.16-.52C314.07,330.61,315.17,330.51,315.86,332.88Z"/><path className="cls-polska1" d="M320.86,333.89c-1.08,0-2.25.5-3.14-.56C319.11,331.6,320.2,331.52,320.86,333.89Z"/><path className="cls-polska1" d="M410.88,47a2,2,0,0,1,2-2h0a2,2,0,0,1-2,2Z"/><path className="cls-polska1" d="M304.86,330.86c-.88,0-1.81.19-2.52-.57C303.56,328.8,304.36,329.17,304.86,330.86Z"/><path className="cls-4" d="M366,344.83c-1.28,1.59-1.76.71-2.09-.66Z"/><path className="cls-4" d="M377,347.85c-1.3,1.59-1.75.65-2.07-.69Z"/><path className="cls-polska1" d="M415.87,42l.69-.62.24.44-.92.19Z"/><path className="cls-polska1" d="M360.88,37l.37.21-.38-.19Z"/><path className="cls-polska1" d="M414.88,43l1-1h0l-1,1Z"/><path className="cls-polska1" d="M413.88,44c.34-.33.67-.66,1-1h0l-1,1Z"/><path className="cls-polska1" d="M413.87,44l-1,1h0l1-1Z"/><path className="cls-polska1" d="M410.87,47l-1,1h0c.33-.33.67-.66,1-1Z"/><path className="cls-polska1" d="M409.87,48l-1,1h0c.33-.33.67-.66,1-1Z"/><path className="cls-polska1" d="M408.87,49l-.21.35.22-.35Z"/><path className="cls-polska1" d="M405.88,51l.21-.36-.21.36Z"/><path className="cls-4" d="M372,675.08c3.31.83,1.12,4.38,2.94,5.95-1.61,1.28-2.72,1-2.92-1.12C371.85,678.31,372,676.69,372,675.08Z"/></g></g>
              <Landscapes mountainVisible={mountainVisible} riverVisible={riverVisible} lakeVisible={lakeVisible} />
          </svg>
        </Col>
      </Row>

      <Row>
        <div className='listOfLandscapes'>
          <div className="listOfLandscapes__slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
            <div className='listOfLandscapes__slider__item'>
              <SvgMountains />
              <button className='listOfLandscapes__slider__item__button' onClick={() => setMountainVisible(!mountainVisible)}>
                  pokaż lub schowaj góry
              </button>
            </div>
            <div className='listOfLandscapes__slider__item'>
              <SvgRivers />
              <button className='listOfLandscapes__slider__item__button' onClick={() => setRiverVisible(!riverVisible)}>
                  pokaż lub schowaj rzeki
              </button>
            </div>
            <div className='listOfLandscapes__slider__item'>
              <SvgLakes />
              <button className='listOfLandscapes__slider__item__button' onClick={() => setLakeVisible(!lakeVisible)}>
                  pokaż lub schowaj jeziora
              </button>
            {console.log(riverVisible)}
            </div>
          </div>
          <img src="/images/arrows/leftArrow.png" className="listOfLandscapes__arrow left" alt="" onClick={() => handleClick('left')} />
          <img src="/images/arrows/rightArrow.png" className="listOfLandscapes__arrow right" alt="" onClick={() => handleClick()} />
        </div>
      </Row>
    </div>
  )
}

export default Polska
