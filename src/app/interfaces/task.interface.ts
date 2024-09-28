import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { IPerson } from "./person.interface";

export interface ITask {
    taskName: string;
    dueDate: Date;
    people: IPerson[];
    status: boolean;

    /* Temporal vars */
    id?: number;
}