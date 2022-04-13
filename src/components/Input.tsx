interface InputProps {
    inputType?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-4">
                {props.text}
            </label>
            <input
                type={props.inputType ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}