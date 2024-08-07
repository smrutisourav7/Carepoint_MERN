import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controllers/appointment.controller.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
const router = express.Router();

router.post("/createappointment", isPatientAuthenticated, postAppointment);
router.get("/allappointments", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
export default router;
