import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/financial';
import { connect } from 'react-redux';
import { addFinancialReport } from '../../actions/financialReportActions';
import { deleteFlashAllMessages } from '../../actions/flashMessages';
import moment from 'moment';
import './FinancialReportsForm.scss';

class FinancialReportsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      case_id: '',
      reportingperiodstartdate: new Date(),
      ifrs: false,
      unit: '',
      number_scale: '1E0',
      profit_loss: '',
      assets: '',
      contributed_capital: '',
      equity: '',
      liabilities_and_equity: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    console.log(errors);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.addFinancialReport(this.state).then(
        (res) => {
          if (res.data.success === true) {
            this.context.router.history.push('/');
            this.props.deleteFlashAllMessages();
          }
        },
        (err) => {
          this.setState({ errors: err.response.data.errors, isLoading: false })
        }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDateChange(date, e) {
    this.setState({
      [document.querySelector('.react-datepicker-wrapper input').name]: date
    });
  }

  render() {
    const {
      errors,
      case_id,
      reportingperiodstartdate,
      ifrs,
      unit,
      number_scale,
      profit_loss,
      assets,
      contributed_capital,
      equity,
      liabilities_and_equity,
      isLoading } = this.state;

    return (
      <div className="financial-form">
        <form onSubmit={this.onSubmit}>
          <h1>Financial Report</h1>

          <div className="col-md-4">
            <TextFieldGroup
              field="case_id"
              label="case id"
              value={case_id}
              error={errors.case_id}
              onChange={this.onChange}
            />

            <TextFieldGroup
              field="reportingperiodstartdate"
              label="reporting period start date"
              value={reportingperiodstartdate}
              error={errors.reportingperiodstartdate}
              onChange={this.handleDateChange}
              type="date"
            />
            {/* */}
            <TextFieldGroup
              field="reportingperiodenddate"
              label="reporting period end date"
              value={reportingperiodenddate}
              error={errors.reportingperiodenddate}
              onChange={this.handleDateChange}
              type="date"
            />

            <TextFieldGroup
              field="dateofapprovalofannualreport"
              label="date of approval of annual report"
              value={dateofapprovalofannualreport}
              error={errors.dateofapprovalofannualreport}
              onChange={this.handleDateChange}
              type="date"
            />

            <TextFieldGroup
              field="dateofgeneralmeeting"
              label="date of general meeting"
              value={dateofgeneralmeeting}
              error={errors.dateofgeneralmeeting}
              onChange={this.handleDateChange}
              type="date"
            />

            <TextFieldGroup
              field="typeofauditorassistance"
              label="type of auditor assistance"
              value={typeofauditorassistance}
              error={errors.typeofauditorassistance}
              onChange={this.onChange}
              type="select"
            />

            <TextFieldGroup
              field="classofreportingentity"
              label="class of reporting entity"
              value={classofreportingentity}
              error={errors.classofreportingentity}
              onChange={this.onChange}
              type="select"
            />

            <TextFieldGroup
              field="supplementaryinformationonothermatters"
              label="supplementary information on other matters"
              value={supplementaryinformationonothermatters}
              error={errors.supplementaryinformationonothermatters}
              onChange={this.onChange}
            />

            <TextFieldGroup
              field="indentificationnumbercvrofauditfirm"
              label="indentification number cvr of audit firm"
              value={indentificationnumbercvrofauditfirm}
              error={errors.indentificationnumbercvrofauditfirm}
              onChange={this.onChange}
            />

            <TextFieldGroup
              field="nameandsurnameofauditor"
              label="name and surname of auditor"
              value={nameandsurnameofauditor}
              error={errors.nameandsurnameofauditor}
              onChange={this.onChange}
            />

            <TextFieldGroup
              field="ifrs"
              label="IFRS"
              value={ifrs}
              error={errors.ifrs}
              onChange={this.onChange}
              type="checkbox"
            />

            <TextFieldGroup
              field="unit"
              label="unit"
              value={unit}
              error={errors.unit}
              onChange={this.onChange}
            />

            <TextFieldGroup
              field="number_scale"
              label="number scale"
              value={number_scale}
              error={errors.number_scale}
              onChange={this.onChange}
              type="select"
            />
          </div>
          <div className="col-md-4">
            <TextFieldGroup
              field="revenue"
              label="profit loss"
              value={revenue}
              error={errors.revenue}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="other_income"
              label="profit loss"
              value={other_income}
              error={errors.other_income}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="costs"
              label="profit loss"
              value={costs}
              error={errors.costs}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="change_in_inventories"
              label="profit loss"
              value={change_in_inventories}
              error={errors.change_in_inventories}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="change_in_inventories"
              label="profit loss"
              value={change_in_inventories}
              error={errors.change_in_inventories}
              onChange={this.onChange}
              type="number"
            />
          </div>
          <div className="col-md-4">
            <TextFieldGroup
              field="profit_loss"
              label="profit loss"
              value={profit_loss}
              error={errors.profit_loss}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="assets"
              label="assets"
              value={assets}
              error={errors.assets}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="contributed_capital"
              label="contributed capital"
              value={contributed_capital}
              error={errors.contributed_capital}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="equity"
              label="equity"
              value={equity}
              error={errors.equity}
              onChange={this.onChange}
              type="number"
            />

            <TextFieldGroup
              field="liabilities_and_equity"
              label="liabilities and equity"
              value={liabilities_and_equity}
              error={errors.liabilities_and_equity}
              onChange={this.onChange}
              type="number"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg" disabled={isLoading}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

FinancialReportsForm.propTypes = {
  addFinancialReport: PropTypes.func.isRequired,
  deleteFlashAllMessages: PropTypes.func.isRequired
}

FinancialReportsForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { addFinancialReport, deleteFlashAllMessages })(FinancialReportsForm);