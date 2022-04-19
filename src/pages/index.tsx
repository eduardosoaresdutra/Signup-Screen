import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../backend/db/ClientCollection";

export default function Home() {

  const repo: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [viewMode, setViewMode] = useState<'form' | 'table'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      setViewMode('table')
    })
  }

  function selectClient(client: Client) {
    setClient(client)
    setViewMode('form')
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
    setViewMode('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Sign Up">
        {viewMode === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button
                onClick={() => newClient()}
                color="green"
                className="mb-4"
              >
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectClient={selectClient}
              deleteClient={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            onClientChange={saveClient}
            onCancel={() => setViewMode('table')}
          />
        )}
      </Layout>
    </div>
  )
}
