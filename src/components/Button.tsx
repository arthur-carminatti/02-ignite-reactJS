interface ButtonProps {
    color: 'primary' | 'secundary' | 'danger' | 'success';
}

export function Button(props: ButtonProps) {
    return <button>Enviar</button>
}