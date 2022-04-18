import { collection, doc, addDoc, getDoc, getDocs, setDoc, deleteDoc, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
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

    private clientsCollectionRef = collection(dataBase, 'clients').withConverter(this.converter)

    async save(client: Client): Promise<Client> {
        if (client?.id) {
           await setDoc(doc(dataBase, 'clientes', client.id).withConverter(this.converter), client)
           return client
        } else {
            const docRef = await addDoc(this.clientsCollectionRef, client)
            const doc = await getDoc(docRef)
            return doc.data()
        }
    }

    async delete(client: Client): Promise<void> {
        return await deleteDoc(doc(dataBase, 'clients', client.id))
    }

    async getAll(): Promise<Client[]> {
        const clientsSnapshot = await getDocs(this.clientsCollectionRef)
        const clientsList = clientsSnapshot.docs.map((doc) => doc.data()) ?? []
        return clientsList
    }

}