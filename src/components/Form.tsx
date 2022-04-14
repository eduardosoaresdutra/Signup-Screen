import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
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
                <Button color="blue" className="mr-3">
                    {id ? 'Save Changes' : 'Save'}
                </Button>
                <Button>
                    Cancel
                </Button>
            </div>
        </div>
    )
}