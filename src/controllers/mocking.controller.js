
import generateMockPets from "../services/mocks/pets.js";

const mockingPets = (req, res, next) => {
    const quantity = parseInt(req.params.quantity);
    try {
        const mockPets = generateMockPets(quantity);
        res.send({ status: "success", payload: mockPets });
    } catch (error) {
        next(error);
    }
};

export default {
    mockingPets
}