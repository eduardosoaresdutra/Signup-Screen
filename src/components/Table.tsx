import Client from '../core/Client'
import { DeleteIcon, EditIcon } from './Icons'

interface TableProps {
    clients: Client[]
    selectClient?: (client: Client) => void
    deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
    const showActions = props.selectClient || props.deleteClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showActions ? (<th className="p-4">Actions</th>) : false}
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-100'}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? <td className="text-center p-4">{renderActions(client)}</td> : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <div>
                {props.selectClient ? (
                    <button className={`
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.deleteClient ? (
                    <button className={`
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                    `}>
                        {DeleteIcon}
                    </button>
                ) : false}
            </div>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-violet-500 to-purple-500
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}