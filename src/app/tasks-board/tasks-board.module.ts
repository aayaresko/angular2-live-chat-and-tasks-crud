import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskService } from './task.service';
import { TasksBoardComponent } from './tasks-board.component';
import { TasksListComponent } from './tasks-list.component';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form.component';
import { TaskResolveService } from './task-resolve.service';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
    imports: [
        SharedModule,
        TasksRoutingModule,
    ],
    declarations: [
        TasksBoardComponent,
        TasksListComponent,
        TaskFormComponent,
        TaskComponent
    ],
    providers: [
        TaskService,
        TaskResolveService,
    ]
})
export class TasksBoardModule {

}
