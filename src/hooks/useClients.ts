import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useViewMode from "./useViewMode"

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const [client, setClient] = useState<Client> (Client.empty())
    const [clients, setClients] = useState <Client[]> ([])

    const {isFormMode, isTableMode,setTableMode, setFormMode} = useViewMode()

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            setTableMode()
        })
    }

    function selectClient(client: Client) {
        setClient(client)
        setFormMode()
    }

    async function deleteClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty)
        setFormMode()
    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        selectClient,
        deleteClient,
        isFormMode,
        isTableMode,
        setFormMode,
        setTableMode
    }
}