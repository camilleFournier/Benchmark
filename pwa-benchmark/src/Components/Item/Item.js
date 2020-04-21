import React from 'react';
import LoremIpsum from '../../utils/loremipsum';

import './Item.css';

function PictureItem(props) {
    const file = require(`./../../utils/pictures/picture${props.index}.jpg`);
    return (
        <div className='item picture'>
            <img src={file} alt="Picture" />
        </div>
    );
}

function TextItem(props) {
    return (<p className="item text">{LoremIpsum[props.index]}</p>);
}

export { PictureItem, TextItem }