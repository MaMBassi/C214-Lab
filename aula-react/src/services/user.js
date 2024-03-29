import client from './config';

const userPath = '/user';

const ClientUsers = {
    async createUser(data) {
        try {
            console.log(data)
            const response = await client.post(`${userPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async listUser( ) {
        try {
            const response = await client.get(`${userPath}/list`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async listByEmail(data) {
        try {
            const response = await client.get(`${userPath}/listByEmail/${data.email}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async deleteUser(data) {
        try {
            const response = await client.delete(`${userPath}/delete/${data.email}`);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientUsers;