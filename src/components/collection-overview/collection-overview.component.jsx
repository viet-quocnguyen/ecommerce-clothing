import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-overview.style.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {Object.keys(collections).map(key => (
        <CollectionPreview key={collections[key].id} {...collections[key]} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
