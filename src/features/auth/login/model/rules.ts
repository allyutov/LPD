import type { FormRules } from 'naive-ui';

export const loginRules: FormRules = {
    email: [{
        required: true,
        validator(_, value: string) {
            if (!value) {
                return new Error('Введите e-mail');
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return new Error('Неверный e-mail');
            }

            return true;
        },
        trigger: ['blur'],
    }],
    password: [{
        required: true,
        validator(_, value: string) {
            if (!value) {
                return new Error('Введите пароль');
            }

            if (value.length < 5) {
                return new Error('Пароль должен быть не менее 8 символов');
            }

            // if (!/[A-Za-z]/.test(value)) {
            //     return new Error('Пароль должен содержать букву');
            // }

            // if (!/\d/.test(value)) {
            //     return new Error('Пароль должен содержать цифру');
            // }

            return true;
        },
        trigger: ['blur'],
    }],
};