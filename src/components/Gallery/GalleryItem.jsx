import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ title, url, createdDate, timerSetting }) => {
    return (
        <>
            <h3>{title}</h3>
            <img src={url} alt={title} />
            <div>{createdDate}</div>
            <div>{timerSetting}</div>
        </>
    );
};

GalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    createdDate: PropTypes.string.isRequired,
    timerSetting: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
};

export default GalleryItem;
