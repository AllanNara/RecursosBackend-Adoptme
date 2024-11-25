import { Router } from "express";
import mockingController from "../controllers/mocking.controller.js";

const router = Router();

router.get("/mockingpets", mockingController.mockingPets)

export default router