import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import SchedulesServices from '../services/SchedulesService';

const schedulesRouter = Router();
const scheduleService = new SchedulesServices();

schedulesRouter.post('/', (req, res) => {
  const {
    scheduleDate,
    patientName,
    doctorName,
    doctorSpecialty,
    scheduleStatus,
  } = req.body;

  const parserDate = startOfHour(parseISO(scheduleDate));

  const findScheduleDate = scheduleService.findByDate(parserDate);

  if (findScheduleDate)
    return res
      .status(400)
      .json({ message: 'This date and time are already reserved. ' });

  const dataSchedule = scheduleService.create(
    scheduleDate,
    patientName,
    doctorName,
    doctorSpecialty,
    scheduleStatus,
  );

  return res.status(200).json(dataSchedule);
});

export default schedulesRouter;
