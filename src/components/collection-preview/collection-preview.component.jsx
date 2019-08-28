import React from "react";
import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      {/* Items in the collection */}
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
