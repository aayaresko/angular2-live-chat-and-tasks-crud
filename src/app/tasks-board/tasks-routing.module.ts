import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list.component';
import { TaskFormComponent } from './task-form.component';
import { TaskResolveService } from './task-resolve.service';
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