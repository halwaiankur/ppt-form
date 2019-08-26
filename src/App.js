import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'react-bootstrap';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      gender:'',
      marritalstatus:'',
      emailaddr: '',
      phonenumber: '',
      address1:'',
      address2:'',
      address3:'',
      dateofhire:'',
      annualincome:'',
      payrollfrequency:''
    }
  }
  handleChange = event => {
    console.log('ANK')
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
    });
  };

  render(){
  return (
    <div className="App">
    <div style={{marginBottom:'5rem'}}>
        <h3>Please tell us about yourself.</h3>
        <Row>
          <Col xs={12} md={8}>
            <Col className='form-section p-4' xs={12} md={6}>
              <div className = "data-small light-theme mb-3" >Personal Info</div >
              <Row>
                <Col xs={4}>
                  <div className = "form-group invalid-input">
                    <select className = "custom-select form-input" >
                      <option seleted ></option >
                      <option value = "1" >Male</option >
                      <option value = "2" >Female</option >
                    </select >
                    <label htmlFor = "gender" className = "form-label" >Gender</label >
                  </div >
                </Col>
                <Col  xs={6}>
                  <div className = "form-group invalid-input"  >
                    <select className = "custom-select form-input" >
                      <option seleted ></option >
                      <option value = "1" >Single</option >
                      <option value = "2" >Married</option >
                    </select >
                    <label htmlFor = "gender" className = "form-label" >Marital Status</label >
                  </div >
                </Col>
              </Row>
              <div className = "data-small light-theme mb-3 mt-3" >Contact Info</div >
              <Row>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.emailaddr}
                           name='emailaddr'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Email Address</label>
                  </div >
                </Col>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.phonenumber}
                           name='phonenumber'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Phone Number</label>
                  </div >
                </Col>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.address1}
                           name='address1'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Address 1</label>
                  </div >
                </Col>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.address2}
                           name='address2'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Address 2 (Optional)</label>
                  </div >
                </Col>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.address3}
                           name='address3'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Address 3 (Optional)</label>
                  </div >
                </Col>
              </Row>
              <div className = "data-small light-theme mb-3 mt-3" >Employment Info</div >
              <Row>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.dateofhire}
                           name='dateofhire'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Date of hire</label>
                  </div >
                </Col>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.annualincome}
                           name='annualincome'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Annual Income</label>
                  </div >
                </Col>
                <Col xs={8}>
                  <div className = 'group' >
                    <input type = 'text' required
                           value={this.state.payrollfrequency}
                           name='payrollfrequency'
                           onChange={this.handleChange}
                    />
                    <span className = 'highlight' />
                    <span className = 'bar' />
                    <span className = 'errortext' />
                    <label >Payroll Frequency</label>
                  </div >
                </Col>
              </Row>
            </Col>
          </Col>
          <Col xs={6} md={4}>
            <Row>
              <div className='data-small light-theme'>
                Why should you invest in this retirement account?
              </div>
            </Row>
            <Row>
              Grow your investments tax-free
            </Row>
            <Row>
              Reduce current taxable income
            </Row>
            <Row>
              Improve financial security in retirement
            </Row>
            
          </Col>
        </Row>
        <div className='mm-signature-reg col-lg-8 col-md-12'>
          <span className='MM_FullMark_Reg_K'></span>
          <div>©2019 Massachusetts Mutual Life Insurance Company (MassMutual®), Springfield, MA 01111-0001. All rights reserved.
          <a>Terms of Use</a> <a>Privacy Policy</a>  CRN202105-248940
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default App;
