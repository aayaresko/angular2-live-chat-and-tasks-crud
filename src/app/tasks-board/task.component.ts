import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { User } from '../shared/user';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
    selector: 'app-tasks-board-task',
    templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
    @Input() public task: Task;
    @Output() public destroy = new EventEmitter();
    private isMessageAuthor = false;
    private user: User;
    private author: User;

    public constructor(private authorizationService: AuthorizationService) {
    }

    public ngOnInit() {
        this.user = this.authorizationService.user;
        if (this.task && this.task.author_id) {
            this.author = new User(this.task.author);
            this.isMessageAuthor = this.author.account.id === this.user.account.id ? true : false;
        }
    }

    public onDelete() {
        this.destroy.emit();
    }

}
