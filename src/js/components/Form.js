import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const Form = ({ addArticle }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addArticle({ title });
    console.log(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(Form);
