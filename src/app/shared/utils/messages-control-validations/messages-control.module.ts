import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MessagesControlComponent} from './messages-control.component';

@NgModule({
    declarations: [
        MessagesControlComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        MessagesControlComponent
    ]
})
export class MessagesControlModule {
}
