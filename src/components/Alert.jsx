const Alert = ({ state, error }) => {
  return (
    <div className={`alert alert_${state} `}>
      {state === 'success'
        ? 'Thank you. I will get back to you as soon as possible.'
        : state === 'error'
        ? error
          ? error
          : 'Sorry, something went wrong you can try using the email icon below or other contact method.'
        : ''}
    </div>
  );
};
export default Alert;
