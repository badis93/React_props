import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div >
      <h1> {props.fullName}</h1>
      <h1> {props.bio}</h1>
      <h1> {props.profession}</h1>
      <button onClick ={props.handleName}> hit the button </button>

  <div>{props.children}</div>
    </div>
  );
}
Profile.defaultProps = {
    fullName: "Badis"
   };

   Profile.propTypes = {
    fullName: PropTypes.string.isRequired
   };
export default Profile;
