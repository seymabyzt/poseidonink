import './_switch.scss'

const Switch = () => {
    return (
      <div className="switch-wrapper">
        <div>
          <input id="checkbox2" type="checkbox" />
          <label className="toggle toggle2" htmlFor="checkbox2">
            <div id="bar4" className="bars" />
            <div id="bar5" className="bars" />
            <div id="bar6" className="bars" />
          </label>
        </div>
      </div>
    );
  };
  
  export default Switch;