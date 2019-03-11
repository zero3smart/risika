import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    console.log('qqqqqqqqqqqqq');
    console.log(data);

    if (validator.isEmpty(data.unit)) {
        errors.unit = 'This field is required';
    }

    if (validator.isEmpty(data.number_scale)) {
        errors.number_scale = 'This field is required';
    }

    if (validator.isEmpty(data.profit_loss)) {
        errors.profit_loss = 'This field is required';
    }

    if (validator.isEmpty(data.assets)) {
        errors.assets = 'This field is required';
    }

    if (validator.isEmpty(data.contributed_capital)) {
        errors.contributed_capital = 'This field is required';
    }

    if (validator.isEmpty(data.equity)) {
        errors.equity = 'This field is required';
    }

    if (validator.isEmpty(data.liabilities_and_equity)) {
        errors.liabilities_and_equity = 'This field is required';
    }

    console.log('isValid' + isEmpty(errors));

    return {
        errors,
        isValid: isEmpty(errors)
    };
}