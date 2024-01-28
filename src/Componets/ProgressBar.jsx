import PropTypes from 'prop-types';

const ProgressBar = ({ value }) => {
  const circumference = 342.441; // Adjust the circumference based on your path length
  const dashArray = circumference;
  const dashOffset = dashArray - (value * dashArray);

  return (
    <div className="flex relative  h-1  transition duration-500 progress-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="331" height="47" viewBox="0 0 331 47" fill="none">
        <path opacity="0.25" d="M2.07033 1.51702C2.07033 1.51702 64.1827 45.2574 165.312 45.2574C266.441 45.2574 329.441 1.51702 329.441 1.51702" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path
          className="h-full rounded-full transition duration-500 progress-bar-scroller"
          d="M2.07033 1.51702C2.07033 1.51702 64.1827 45.2574 165.312 45.2574C266.441 45.2574 329.441 1.51702 329.441 1.51702"
          stroke='green'
          strokeWidth="3"
          strokeLinecap="round"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
        />
      </svg>
    </div>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ProgressBar;
