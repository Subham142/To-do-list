export interface TaskModel {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  dueDate: Date;
  priority: number;
  status: number;
  takenBy: string;
}
export let tasks: TaskModel[] = [
  {
    id: 1,
    title: 'hello',
    description: 'polkjdkjhdjd',
    dueDate:new Date("2023-01-16"),
    priority: 1,
    status: 1,
    takenBy: 'Mahesh',
    completed: false,
  },

  {
    id: 2,
    title: 'yo',
    description: 'uhjd',
    dueDate:new Date("2019-01-16"),
    priority: 2,
    status: 2,
    takenBy: 'tunii',
    completed: true,
  },
];
