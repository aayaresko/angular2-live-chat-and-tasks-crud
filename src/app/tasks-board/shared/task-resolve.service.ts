import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';

@Injectable()
export class TaskResolveService implements Resolve<Task> {

    public constructor(private service: TaskService) {

    }

    public resolve(route: ActivatedRouteSnapshot): Promise<Task>|Promise<boolean> {
        let id = +route.params['id'];
        return this.service
            .show(id)
            .toPromise()
            .then((task: Task) => {
                if (task) {
                    return task;
                } else {
                    return false;
                }
            });
    }
}