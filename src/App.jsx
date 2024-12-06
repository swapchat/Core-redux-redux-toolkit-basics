import { connect } from "react-redux";

const App = (props) => {
  const { dispatch, counter, profile } = props;

  const incrementCounter = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const incrementByCounter = (incrementBy) => {
    dispatch({
      type: "INCREMENT",
      payload: incrementBy,
    });
  };

  const decrementCounter = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const resetCounter = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleProfileNameChange = (e) => {
    const value = e.target.value;
    dispatch({
      type: "UPDATE_NAME",
      payload: value,
    });
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
