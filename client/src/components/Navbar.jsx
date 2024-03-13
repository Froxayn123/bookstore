import PropTypes from "prop-types";

const Navbar = ({ children }) => {
  return (
    <>
      <div className="p-8 flex justify-between items-center bg-blue-600">
        <h1 className="font-madimiOne text-4xl text-white">Book Store</h1>
        {children}
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  children: PropTypes.object,
};
