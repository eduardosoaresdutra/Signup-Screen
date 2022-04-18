import { collection, doc, setDoc, deleteDoc, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";
import { dataBase } from "../config";

export default class ClientCollection implements ClientRepository {
    
    private converter = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age,
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client {
            const data = snapshot?.data(options)
            return new Client(data.name, data.age, snapshot?.id)
        }
    }

    async save(client: Client): Promise<Client> {
        if (client?.id) {
           await setDoc(doc(dataBase, 'clients', client.id), client)
           return client
        }
        return null
    }

    async delete(client: Client): Promise<void> {
        return await deleteDoc(doc(dataBase, 'clients', client.id))
    }

    async getAll(): Promise<Client[]> {
        return null
    }

    private collection() {
        return collection(dataBase, 'clients').withConverter(this.converter)
    }

}