type propsButton = {
  children: React.ReactNode;
  click: () => void;
};

function Button(props: propsButton) {
  return (
    <button onClick={props.click}>
      <h1>{props.children}</h1>
    </button>
  );
}

export default Button;
