import express from 'express';
import commonValidations from '../shared/validations/financial';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';
import FinancialReports from '../models/financial_reports';

let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

router.post('/', (req, res) => {
  let { errors, isValid } = validateInput(req.body, commonValidations);
  if (isValid) {
    const {
      case_id,
      reportingperiodstartdate,
      ifrs,
      unit,
      number_scale,
      profit_loss,
      assets,
      contributed_capital,
      equity,
      liabilities_and_equity } = req.body;

    FinancialReports.forge({
      case_id,
      reportingperiodstartdate,
      ifrs,
      unit,
      number_scale,
      profit_loss,
      assets,
      contributed_capital,
      equity,
      liabilities_and_equity
    }, { hasTimestamps: true }).save()
    .then(fr => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
  } else {
    res.status(400).json(errors);
  }
});

export default router;