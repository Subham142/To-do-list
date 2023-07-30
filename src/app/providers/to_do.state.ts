export interface To_Do_Model {
  id: number;
  title: string;
  priority: number;
  status: number;
  completed: boolean;
  dueDate: Date;
  takenBy: string;
  description: string;
  
  
 
}
export let tasks: To_Do_Model[] = [
  {
    id: 1,
    title: 'walking',
    description: 'To Walk 10Km today',
    dueDate:new Date(20-2-2023),
    priority: 2,
    status: 1,
    takenBy: 'Mahesh',
    completed: false,
  },

  {
    id: 2,
    title: 'Code',
    description: 'See the Coding Ninjas Test',
    dueDate:new Date("2019-01-16"),
    priority: 3,
    status: 2,
    takenBy: 'tunii',
    completed: true,
  },
  {
    id: 3,
    title: 'Drink Water',
    description: 'Drink 4 Litres of Water',
    dueDate:new Date("2019-04-26"),
    priority: 1,
    status: 3,
    takenBy: 'tunii',
    completed: true,
  },
];
