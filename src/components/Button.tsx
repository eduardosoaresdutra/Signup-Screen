interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    onClick: () => void
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    return (
        <button
            onClick={() => props.onClick()}
            className={`
                bg-gradient-to-r from-${props.color || 'gray'}-400 to-${props.color || 'gray'}-600
                text-white px-4 py-2 rounded-md
                ${props.className}
        `}>
            {props.children}
        </button>
    )
}