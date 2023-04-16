import { ToastContainer } from "react-toastify"
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
    top: 5em;
    left: 10%;
    transform: translateX(-50%);
  
  .Toastify__toast {
    cursor: inherit;
    font-family: 'Circular';
    background: rgba(255, 255, 255,0);
    box-shadow: none;
    padding: 0;
    margin-bottom: 0.75em;
    min-height: 10px;
  }
  .Toastify__toast-body {
    padding: 0;
    margin: 0;
  }
`;