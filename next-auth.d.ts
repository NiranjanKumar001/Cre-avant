declare module "next-auth"{
    interface Session{
        id:String;
    }

    interface JWT{
        id: string;
    }
}