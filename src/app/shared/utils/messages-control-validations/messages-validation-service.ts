export class MessagesValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'required': 'Campo obrigatório',
            'minlength': `É obrigatório no mínimo ${validatorValue.requiredLength} caracteres`,
        };
        // @ts-ignore
        return config[validatorName];
    }
}
