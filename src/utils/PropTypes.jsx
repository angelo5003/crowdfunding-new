//PropTypes is a way to check the types of props passed to a component in React. It helps you catch bugs and unexpected errors by warning you if a prop is of the wrong type
import PropTypes from "prop-types";

// the propType of info is required and must be a object. Because in the json file of data it is an array of objects
export const PledgeCardPropType = {
  info: PropTypes.object.isRequired,
};
