import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariants = {
    primary: 'purple',
    secundary: 'orange',
    danger: 'red',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    border-radius: 8px;
    border: 0;
    color: #fff;
    padding: 8px;
    margin: 8px;

    background-color: ${props => props.theme['green-500']};

    /* ${props => {
        return css`background-color: ${ButtonVariants[props.variant]}`
    }} */
`