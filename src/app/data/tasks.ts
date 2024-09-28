import { ITask } from "../interfaces/task.interface";

export const getTasksList = (): ITask[] => {
    return [
        {
            "id": 1,
            "taskName": "Hacer el desayuno",
            "status" : false,
            "dueDate": new Date("2024-08-30T05:00:00.000Z"),
            "people": [
                {
                    "id": 1727505294422,
                    "fullName": "Sebastian Vargas",
                    "age": 28,
                    "skills": [
                        "Angular",
                        "Bebedor de cafe"
                    ]
                }
            ]
        },
        {
            "id": 2,
            "taskName": "Ir de paseo",
            "status" : false,
            "dueDate": new Date("2024-08-30T05:00:00.000Z"),
            "people": [
                {
                    "id": 1727505294423,
                    "fullName": "Sebastian Vargas",
                    "age": 28,
                    "skills": [
                        "Angular",
                        "Bebedor de cafe"
                    ]
                },
                {
                    "id": 1727505294423,
                    "fullName": "Catalina Valencia",
                    "age": 29,
                    "skills": [
                        "Typescript",
                        "Cuidador de perritos"
                    ]
                }
            ]
        }
    ];    
}
