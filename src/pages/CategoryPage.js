import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "../components/layouts/SectionHeader";
import ProductGrid from "../components/layouts/ProductGrid";

const CategoryPage = ({ categoryName }) => {
  return (
    <>
      <SectionHeader heading={categoryName} />
      <ProductGrid />
    </>
  );
};

CategoryPage.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryPage;
