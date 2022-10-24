import {Component, HostBinding, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MessagesValidationService} from './messages-validation-service';

/**
 * (Messages Control Validations)
 *
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class MessagesControlComponent
 * @description Component to show messages in inputs
 * @date 22/10/2022
 */
@Component({
    selector: 'app-messages-control-validations',
    template: `
    <ng-template [ngIf]="errorMessage !== null">{{errorMessage}}</ng-template>
  `
})
export class MessagesControlComponent {

    @Input() control: FormControl | any;
    @HostBinding('class') defaultClass = 'help-block help-block-error';

    constructor() {
    }

    get errorMessage() {
        if (this.control) {
            for (const propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return MessagesValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
        }
        return null;
    }
}
