import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    selectClient,
    deleteClient,
    isTableMode,
    setTableMode
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Sign Up">
        {isTableMode ? (
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
            onCancel={() => setTableMode()}
          />
        )}
      </Layout>
    </div>
  )
}
