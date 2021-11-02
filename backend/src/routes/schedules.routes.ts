import { Router } from 'express';

const schedulesRouter = Router();

schedulesRouter.post('/', (req, res) => {
  const {
    scheduleDate,
    patientName,
    doctorName,
    doctorSpecialty,
    scheduleStatus,
  } = req.body;

  const dataSchedule = {
    scheduleDate,
    patientName,
    doctorName,
    doctorSpecialty,
    scheduleStatus,
  };

  return res.json(dataSchedule);
});

export default schedulesRouter;
