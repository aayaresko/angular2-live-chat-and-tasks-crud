import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskResolveService } from './shared/task-resolve.service';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './shared/task-form.component';
import { TasksBoardComponent } from './tasks-board.component';

const routes: Routes = [
    {
        path: '',
        component: TasksBoardComponent,
        children: [
            {
                path: 'edit/:id',
                component: TaskFormComponent,
                resolve: {
                    task: TaskResolveService
                }
            },
            {
                path: 'delete/:id',
                component: TasksListComponent
            },
            {
                path: 'create',
                component: TaskFormComponent
            },
            {
                path: '',
                component: TasksListComponent,
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class TasksRoutingModule {

}