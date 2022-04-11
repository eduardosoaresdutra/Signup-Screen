import { throws } from "assert"

export default class Client {
    private _id: string
    private _name: string
    private _age: number

    constructor(name: string, age: number, id: string = null) {
        this._id = id
        this._name = name
        this._age = age
    }

    static vazio() {
        return new Client('', 0)
    }

    public get id(): string {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get age(): number {
        return this._age
    }
}