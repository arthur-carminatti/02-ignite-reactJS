import { StyledToast } from "./styles";

const Toast = () => {
    return (
        <StyledToast
            autoClose={4000}
            closeOnClick={false}
            draggable={false}
            newestOnTop
            hideProgressBar={false}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
        />
    );
};

export default Toast;
