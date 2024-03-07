import { FireStoreRepository } from "@/common/repositories/firestoreRepository";
import type Account from "../models/account";
import type Serializer from "@/common/serializers/serializer";
import type { DocumentData } from "firebase/firestore";
import Authenticator from "./authenticator";



export default class AccountRepository<A extends Account> extends FireStoreRepository<string, A>{

    private authenticator = new Authenticator();

    constructor(collectionName: string, serializer: Serializer<A, DocumentData>){
        super(
            collectionName,
            "uid",
            serializer
        );
    }

    async signup(instance: A, password: string){
        const user = await this.authenticator.createWithEmail(instance.email, password);
        instance.uid = user.uid;
        await this.create(instance);
        await this.authenticator.signInWithEmail(instance.email, password);
    }

    async getCurrentAccount(): Promise<A>{
        const user = await this.authenticator.getCurrentUser();
        return await this.getByPrimaryKey(user!.uid);
    }

}