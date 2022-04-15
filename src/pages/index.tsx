import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client('Ana', 20, '1'),
    new Client('Bia', 25, '2'),
    new Client('Edu', 23, '3'),
    new Client('Lara', 30, '4'),
    new Client('Isa', 37, '5')
  ]

  const [viewMode, setViewMode] = useState<'form' | 'table'>('table')

  function toggleViewMode() {
    viewMode === 'table' ? setViewMode('form') : setViewMode('table')
  }

  function selectClient(client: Client) {
    console.log(client.name)
  }

  function deleteClient(client: Client) {
    console.log(`Deleting ${client.name}...`)
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
                onClick={toggleViewMode}
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
          <Form client={clients[0]} />
        )}
      </Layout>
    </div>
  )
}
