import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './shared/task.service';
import { TaskResolveService } from './shared/task-resolve.service';
import { TasksBoardComponent } from './tasks-board.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './shared/task-form.component';

@NgModule({
    imports: [
        SharedModule,
        TasksRoutingModule,
    ],
    declarations: [
        TasksBoardComponent,
        TasksListComponent,
        TaskFormComponent,
        TaskDetailComponent
    ],
    providers: [
        TaskService,
        TaskResolveService,
    ]
})
export class TasksBoardModule {

}
