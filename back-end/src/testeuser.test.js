const { UserModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');

describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "Ana",
                email: "ana@gmail.br",
            }),
        }));

        expect(await user.create({
            id: 1,
            nome: "Ana",
            email: "ana@gmail.br",
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
            }),
        );
    });
});

describe('editUser', () => {
    it('Valid edit', async () => {
        UserModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    email: 'Maria@gmail.com',
                    nome: 'Maria',
                }),
            }),
        }));

        expect(await user.update({
            email: 'Maria@egmail.com',
            nome: 'Maria'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
            }),
        );
    });
});

describe('listUsers', () => {
    it('Valid list', async () => {
        UserModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'Julio@email.com',
                nome: 'Julio',
            }),
        }));

        expect(await user.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'Julio@email.com',
                nome: 'Julio',
            }),
        );

    });
});

describe('getByEmail', () => {
    it('Valid list', async () => {
        UserModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                email: 'Julio@email.com',
                nome: 'Julio',
            }),
        }));

        expect(await user.getByEmail({
            email: 'Julio@email.com'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: 'Julio@email.com',
                nome: 'Julio',
            }),
        );

    });
});

describe('deleteUser', () => {
    it('Valid delete', async () => {
        UserModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await user.delete({
            email: 'Julio@email.com',
        })).toEqual(1);
    });
});
