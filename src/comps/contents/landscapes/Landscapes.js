import {useRef, useMemo, useContext} from 'react'
import Tooltip from '@mui/material/Tooltip';
import classNames from 'classnames';

// import { userDetailsContext } from '../PolskaLandscapeButtonMountain';

const Wisla = () => {
    return (
        <div>
            <p>
                hello
            </p>
            <p>
                world
            </p>
            {/* <img src ='./images/slovenia.jpg' /> */}
        </div>
    )
}

export const Landscapes = ({mountainVisible, riverVisible, lakeVisible}) => {
    // const {mountainVisible} = useContext(userDetailsContext)

    return (
        <g>
            <g
                className={classNames('landscapeBox__contour__mountains', mountainVisible && "visible")}
            >
                <path
                    className="cls__rysy"
                    d="M487.87,706.93l-4.73-4.73L479.56,697l2-7.09,1.57-9.18L479.7,676l-12.47-6.38,1,16.85-6,22.57,4.88-22.65-1.15-17.63a59.31,59.31,0,0,0-5.18-3.29,61.21,61.21,0,0,0-6.29-3.09,28.83,28.83,0,0,0-8.74,9.54l-3.8,2.29,16.13,35.12-17.85-35.12-4.73,16.27,3.73,4.66.21,7.88-5.23,8,2.58,2.58"
                />
                <path
                    className="cls__sniezka"
                    d="M126.35,561.7l10.34-6.82,21.95-9.1,8.48-2.09c2-.82,4.15-1.63,6.54-2.38s4.79-1.35,6.94-1.8l1.86.47.69.29.52.4,1.22-.11,1,.46,1.6-.06,1.63.64.75.18.76.75.52.76,1.63-.64.23.69,1.16-.52,3.6.64,4.94,2.38,1.39-.7,5.64,1.46,6.27,2.49,6.91,2.91-1,2.88,7.5,7.57-23.06-1.27-11.21,1.51-5.81-2.15,9.06-2.85.81-1.74,4.71-1.57.52-1.51-4.36-1.16,1.11-.61-9-1.48,8.36-3.37-8.6-1.86L187.39,543l-8.3-2"
                />
                <path
                    className="cls__tarnica"
                    d="M632.27,702.14l5.82,2.57,5-.56L640,702.36l5.15-1.23,7.05-2.63,8.06-1.29,8.39,1.29-3.8,2.63,15,3-2-3.36,8.06,3.36,12.69-1.89,1.87-3.41q-5.85-1.49-12-2.88-7.61-1.72-14.89-3.12H670.1a37.68,37.68,0,0,1-4.93,1.51,37.1,37.1,0,0,1-8.7.95l-11.89.22a16,16,0,0,1-4.25,3.75,15.82,15.82,0,0,1-3,1.4,19.32,19.32,0,0,1-7.83-.17,18.89,18.89,0,0,1-4.2-1.51"
                />
            </g>
            <g 
                className={classNames('landscapeBox__contour__rivers', riverVisible && "visible")}
            >
                <Tooltip title={<Wisla/>} followCursor>
                    <path
                        className="cls__wisla"
                        d="M398.17,62.34V85.06l-6,6.14V144l-6.6,8.6v16l-6,11.67L365.77,187l-30.6,37.46,45.6,19,9,17.19,15,19L433,290.14l48,23.33,4.8,5.52h27l10.8-5.52,17.4,2.45,25.8,23.34,15,43.16,10.8,7.18,5.4,21.49,33,16,9.6,25.79-12,8.59,6.6,73.68-21,25.79L583,580.56l-21.6,8-7.2,8.6h-9L532,611.87h-15.6l-9,8.6h-6.6l-2.4,7.37h-30.6l-5.4,6.31-12.6,2.9-13.2-8.6L423.37,626l-9.6.62-7.2,10.44-24,6.14.6,12.28,2.4,22.1,12.6,8.6"
                    />
                </Tooltip>
                <Tooltip title='warta warta warta warta warta warta warta warta warta warta warta warta warta' followCursor>
                    <polyline
                        className="cls__warta"
                        points="48.92 172.26 28.92 215.46 17.4 238.66 40.12 279.46 40.2 291.46 38.6 305.86 36.8 322.29 43.6 335.86 47.4 351.46 56.92 351.46 100.92 351.46 129.72 370.66 129.72 397.06 169.72 409.06 180.12 420.26 180.12 441.86 180.12 465.06 210.52 465.06 294.52 536.26 298.52 545.86 298.52 558.66 305.72 569.86 320.92 585.86 320.92 609.86 328.92 632.26"
                    />
                </Tooltip>
                <Tooltip title='odra odra odra odra odra odra odra odra odra odra odra odra odra odra odra' followCursor>
                    <polyline
                        className="cls__odra"
                        points="43.6 272.66 83.2 272.66 95.8 266.66 113.8 276.26 149.8 271.46 182.2 266.66 203.8 276.26 220.6 283.46 220.6 312.86 229.6 321.86 217.6 331.46 219.4 344.66 241.6 347.66 266.8 341.66 314.2 335.66 345.4 330.86 367 347.66 360.4 366.26 352.6 385.46 355.6 415.46 363.4 456.26 364 477.86 396.2 489.26 412.6 506.66 409 527.66 412.6 553.46 427.6 562.46"
                    />
                </Tooltip>
            </g>
            <g 
                className={classNames('landscapeBox__contour__lakes', lakeVisible && "visible")}
            >
                <path
                    className="cls__jeziorak"
                    d="M453.62,157.19c.46.13.89.3,1,.85-.14.12-.26.27-.47.28a3.83,3.83,0,0,0-3,2.12,4.09,4.09,0,0,1-.68.7,4,4,0,0,0-1.17,1.16.94.94,0,0,1-.92.53c-.24,0-.48,0-.57.29,0,.12-.12.24-.24.23-1.14-.08-1.25,1.1-1.94,1.58a.65.65,0,0,0-.14.79c.55,1.43.1,2.89.05,4.34a2.08,2.08,0,0,1-.46,1,3.43,3.43,0,0,0-.22,2.64,1.49,1.49,0,0,1-.22,1.15c-.08.14-.31.31-.28.37.27.58,0,1.33.6,1.8.27.22.52.29.61-.14.06-.27.06-.52.43-.51a.66.66,0,0,1,.64.45.6.6,0,0,1-.22.75c-.11.08-.25.13-.37.2a1.33,1.33,0,0,0-.77,1.29,3.81,3.81,0,0,1-.37,2,14.42,14.42,0,0,0-.61,1.65,2.09,2.09,0,0,1-2.31,1.5,3.55,3.55,0,0,0-2.51,1.2c-.19.15-.13.44-.1.67.21,1.79-.71,2.9-2.13,3.83a11,11,0,0,1-2.94,1.34,2,2,0,0,0-1.06,1.07,7.45,7.45,0,0,1-.89,1.32c-.29.27-.68-.08-1,.17a.35.35,0,0,0-.33-.12l-1.78.09c-.53-.06-.64-.4-.57-.85s.4-.59.81-.57a2,2,0,0,0,1.16-.2.45.45,0,0,1,.39,0c.81.5.71-.11.72-.57,0-.24,0-.47,0-.7a.68.68,0,0,1,.74-.75,1,1,0,0,0,.81-.3h.11a.27.27,0,0,0,.3-.25l1.64-.07-.18-.44.22-.25c.32.37.79.38,1.22.5s.56-.11.39-.42a1.17,1.17,0,0,1-.05-1c.13-.1.25-.26.39-.27.78-.09.8-.66.77-1.22a3.68,3.68,0,0,1,.25-2.12c.28-.54.1-.63-.52-.75-.42-.08-1-.33-1-.86a11.33,11.33,0,0,0-.29-2.84c-.05-.17-.11-.49.13-.56s.34.18.4.39c.1.38.34.24.41,0,.24-.68,1-.63,1.41-1,.27-.25.7-.17.71.37,0,.38,0,.75,0,1.13s.06.53.37.6.56.17.45.55-.28.67-.73.61-.8.36-1.05.76c-.14.23-.08.37.18.37a2.72,2.72,0,0,0,1.38-.14,2.69,2.69,0,0,1,1.38-.12c1,0,1.09-.13,1.12-1.08,0-.24,0-.48.2-.65a2.38,2.38,0,0,0,.57-2.45c-.14-.79-.13-1.57-.26-2.34.21-1.08-.45-2.07-.28-3.14,0,0-.14-.11-.21-.16a.49.49,0,0,0-.63.26,13.11,13.11,0,0,1-.77,1.17c-.42.61-.94.59-1.31-.05-.16-.26-.08-.44.18-.56.5-.21.54-.61.56-1.09a9.86,9.86,0,0,1,.11-2.36c.13-.44-.4-.63-.71-.46-.89.48-1.4-.18-1.93-.62a1.29,1.29,0,0,0-1.29-.4,1.33,1.33,0,0,1-1.73-1.39c0-.3.29-.33.54-.28.59.13.75-.2.75-.69s0-.8.33-1.09.05-.44-.09-.58a2.39,2.39,0,0,1-.67-1.11c-.19-.59-.43-.6-1.26-.14-.18-.11-.41.16-.57-.08s-.16-.11-.23,0a1.88,1.88,0,0,1-.86-.29c.08-.31-.08-.63.1-1a1.42,1.42,0,0,0-.43-1.69c-.18-.14-.29-.3-.22-.46a1.77,1.77,0,0,0-.45-2.2c-.36-.34-.53-.79-1.12-.74a.59.59,0,0,1-.45-.17c-.45-.44-.9-.55-1.37,0a.55.55,0,0,1-.84-.7,8.08,8.08,0,0,1,.63-1.15.78.78,0,0,0,.1-1,2.66,2.66,0,0,0-2.13-.56,2.18,2.18,0,0,1-2.71-.55c-.08-.08-.12-.24-.21-.27-.69-.24-.69-.73-.53-1.3s-.21-.63-.49-.84-.61-.51-.94-.22-.82.3-1.21.49a2.07,2.07,0,0,1-1.45,0c-.79-.27-.45-.92-.34-1.46a.85.85,0,0,1,1.45-.54c.53.47.65.14.78-.31a4.74,4.74,0,0,1,.55-1.34c.38.1.79-.08,1.15.16a.31.31,0,0,0,.29.14l.11,0c.13.41.35.5.74.26.63-.4,1.28-.82,2.06-.35,1-.5,1.63.18,2.27.8.25.24.62.12.95.08,1.05-.11,1.27.14,1.19,1.16a4.23,4.23,0,0,0,.32,2.2,2.69,2.69,0,0,1-.41,3.2.81.81,0,0,0-.08,1c.19.28.49.18.77.06a.51.51,0,0,0,.24-.33c.16-.42.41-.52.79-.22.21.16.45.45.71.11a.71.71,0,0,0,0-1,3.67,3.67,0,0,1-.52-.82c-.14-.28.06-.4.22-.51s.34-.05.46.16a6,6,0,0,0,.46.7.33.33,0,0,0,.49.09.33.33,0,0,0,.06-.5,5.87,5.87,0,0,1-.37-.59,3.85,3.85,0,0,1-.65-2.09c.05-1,0-2,0-3,0-.47-.32-.82-.3-1.28,0-.74-.1-1.47,0-2.23a2.26,2.26,0,0,0-1.48-2.41c-.51-.24-1.09-.67-.77-1.27s.75-1,1-1.58c.09-.22.58-.24.68.19a8.12,8.12,0,0,0,.22.81c.17.43.22.93.92.64a.74.74,0,0,1,.7.25c.38.6,1.16,1,1,1.9a.8.8,0,0,0,.11.47c.54,1-.24,1.48-1,1.52s-.85.08-.59.84c.37,1.1.43,1.14,1.61,1.14q.63,0,1.26,0a.9.9,0,0,0,.47-.1c.53-.4.52-.41,1.11-.05l-.06.12a7.23,7.23,0,0,1-1.45,2.07c-.19.2.35,1.3.6,1.29a1.3,1.3,0,0,0,1.12-.72c.48-.69.38-1.55.91-2.22.36-.47-.35-.26-.57-.51.64-.54.83-1.6,2-1.59a.25.25,0,0,0,.25-.21c.15-1,1.07-1.5,1.35-2.41a1.56,1.56,0,0,1,1.44-.82,2,2,0,0,1,.11,1.65c-.61.65-.35,1.54-.75,2.24-.09.17-.1.43-.29.53-.61.32-.39.77-.21,1.19.29.7.12,1.28-.61,1.47a8.63,8.63,0,0,0-2.85,1.9c-.27.19-.47.42-.86.28a.55.55,0,0,0-.75.34,3.87,3.87,0,0,1-1.11,1.94.42.42,0,0,0,0,.47c.48,1.12.53,2.08-.72,2.8-.37.22-.27.76.06,1.11s.71.7.4,1.39c-.25.53.37.81.78,1.07l.15.29a1.49,1.49,0,0,0,1.45,1.08c.59-.13.9.35,1.3.54a10.92,10.92,0,0,0,1.64.64,1.16,1.16,0,0,1,.82,1.09,1.18,1.18,0,0,0,1.3,1.15c.37,0,.58-.07.69-.5a2.48,2.48,0,0,1,.6-1.17,2.71,2.71,0,0,0,.45-.84c.1-.26-.09-.65.18-.79a5.82,5.82,0,0,1,1.25-.37,1.61,1.61,0,0,1,.49,0,1.36,1.36,0,0,0,1.49-.65c.27-.45.94-.54,1.18-1,.59-1,1.72-1.37,2.46-2.19A1.17,1.17,0,0,1,453.62,157.19ZM440,165.89a1.34,1.34,0,0,0-.05-.35,8.42,8.42,0,0,1-.8-2.9c0-.15-.1-.37-.21-.31a1.9,1.9,0,0,1-1.58,0c-.16-.06-.33.15-.39.34a1.89,1.89,0,0,0,.06.82c.08.57.67.84.73,1.39a1.7,1.7,0,0,0,1.47,1.58C439.59,166.52,440,166.52,440,165.89Zm3.38.82c0-.31-.1-.53-.51-.49s-.57-.12-.69-.51a5.69,5.69,0,0,0-.52-1,.27.27,0,0,0-.27-.18.26.26,0,0,0-.24.29c0,.21-.05.48,0,.62.5.65.56,1.52,1.07,2.17.09.12.24.29.29.2C442.74,167.45,443.37,167.36,443.33,166.71Zm-1.11,2.56c0,.41.12.79.51.82s.48-.49.53-.78-.25-.52-.59-.55S442.2,169,442.22,169.27Zm.51,1.81c0-.31-.18-.4-.37-.35s-.63.23-.66.58a.48.48,0,0,0,.45.47C442.64,171.79,442.46,171.22,442.73,171.08Z"
                />
                <path
                    className="cls__sniardwy"
                    d="M582.46,178.09a5,5,0,0,1-.06-.52c0-.28,0-.38-.1-.45a.42.42,0,0,0-.36-.08c-.16,0-.26-.08-.37-.19-.35-.34-.22-.77-.22-1.16a1.36,1.36,0,0,0-.65-1.3,2.46,2.46,0,0,1-1-1.57c-.1-.34,0-.79-.43-1a2.61,2.61,0,0,1-1.14-1.27c0-.39-.06-.78.3-1.13s0-.61-.32-.71-.9.06-1.23-.32a7.19,7.19,0,0,0,.22-1.79,1,1,0,0,0-.41-.8c-.11-.05-.12-.15-.14-.25a.85.85,0,0,0-.63-.6,1.14,1.14,0,0,1-.64-.47c-.29-.4-.71-.69-1-1.11v-2.64a1.54,1.54,0,0,1,.7,1.21c0,.34,0,.68,0,1s.2.57.6.48a.46.46,0,0,1,.55.13c.17.2.34.15.51,0s.23-.23.38-.12.45.1.68.12a2.64,2.64,0,0,1,1.24.15.43.43,0,0,0,.51-.16.46.46,0,0,1,.59-.09.35.35,0,0,0,.54-.32.8.8,0,0,0-.08-.51,2.36,2.36,0,0,1-.28-1.35,1.05,1.05,0,0,0-.84-1,.74.74,0,0,1-.26-.15c-.58-.37-1.07-.92-1.84-.91-.17,0-.22-.14-.21-.28a.69.69,0,0,0-.41-.71c-.28-.16-.57-.25-.21-.6,0,0,0-.1,0-.16a1.18,1.18,0,0,0-.88-.87.54.54,0,0,1-.33-.18,2.11,2.11,0,0,1-.17-1.74,3.11,3.11,0,0,0,.55-1.61c.07-.33.37-.49.37-.76a1,1,0,0,1,.54-.84,4.36,4.36,0,0,0,1.08-1.26,2.37,2.37,0,0,1,1-.79c.3-.13.48.13.7.26a.48.48,0,0,0,.17,0c.37,0,.44.15.47.49s.12.61.43.7.36-.26.51-.44.34-.57.6-.52a2.53,2.53,0,0,1,1.25.73,4,4,0,0,0,.85.8,1.13,1.13,0,0,1,.59.66.51.51,0,0,0,.11.22,2.18,2.18,0,0,1,.89,1.38.26.26,0,0,0,.18.22,2.92,2.92,0,0,0,1.28.35,14.91,14.91,0,0,0,2-.14,2.62,2.62,0,0,0,1.66-1.14,5.11,5.11,0,0,1,1.2-1.13c.35-.22.57-.44.52-.78-.09-.6.4-.79.72-1,.49-.31,1.15-.37,1.6-.77a1.8,1.8,0,0,1,1.31-.33h1.75a1.06,1.06,0,0,1,.77.26,5.3,5.3,0,0,0,2.35,1.13,4.87,4.87,0,0,1,1.88.81.43.43,0,0,0,.28.09,6.61,6.61,0,0,1,2,.19,6.79,6.79,0,0,1,2.44,1c.35.23.66.62,1,.72a6.1,6.1,0,0,0,2.12.41c.3,0,.54-.05.62-.39.42-.39.64-.44.81,0a1.48,1.48,0,0,0,1.21.9c0,.19-.06.38.15.56.37.31.89.41,1.22.8.09.11.23,0,.29-.09a1.85,1.85,0,0,1,.73-.88,1,1,0,0,1,.77-.16c.48.18.34-.14.34-.36s-.18-.28-.3-.4-.43-.32-.36-.51c.17-.46.31-1,.8-1.2.28-.14.33-.3.22-.55s0-.36.28-.36a11.51,11.51,0,0,1,2,.36s.11,0,.11.06c0,.39.44.47.63.74s.42.31.63,0c.06-.1.07-.23.22-.24.41,0,.5-.42.66-.67a15.83,15.83,0,0,1,.72-1.57,1,1,0,0,0,0-1c-.19-.5.23-.6.47-.84s.37,0,.52.11.14.1.22,0,.14-.13.07-.23,0-.32.08-.47a3.53,3.53,0,0,0,.35-.59c.18-.53.31-.62.79-.38.31.15.47,0,.61-.24a.38.38,0,0,0-.08-.58c-.26-.22-.24-.36.08-.49a2.28,2.28,0,0,1,.69-.07c.12,0,.29,0,.35-.11a.28.28,0,0,1,.41-.2.46.46,0,0,1,.33.41,1.71,1.71,0,0,0,.3.86,2,2,0,0,1,.41,1.48c0,.13,0,.31.15.36a.32.32,0,0,0,.38-.15c.12-.18.21-.19.37,0a2.38,2.38,0,0,0,1.64,1,1.53,1.53,0,0,1,.73.23c.26.23.6,0,.88.19a1.1,1.1,0,0,0,1,0c.37-.16.65-.53,1.07-.54a.73.73,0,0,0,.67-.39,3,3,0,0,0,.44-1.39c.11-.19.43-.28.24-.59l0,0c.18-.15.28.08.42.09a.65.65,0,0,1,.32.29,5.47,5.47,0,0,0,1.25,1.29,2.36,2.36,0,0,1,1.07,1.64,1,1,0,0,0,.12.36,1,1,0,0,1-.18,1.33,5.58,5.58,0,0,0-.49.77c-.13.19-.13.47-.34.6a.73.73,0,0,0-.27,1,3.58,3.58,0,0,1-.1,1.92.35.35,0,0,1-.19.24,3.64,3.64,0,0,0-1.23,1.08c-.14.15-.31.21-.44,0-.25-.32-.52-.26-.87-.2a.82.82,0,0,0-.77.75c-.55.34-1.11,0-1.65-.05a4.06,4.06,0,0,0-.71.08c-.1,0-.22.14-.32.07-.61-.38-1.38.17-2-.37-.15-.13-.58.21-.57.45,0,.69,0,.8.45.84a4.58,4.58,0,0,1,.64,0,3.67,3.67,0,0,0,1.89-.09.39.39,0,0,0,.36.06c0,.07,0,.18.12.13.34-.2.64-.05.95.06l0,.16h0l0,0v0c.42,0,.49-.23.42-.57a.07.07,0,0,0,0,0h0l.35-.29c.26.33.37.76.71,1-.22.34-.61.25-.91.33s-.77.58-1.32.45c-.2,0-.39-.23-.66-.09.24.13.19.34.17.52,0,.38.17.53.49.5s.33.17.26.42c-.17.59-.32,1.19-.47,1.78,0,.23-.34.18-.43.39-.19.44-.56.46-1,.37a1.78,1.78,0,0,0-1.16.06c-.12.06-.19,0-.28-.09a1.21,1.21,0,0,0-1.75,0c-.18.24-.44.44-.69.34-.57-.22-1,.08-1.53.2a.4.4,0,0,0-.22.12,4.52,4.52,0,0,0-.73,1.09c-.16.3-.28.71-.59.83-.55.21-.76.65-1,1.08a3.55,3.55,0,0,1-.4.47c-.39.41-1,.58-1.24,1.08a6.18,6.18,0,0,1-.9,1.45c-.13.15-.3.29-.43.45-.29.35-.2.82-.47,1.15a3.26,3.26,0,0,0-.71,1.7c0,.26-.35.41-.28.72-.39,0-.39.37-.59.55a.54.54,0,0,0-.1.71c.1.24.35.42.41.65a2.56,2.56,0,0,0,.91,1.2c.58.54.62.5.16,1s-.49.48-1,.19c-.31-.16-.52-.45-.83-.57-.53-.19-1.16-.13-1.52-.7,0,0-.14,0-.21,0-.56-.2-1.21-.16-1.67-.63a.45.45,0,0,0-.46-.05c-.44.16-.87.33-1.29.52a.45.45,0,0,0-.28.58,1.35,1.35,0,0,1,0,1.08c-.13.37-.32.62-.74.61a4.44,4.44,0,0,1-1.09-.07,1,1,0,0,1-.81-1,2.71,2.71,0,0,0-.46-1.65c-.13-.23-.38-.4-.42-.69a.86.86,0,0,0-.59-.69,1.44,1.44,0,0,1-.42-.23,1.75,1.75,0,0,0-2.21-.09,9.37,9.37,0,0,0-1.48,1.6c-.4.62-.25,1.07.48,1.24a3.61,3.61,0,0,0,1.39,0,1,1,0,0,1,.63.08,7.6,7.6,0,0,0,2.76,1.13c.3,0,.43.48.31.79a1.37,1.37,0,0,1-1,.74c-1.24.39-1.4.74-1.3,1.89a3.7,3.7,0,0,1-.5,2,6,6,0,0,0-.38,1.59.39.39,0,0,0,.14.36,19.41,19.41,0,0,1,1.55,1.72c.31.35.78.55,1,1a.38.38,0,0,0,.32.21,1.64,1.64,0,0,1,.67.27h-3.51c0-.33-.24-.26-.44-.27a2,2,0,0,1-1.22-.19,10.43,10.43,0,0,0-2.48-1.29c-.9-.31-1.75-.79-2.66-1.12a7,7,0,0,0-2.23-.66.78.78,0,0,1-.49-.18A9.25,9.25,0,0,0,594,184c0-.26-.21-.37-.36-.51s0-.24-.07-.36.06-.09.11-.08a13.83,13.83,0,0,0,1.44,0,.38.38,0,0,1,.34.15c.06.08.12.25.25.11s0-.21-.07-.31a.62.62,0,0,1,.13-.73l0,.06,0-.06c0-.18-.08-.34-.26-.36a.65.65,0,0,0-.78.7c0,.34-.11.48-.44.27.16,0,.32,0,.32-.26s-.17-.24-.32-.27c0-.13.23-.05.28-.16s.06-.26-.09-.21c-.52.19-1-.07-1.55.05a.53.53,0,0,1-.58-.18.48.48,0,0,0-.62-.11,2.22,2.22,0,0,1-1,.27.24.24,0,0,1,0-.32c.23-.33,0-.42-.25-.39a2.12,2.12,0,0,1-1.38-.41.85.85,0,0,0-.69-.17,3.58,3.58,0,0,1-1.13,0c-.35,0-.86-.53-.8-.78.16-.7-.5-.76-.66-.95-.31-.34-.94-.62-2.43-.34C582.7,178.5,582.51,178.27,582.46,178.09Zm33.8-3.76c.1-.25.2-.5-.09-.7-.09-.24-.22-.38-.46-.14s-.26.08-.41.08h-2.19c.48.17.34.55.34.86l-.48,0c.22.07.36.07.48,0a10.59,10.59,0,0,0,1.59.08c.14,0,.31,0,.34.17s.08.28.29.21.54,0,.5-.37Zm-4-.61-.05-.05,0,0,.08,0a.67.67,0,0,1-.07.11c-.25.21.13.42,0,.64,0,0,.19.05.27,0s.1-.34.12-.51a.27.27,0,0,0-.08-.24l0-.08,0,0,.06.06a1.42,1.42,0,0,1-.08.69C612.23,174.17,612.41,173.9,612.22,173.72Zm12.88-16.67c0-.27-.26-.27-.42-.3s-.29.11-.31.3a3.29,3.29,0,0,1-.16.44c-.17.41,0,.63.42.6a23.78,23.78,0,0,0,2.67,0,.41.41,0,0,1,.37.06c.06.06.1.1.15,0,.2-.43.18.18.34,0,0-.14,0-.29,0-.45,0-.45-.15-.58-.6-.5-.21,0-.53.09-.63-.06a.34.34,0,0,0-.5-.12A2.42,2.42,0,0,1,625.1,157.05Zm-9.46,15.79h0c0,.07.06.15.14.1s.08-.23.1-.35l0,0,.46-.22c-.48-.36-1.08,0-1.56-.37-.1-.07-.12.08-.12.16a3.84,3.84,0,0,0,0,.48c0,.29-.15.35-.39.32a.37.37,0,0,1-.34-.44c-.13.12,0,.32-.21.38a.72.72,0,0,1,.11-.73,1,1,0,0,1-.74-.16c-.09-.06-.23-.13-.33,0-.46.38-.72.09-1-.27-.09-.12-.23-.16-.27.05a.53.53,0,0,1-.52.44.19.19,0,0,0-.19.24l0,0a.49.49,0,0,0-.31-.09l0,0a5.67,5.67,0,0,0-1.64-.31s-.08.09-.13.1a.76.76,0,0,1-.74-.1c-.32-.29-.48-.23-.67.19,0,.09-.09.18-.14.27s-.46.25-.33.48.41.1.62.13a.77.77,0,0,0,.26,0,19.69,19.69,0,0,1,2.66-.06c.29,0,.63-.21.82-.13a1.62,1.62,0,0,0,1.05.19c.39-.11.76.24,1.15,0a1.12,1.12,0,0,1,.51-.11,2.1,2.1,0,0,1,.89.16.36.36,0,0,0,.45-.15c.13-.2,0-.21-.11-.28a.26.26,0,0,1-.06-.33c.05-.12.16-.19.28-.1s.22-.09.31,0S615.49,172.67,615.64,172.84Zm-18.16,3.26c0-.48-.06-.52-.49-.3-.18.09-.33.23-.56.21s-.49.19-.63.4a.56.56,0,0,0,0,.62c.15.2.39.07.56,0s.39-.3.65-.33S597.5,176.44,597.48,176.1Zm-.18,1.77a.62.62,0,0,0-.39-.56c-.16-.08-.27.14-.35.26s-.27.47-.41.71a.3.3,0,0,0,.07.39.36.36,0,0,0,.44.1A1.58,1.58,0,0,0,597.3,177.87Zm14.33-4.31-.16.26c-.23-.3-.54,0-.8-.1s-.44,0-.44.28.08.57.45.49.73.06,1.09-.05C611.61,174.18,611.76,173.89,611.63,173.56Zm5.81-.31c.25-.05.58.07.55-.37s-.31-.39-.54-.44-.53.29-.5.56S617.27,173.2,617.44,173.25Zm13.34-13.18.12,0c0-.17,0-.34,0-.51s0-.24.12-.2.17,0,.16-.08a.21.21,0,0,0-.16-.22c-.12,0-.16.07-.17.15C630.83,159.51,630.81,159.79,630.78,160.07Zm-16.55,12a.17.17,0,0,0,.24.11.08.08,0,0,0,0-.14A.19.19,0,0,0,614.23,172.05Z"
                />
                <path
                    className="cls__lebsko"
                    d="M279.48,20.61a.87.87,0,0,0-.22.72c0,.29-.13.4-.42.34s-.35,0-.5-.15-.24,0-.26.12a2.69,2.69,0,0,0,0,.4,1.14,1.14,0,0,1-.89-1c0-.22-.16-.41-.12-.64s-.06-.11-.12-.14a1.14,1.14,0,0,1-.38-.23.14.14,0,0,0-.21,0,.14.14,0,0,1-.2,0c-.06-.06-.05-.11,0-.18s-.05-.27-.16-.37a.79.79,0,0,0-.77-.21c-.06,0-.12,0-.15,0s0-.13.09-.16.09-.05.07-.11-.08,0-.13,0l-.22,0c-.12,0-.23,0-.22.17s-.19.11-.19.27l.28-.05c.05,0,.14,0,.16,0s0,.23,0,.25c-.22.12-.12.3-.13.47.14,0,.17-.15.28-.15h0a1.24,1.24,0,0,0,0,.27c0,.07,0,.12-.06.12s-.18.1-.18.22,0,.17.1.18.27.06.39,0l0-.06c.07-.09.13-.21.26-.13s.14.17.05.3,0,.14,0,.16c.18.16.07.39.16.57a.15.15,0,0,1-.05.22.15.15,0,0,1-.21-.09.26.26,0,0,0-.07-.1c-.06-.06-.11-.2-.21-.14s0,.15.05.22a1,1,0,0,1-.14.74.27.27,0,0,1-.3.1.24.24,0,0,0-.29.21.26.26,0,0,0,.24.27c.25,0,.27.22.31.4a.28.28,0,0,1-.13.3c-.13.08-.21,0-.27-.11s-.28-.15-.35-.32-.16-.05-.23,0a.22.22,0,0,0-.12.28.48.48,0,0,1-.14.56.24.24,0,0,0,.06.4l.14.11c.2.27.05.58-.33.62-.19,0-.28.08-.26.27s0,.13-.07.19a8,8,0,0,0-.54,1.48c0,.1-.08.19-.18.19a2.06,2.06,0,0,0-.73.26s-.07.05-.09,0c-.25-.16-.58-.12-.82-.34a2.2,2.2,0,0,0-.61-.48c-.09,0-.08-.12-.08-.19s0-.42,0-.63-.05-.66-.44-.8c-.1,0-.11-.19-.22-.26a3.59,3.59,0,0,0-1.34-.55c-.16,0-.42,0-.46-.3,0-.08-.11-.07-.17-.06a4,4,0,0,0-.6,0c-.11,0-.24-.11-.36,0s-.06-.05-.06-.1,0-.2,0-.38a1.13,1.13,0,0,1-.22.44c-.05,0,0,.1,0,.16a.25.25,0,0,1,.05.16,1.63,1.63,0,0,0,.26,1.08s0,0,0,.05c-.15.25.12.37.18.56a.83.83,0,0,1-.08.79.94.94,0,0,0,0,.77.25.25,0,0,1-.06.27c-.16.19-.3.38-.47.56a.59.59,0,0,0-.12.5.61.61,0,0,1-.11.45.21.21,0,0,1-.27.07c-.1,0,0-.13,0-.19a.56.56,0,0,0-.13-.65c-.06-.07-.16-.13-.2,0s0,.1-.09.1-.1-.05-.11-.11-.12-.17-.24-.07a.56.56,0,0,0-.11.8,4.21,4.21,0,0,1,.28.45c.11.21.16.21.33,0a2,2,0,0,0,.41.82c.11.11,0,.31,0,.47s0,.29-.18.36,0,.2-.07.23c-.29.17-.16.65-.55.74-.06,0-.06.06,0,.11a.6.6,0,0,1-.05.49l-.08,0a1.26,1.26,0,0,0-.64,0,3.43,3.43,0,0,1-1.35.08.23.23,0,0,1-.19-.07.45.45,0,0,0-.41-.13c-.34,0-.68.16-1,0-.07,0-.14,0-.16.11a.16.16,0,0,0,.07.22l.3.16c-.13.12-.3.12-.37.26-.19.37-.35.76-.57,1.12s-.53.44-.55.81c-.33.17-.62,0-.92-.1a1.28,1.28,0,0,1-.63-.3,5,5,0,0,0-.75-.56c-.41-.27-.75-.63-1.17-.88-.13-.08-.08-.29-.27-.33s-.14-.07-.21-.06c-.34.08-.48-.16-.6-.39a.33.33,0,0,0-.36-.22c-.22,0-.38-.14-.58-.2a4.38,4.38,0,0,1-1.73-.85c-.22-.19-.57-.31-.6-.69,0-.1-.16-.08-.21-.16-.19-.32-.49-.55-.7-.86-.07-.11-.18-.21-.27-.33a2.46,2.46,0,0,1-.35-.91,1,1,0,0,0-.2-1.06c0-.05,0-.13,0-.15-.24-.2-.17-.47-.18-.73a.83.83,0,0,0-.7-.75c-.78-.13-1.58,0-2.36-.11L246,25.88a.89.89,0,0,1-.45-.26,1.56,1.56,0,0,0-.67-.33c-.13,0-.13-.16-.23-.21a3.87,3.87,0,0,1-.34-.21.56.56,0,0,1-.29-.49,6.86,6.86,0,0,1,.12-1.12c0-.22.27-.29.41-.41a20,20,0,0,0,1.69-1.21,1.83,1.83,0,0,1,.92-.55,2.26,2.26,0,0,1,1.41-.08.37.37,0,0,0,.38-.08,2.27,2.27,0,0,1,1.16-.52.12.12,0,0,0,.1-.09h0a3.64,3.64,0,0,1,1-.11,1.39,1.39,0,0,0,.54-.09c.3.1.6.18.89.3s.25.3.4.43.21.21.39.09.2-.1.2.1.15.09.22.08a1.2,1.2,0,0,1,.84.23c.23.13.29.09.3-.18s0-.36-.36-.34-.37,0-.47-.24-.2-.06-.3-.07-.2,0-.24-.11.07-.17.13-.22.23-.17.34-.16c.39,0,.75-.12,1.14-.12a2,2,0,0,0,1.4-.64,2.52,2.52,0,0,1,.88-.55,5.42,5.42,0,0,1,.56-.22.8.8,0,0,0,.51-.15,5.5,5.5,0,0,1,.82-.36,9.89,9.89,0,0,1,2-.41c.48-.1,1-.15,1.46-.24a1.11,1.11,0,0,1,.47.06.53.53,0,0,0,.63-.16s.09-.09.12-.08c.3.05.58-.1.87-.07.11.17.31.1.46.17s.34,0,.47.19.14,0,.21,0a.83.83,0,0,1,.51-.23c.1,0,.13-.07.18-.15a.76.76,0,0,1,.26-.36c.23-.15.42,0,.61,0a1,1,0,0,0,.66,0,6.75,6.75,0,0,0,1.14-.49,2.19,2.19,0,0,1,1-.26,1,1,0,0,0,.33-.07,6.11,6.11,0,0,0,1.29-.68.93.93,0,0,1,.8,0,2,2,0,0,0,.93.25c.26,0,.41-.2.65-.25a8,8,0,0,0,1.24-.36.14.14,0,0,1,.19.07c.07.15.22.18.33.27s.23.06.34,0a.85.85,0,0,1,.6-.21c.5,0,1,0,1.51,0,.1,0,.21,0,.29-.07s.37-.13.56-.12.17.19.25.29a2.37,2.37,0,0,1,.32.5c.13.22.09.3-.16.32a.26.26,0,0,0-.27.27c0,.14,0,.23.19.23s.21,0,.13.17,0,.22.17.24.31.09.23.33a.2.2,0,0,0,0,.17,7.86,7.86,0,0,1,.57,1.12v.08c-.13.06-.1.18-.1.28s-.07.27-.11.4a2.6,2.6,0,0,1-.29.66.39.39,0,0,0-.11.06c-.25.19-.4.51-.75.58C279.46,20.47,279.48,20.55,279.48,20.61Zm-17.12,8.82.05.05c.09.16.15.07.21,0s.22.11.3,0,.14,0,.21,0,.11-.19.25,0a1.17,1.17,0,0,0-.26-.48c-.13,0-.27.06-.4-.05s-.07,0-.1.05l-.21.17C262.28,29.24,262.3,29.33,262.36,29.43Zm1.37.05c.13-.1.13-.2,0-.31l-.08,0v0l.09,0v.3s-.05,0,0,0Zm.31-.1c.11-.15.12.13.23.05a.17.17,0,0,0-.15-.18c-.08,0-.08.07-.09.13l-.13-.21a.32.32,0,0,0,.06.27C264,29.52,264,29.43,264,29.38Zm-2.33,0s0-.05,0,0l0,0c0,.15.1.1.18.12a.11.11,0,0,0,.13-.08c0-.17-.15-.15-.18-.26Zm-1.18.2c.19.11.39,0,.58,0-.13,0-.18-.08-.16-.21s.27-.21.08-.37c.16-.14,0-.1,0-.09l-.52.11c-.2-.16-.15.1-.21.14l-.2-.18c-.13-.09-.45-.05-.46,0s0,.28,0,.42a.14.14,0,0,0,.11.13c.08,0,.11,0,.13-.1s.12-.14.22,0A.35.35,0,0,0,260.53,29.57Zm14.31-8.34c-.15,0-.23,0-.23.16s0,.16.11.13.27,0,.28-.2S274.88,21.24,274.84,21.23Zm-12.95,2c.05.14.08.31.23.36s.18,0,.24-.19C262,23.68,262.09,23.24,261.89,23.26Zm1.85-.64c.05,0,.07,0,.06-.08s-.05-.16-.15-.17-.1,0-.08.09A.23.23,0,0,0,263.74,22.62Zm-2.29,6.44c0,.09.09.11.18.11S261.56,29,261.45,29.06Z"
                />
            </g>
        </g>
    )
}

export default Landscapes