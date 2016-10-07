import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from './task.service';
import { User } from '../shared/user';
import { Task } from './task';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
    selector: 'app-tasks-board-task-form',
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
    private author: User;
    private task = new Task('', '', 0);
    private mainForm: FormGroup;

    public constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService, private authorizationService: AuthorizationService) {
    }

    public ngOnInit() {
        this.author = this.authorizationService.user;
        this.route.data.forEach((data: { task: Task }) => {
            if (data.task) {
                this.task = data.task;
            }
        });
        this.mainForm = new FormGroup({
            title: new FormControl(this.task.title, Validators.required),
            content: new FormControl(this.task.content, Validators.required)
        });
    }

    public onSubmit() {
        if (this.mainForm.valid) {
            this.task.title = this.mainForm.value.title;
            this.task.content = this.mainForm.value.content;
            this.task.author_id = this.author.account.id;
            this.taskService.save(this.task).subscribe((data) => {
                return this.router.navigate(['/tasks-board']);
            });
        }
    }

}
