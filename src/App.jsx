import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  decrementByOne,
  incrementByOne,
  incrementByPayload,
  reset,
} from "./actions/counterActions";
import { updateProfileName } from "./actions/profileActions";

const App = (props) => {
  const {
    counter,
    profile,
    increment,
    incrementByPayload,
    decrement,
    reset,
    updateProfileName,
  } = props;

  const incrementCounter = () => increment();

  const incrementByCounter = () => incrementByPayload(5);

  const decrementCounter = () => decrement();

  const resetCounter = () => reset();

  const handleProfileNameChange = (e) => {
    const value = e.target.value;
    updateProfileName(value);
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <button onClick={incrementCounter}>Increment Counter</button>
        <button onClick={() => incrementByCounter(5)}>
          Increment By 5 Counter
        </button>
        <button onClick={decrementCounter}>Decrement Counter</button>
        <button onClick={resetCounter}>Reset Counter</button>
      </div>

      <p style={{ textAlign: "center" }}>Counter: {counter?.count}</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleProfileNameChange} />
      <p style={{ textAlign: "center" }}>Profile Details: {profile?.name}</p>
    </div>
  );
};

App.propTypes = {
  counter: PropTypes.shape({
    count: PropTypes.number.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  incrementByPayload: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  updateProfileName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementByOne()),
    incrementByPayload: () => dispatch(incrementByPayload(5)),
    decrement: () => dispatch(decrementByOne()),
    reset: () => dispatch(reset()),
    updateProfileName: (payload) => dispatch(updateProfileName(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
