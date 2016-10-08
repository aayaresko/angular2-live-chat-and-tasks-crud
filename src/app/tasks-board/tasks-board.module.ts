import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksBoardComponent } from './tasks-board.component';
import { TasksListComponent } from './tasks-list.component';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from './task-form.component';
import { TaskService } from './task.service';
import { TaskResolveService } from './task-resolve.service';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TasksRoutingModule,
    ],
    declarations: [
        TasksBoardComponent,
        TasksListComponent,
        TaskFormComponent,
        TaskComponent
    ],
    exports: [
        TasksBoardComponent
    ],
    providers: [
        TaskService,
        TaskResolveService,
    ]
})
export class TasksBoardModule {
}
