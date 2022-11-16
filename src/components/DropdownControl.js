import React from "react";
import './Dropdown.css';

const DropdownControl = () => {
  const handleSpring = () => {
    //do something
    console.log('clicked spring')
  };

  const handleSummer = () => {
    //do something
    console.log('clicked summer')
  };

  const handleFall = () => {
    //do something
    console.log('clicked fall')
  };

  const handleWinter = () => {
    //do something
    console.log('clicked winter')
  };


  return (
    <Dropdown
      trigger={<button>Dropdown</button>}
      seasonList={[
        <button onClick={handleSpring}>Spring</button>,
        <button onClick={handleSummer}>Summer</button>,
        <button onClick={handleFall}>Fall</button>,
        <button onClick={handleWinter}>Winter</button>
      ]}
    />
  );
};

const Dropdown = ({trigger, seasonList}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return(
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="seasonList">
          {seasonList.map((season, index) => (
            <li key={index} className="season">
              {React.cloneElement(season, {
                onClick: () => {
                  season.props.onClick();
                  setOpen(false);
                }
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownControl;