import React from "react";
import { ToastContainer } from "react-toastify";
import styled, { keyframes } from "styled-components";
import "react-toastify/dist/ReactToastify.minimal.css";
// import "./styles.css";

export const StyledToast = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress"
})`

  .toast {
    display: flex;
    justify-content: right;
    align-items: center;

    background-color: ${props => props.theme.white};
    color: black;

    width: 300px;
    border-radius: 8px;
  }

  .Toastify__toast--success {
  }

  .Toastify__toast--warning {
    background-color: red;
  }
`;