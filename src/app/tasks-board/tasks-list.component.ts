import { Component, OnInit, style, animate, transition, trigger } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'app-tasks-board-tasks-list',
    templateUrl: './tasks-list.component.html',
    animations: [
        trigger('added', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate('300ms, 600ms ease-in', style({ opacity: 1 }))
            ]),
            transition('* => void', [
                style({ opacity: 1 }),
                animate('300ms, 600ms ease-out', style({ opacity: 0 }))
            ]),
        ])
    ]
})
export class TasksListComponent implements OnInit {
    public tasks: Task[] = [];

    public constructor(private taskService: TaskService) {
    }

    public ngOnInit() {
        this.taskService.all().subscribe((tasks) => this.tasks = tasks);
    }

    public onDelete(task) {
        this.taskService.destroy(task.id).subscribe(() => {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        });
    }
}
