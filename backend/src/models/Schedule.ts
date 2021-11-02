import { uuid } from 'uuidv4';

class Schedules {
  id: string;

  scheduleDate: Date;

  patientName: string;

  doctorName: string;

  doctorSpecialty: string;

  scheduleStatus: string;

  constructor(
    scheduleDate: Date,
    patientName: string,
    doctorName: string,
    doctorSpecialty: string,
    scheduleStatus: string,
  ) {
    this.id = uuid();
    this.scheduleDate = scheduleDate;
    this.patientName = patientName;
    this.doctorName = doctorName;
    this.doctorSpecialty = doctorSpecialty;
    this.scheduleStatus = scheduleStatus;
  }
}

export default Schedules;
