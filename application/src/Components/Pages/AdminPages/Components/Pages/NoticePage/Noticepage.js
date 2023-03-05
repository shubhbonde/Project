import React from "react";

import Button from "../../Buttons/button";
import "./Noticepage.css";

const Noticepage = (props) => {
  return (
    <div className="noticepage">
      <textarea
        id="noticetxtarea"
        cols="50"
        rows="6"
        placeholder=" Enter Here  New Notice"
        autoFocus={true}
      ></textarea>
        <Button value="UPDATE" id="notice_update_btn"/>

    </div>
  );
};

export default Noticepage;
