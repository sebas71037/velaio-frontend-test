export interface IPerson {
    fullName: string;
    age: number;
    skills: (string | {skill: string})[] ;
    
    /* Temporal vars */
    id?: number;
}