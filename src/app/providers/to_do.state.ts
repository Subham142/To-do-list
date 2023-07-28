export interface TaskModel{
    id: number;
    title:string;
    completed:boolean
}
export let tasks: TaskModel[]=[
    {
        id:1,
        completed:false,
        title:"hello"
    },
    {
        id:2,
        completed:true,
        title:"yo"
    }
]