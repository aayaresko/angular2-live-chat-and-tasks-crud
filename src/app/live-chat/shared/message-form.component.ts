import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from './message';
import { User } from '../../core/user';

@Component({
    selector: 'app-live-chat-message-form',
    templateUrl: './message-form.component.html',
})
export class MessageFormComponent implements OnInit {
    @Input() public author: User;
    @Output() public persist = new EventEmitter();
    public mainForm: FormGroup;

    public constructor() {
    }

    public ngOnInit() {
        this.mainForm = new FormGroup({
            content: new FormControl('', Validators.required)
        });
    }

    public onSubmit() {
        if (this.mainForm.valid) {
            let message = new Message(this.mainForm.value.content, this.author.account.id);
            this.persist.emit(message);
            this.mainForm.reset();
        }
    }
}
