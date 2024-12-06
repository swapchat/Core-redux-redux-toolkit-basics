import { connect } from "react-redux";
import {
  decrementByOne,
  incrementByOne,
  incrementByPayload,
  reset,
} from "./actions/counterActions";
import { updateProfileName } from "./actions/profileActions";

const App = (props) => {
  const { dispatch, counter, profile } = props;

  const incrementCounter = () => {
    dispatch(incrementByOne());
  };

  const incrementByCounter = (incrementBy) => {
    dispatch(incrementByPayload(incrementBy));
  };

  const decrementCounter = () => {
    dispatch(decrementByOne());
  };

  const resetCounter = () => {
    dispatch(reset());
  };

  const handleProfileNameChange = (e) => {
    const value = e.target.value;
    dispatch(updateProfileName(value));
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

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    profile: state.profile,
  };
};

export default connect(mapStateToProps)(App);
