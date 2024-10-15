import { findAllUsers } from '../models/user';

export const findAll = async () => {
    return await findAllUsers();
}