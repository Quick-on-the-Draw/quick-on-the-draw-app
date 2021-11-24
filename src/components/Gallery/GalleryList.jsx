import React from 'react';
// import { galleryArray } from './galleryData';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';

const GalleryList = ({ drawings }) => {
  return (
    <ul>
      {drawings.map((drawing) => {
        return (
          <li key={drawing.id}>
            <GalleryItem
              id={drawing.id}
              title={drawing.title}
              createdDate={drawing.createdDate}
              timerSetting={drawing.timerSetting}
              url={drawing.url}
            />
          </li>
        );
      })}
    </ul>
  );
};

GalleryList.propTypes = {
  drawings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      createdDate: PropTypes.string.isRequired,
      timerSetting: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default GalleryList;
