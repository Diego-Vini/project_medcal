import { isEqual } from 'date-fns';
import Schedule from '../models/Schedule';

class SchedulesServices {
  private schedules: Schedule[];

  constructor() {
    this.schedules = [];
  }

  public findByDate(scheduleDate: Date): Schedule | null {
    const findSchedule = this.schedules.find(schedule =>
      isEqual(scheduleDate, schedule.scheduleDate),
    );
    return findSchedule || null;
  }

  public create(
    scheduleDate: Date,
    patientName: string,
    doctorName: string,
    doctorSpecialty: string,
    scheduleStatus: string,
  ): Schedule {
    const schedule = new Schedule(
      scheduleDate,
      patientName,
      doctorName,
      doctorSpecialty,
      scheduleStatus,
    );

    this.schedules.push(schedule);
    return schedule;
  }
}

export default SchedulesServices;
