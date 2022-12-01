import client from './config';

const userPath = '/product';

const ClientProduct = {
    async createUser(data) {
        try {
            console.log(data)
            const response = await client.post(`${userPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async updateUser(data) {
        try {
            const response = await client.put(`${userPath}/update`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async deleteUser(data) {
        try {
            console.log(data)
            const response = await client.delete(`${userPath}/delete/${data.description}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async readUser(data) {
        try {
            const response = await client.patch(`${userPath}/listProduct`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async readAllUsers(data) {
        try {
            const response = await client.get(`${userPath}/list`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientProduct ;