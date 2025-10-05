type propsButton = {
  children: React.ReactNode;
  click: () => void;
};

function Button(props: propsButton) {
  return (
    <button onClick={props.click}>
      {props.children}
    </button>
  );
}

export default Button;
