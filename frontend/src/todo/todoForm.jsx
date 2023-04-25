import React from "react";
import Grid from "../template/grid";
import iconButton from "../template/iconButton";

export default (props) => (
  <div className="todoForm" role="form">
    <Grid cols="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="Adicione uma tarefa"
        value={props.description}
        onChange={props.handleChange}
      />
    </Grid>
    <Grid cols="12 3 2">
      <iconButton
        style="primary"
        icon="plus"
        onClick={props.handleAdd}
      ></iconButton>
    </Grid>
  </div>
);
