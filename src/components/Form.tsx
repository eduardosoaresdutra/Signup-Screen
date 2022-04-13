import Input from "./Input";

interface FormProps {

}

export default function Form(props: FormProps) {
    return (
        <div>
            <Input text="Name" value="Test" />
            <Input inputType="number" text="Age" value="Test" />
        </div>
    )
}