function Greetings(props) {
  const { lang, children } = props;
  return (
    <div>
    <strong>You have chosen: {lang}; </strong>
    <strong>Hello {children}</strong>
  </div>

  );
}

export default Greetings;
