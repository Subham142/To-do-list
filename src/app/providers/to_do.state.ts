export interface TaskModel {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  dueDate: string;
  priority: number;
  status: number;
  takenBy: string;
}
export let tasks: TaskModel[] = [
  {
    id: 1,
    title: 'hello',
    description: 'polkjdkjhdjd',
    dueDate: '8-9-2023',
    priority: 1,
    status: 1,
    takenBy: 'Mahesh',
    completed: false,
  },

  {
    id: 2,
    title: 'yo',
    description: 'uhjd',
    dueDate: '9-9-2023',
    priority: 2,
    status: 2,
    takenBy: 'tunii',
    completed: true,
  },
];
