import React from 'react';

const imageList = props => {
    const images = props.images.map(({ id, discription, urls }) => {
        return <img key={id} src={urls.regular} alt={discription} />
    });
    return <div>{images}</div>;
};
export default imageList;