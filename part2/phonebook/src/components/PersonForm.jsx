import React from "react";

const PersonForm = ({ onSubmit, nameValue, phoneValue, onChangeName, onChangePhone }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameValue} onChange={onChangeName} />
        phone number: <input value={phoneValue} onChange={onChangePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
