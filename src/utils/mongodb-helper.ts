import mongoose from 'mongoose';

export class MongoDBHelper {
    public static startDb = async (
        host: string,
        user: string,
        password: string,
        dbName: string
    ): Promise<void> => {
        if (!mongoose.connection.readyState) {
            await mongoose.connect(host, {
                user: user,
                pass: password,
                dbName: dbName,
            });
        }
    };

    public static stopDb = async (): Promise<void> => {
        await mongoose.connection.close();
    };
}
