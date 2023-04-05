import React from 'react';
import './_tags.scss';

const Tags = (props) => {
      return (
            <div className="position-desc">
                  <p className="desc-tag">{props.tags}</p>
            </div>
      );
};

export default Tags;
