interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            
        `}>
            {props.children}
        </button>
    )
}