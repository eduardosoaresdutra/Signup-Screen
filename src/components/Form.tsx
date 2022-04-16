import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    onClientChange: (client: Client) => void
    onCancel: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client.name ?? '');
    const [age, setAge] = useState(props.client.age ?? 0);

    return (
        <div>
            {id ? (
                <Input
                    readOnly
                    text="Code"
                    value={id}
                    className="mb-5"
                />
            ) : false}
            <Input
                text="Name"
                value={name}
                onChange={setName}
                className="mb-5"
            />
            <Input
                inputType="number"
                text="Age"
                value={age}
                onChange={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button
                    color="blue"
                    className="mr-3"
                    onClick={() => props.onClientChange(new Client(name, +age, id))}
                >
                    {id ? 'Save Changes' : 'Save'}
                </Button>
                <Button onClick={props.onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}