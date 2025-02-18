

const WelcomeJSX = () => {
  const explanation =
    "JSX allows us to write HTML inside JavaScript and place it in the DOM without using functions like createElement or appendChild.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>{explanation}</p>
    </div>
  );
};

export default WelcomeJSX;
