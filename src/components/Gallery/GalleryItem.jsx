import React from 'react';
// import PropTypes from 'prop-types';

const GalleryItem = ({ drawing }) => {
    return (
        <>
            <h3>{drawing.title}</h3>
            <img src={drawing.url} alt={drawing.title} />
            <div>{drawing.createdDate}</div>
            <div>{drawing.timerSetting}</div>
        </>
    );
};

// GalleryItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string,
//     createdDate: PropTypes.string.isRequired,
//     timerSetting: PropTypes.number.isRequired,
//     url: PropTypes.string.isRequired,
// };

export default GalleryItem;
