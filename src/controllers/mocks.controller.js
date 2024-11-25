import generateMockUsers from "../services/mocks/users.js";
import generateMockPets from "../services/mocks/pets.js";
import { petsService, usersService } from "../services/index.js";

const mockingPets = (req, res, next) => {
    const quantity = parseInt(req.params.quantity);
    try {
        const mockPets = generateMockPets(isNaN(quantity) ? 50 : quantity);
        res.send({ status: "success", payload: mockPets });
    } catch (error) {
        next(error);
    }
};

const mockingUsers = async (req, res, next) => {
    const quantity = parseInt(req.params.quantity);
    try {
        const mockUsers = await generateMockUsers(isNaN(quantity) ? 50 : quantity);
        res.send({ status: "success", payload: mockUsers });
    } catch (error) {
        next(error);
    }
};

const generateDataMock = async (req, res, next) => {
    const users = parseInt(req.body.users);
    const pets = parseInt(req.body.pets);
    try {
        const mockUsers = await generateMockUsers(isNaN(users) ? 10 : users);
        const mockPets = generateMockPets(isNaN(pets) ? 10 : pets);
        await petsService.create(mockPets);
        await usersService.create(mockUsers);
        res.send({ status: "success", message: "Data Mocked" });
    } catch (error) {
        next(error);
    }
};

export default {
    mockingPets,
    mockingUsers,
    generateDataMock
}