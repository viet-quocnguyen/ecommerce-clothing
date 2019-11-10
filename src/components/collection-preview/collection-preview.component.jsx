import React from "react";
import "./collection-preview.style.scss";

import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ title, items, hasCollectionName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      {/* Items in the collection */}
      <div className="preview">
        {!hasCollectionName
          ? items
              .filter((item, id) => id < 4)
              .map(item => <CollectionItem key={item.id} item={item} />)
          : items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionPreview;
