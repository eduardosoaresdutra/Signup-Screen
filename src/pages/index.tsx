import Button from "../components/Button";
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
      <Layout title="Title">
        <Button>New Client</Button>
        <Table clients={clients} selectClient={selectClient} deleteClient={deleteClient}></Table>
      </Layout>
    </div>
  )
}
