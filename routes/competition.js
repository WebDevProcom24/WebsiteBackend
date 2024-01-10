import express from "express";
import {
  addCompetitions,
  deleteCompetitions,
  getCompetitions,
  updateCompetitions,
} from "../controllers/competition.js";

const router = express.Router();

router.get("/getData", getCompetitions);
router.post("/addData", addCompetitions);
router.delete("/deleteData", deleteCompetitions);
router.put("/updateData", updateCompetitions);

export default router;
