import React from 'react';
// import PropTypes from 'prop-types';
// const GalleryItem = require('./GalleryItem');

const GalleryList = ({ drawings }) => {
    <>
        <h1> LIST</h1>
    </>;
    // <ul>
    //     {drawings.map((drawing) => {
    //         return (
    //             <li key={drawing.id}>
    //                 <GalleryItem {...drawing} />
    //             </li>
    //         );
    //     })}
    // </ul>;
};

// GalleryList.propTypes = {
//     drawings: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string,
//             createdDate: PropTypes.string.isRequired,
//             timerSetting: PropTypes.number.isRequired,
//             url: PropTypes.string.isRequired,
//         })
//     ),
// };

export default GalleryList;
