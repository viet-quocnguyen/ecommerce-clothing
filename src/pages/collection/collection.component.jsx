import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionPage = ({ collection }) => {
  return (
    <div className="category">
      <CollectionPreview {...collection} hasCollectionName={true} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
