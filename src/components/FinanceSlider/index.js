import { Slider, TextField, Typography } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import React, { useState, useEffect } from "react";
import "../../css/style.css";
import { evaluate, round, pow } from 'mathjs';
import NumberFormat from "react-number-format";
import CurrencyFormat from "react-currency-format";

export default function FinanceSlider() {
  const [values, setValues] = useState({
    amountValue: '1000000',
    interestValue: '9.5',
    yearValue:'20'
  });
  const [emi, setEmi] = useState('');
  const [interestPayable, setInterestPayable] = useState();
  const [totalAmountPayable, setTotalAmountPayable] = useState();

  function EMIcalculation(){
    let R = values.interestValue/1200;
    let P = values.amountValue;
    let N = values.yearValue*12;
    let RN = pow((1+R), N)

    //calculation of EMI
    let emi = round(evaluate((P*R*RN)/(RN-1)), 2);

    //calculation of Interest payable
    let interestPayableCalc = round(evaluate((emi*N)-P));

    //calculation of Total amount payable
    let totalAmountPayableCalc = round(evaluate(emi*N));

    //collecting data as an object
    const data = {
      'emi': emi, 
      'interestPayable': interestPayableCalc,
      'totalAmountPayable': totalAmountPayableCalc
    }
    return data;
  }
  
  const handleChange = (event) => {
    if(event.target.name==="amountValue"){
      if(event.target.value!=null){
        if(event.target.value.replace(/,/g, "")<1){
          setValues({
            ...values,
            [event.target.name]: 1,
          });
        }
        else if(event.target.value.replace(/,/g, "")>50000000){
          setValues({
            ...values,
            [event.target.name]: 50000000,
          });
        }
        else{
          setValues({
            ...values,
            [event.target.name]: event.target.value.replace(/,/g, ""),
          });
        }
      }
      else{
        setValues({
          ...values,
          [event.target.name]: 1,
        });
      }
    }
    else if(event.target.name==="interestValue"){
      if(event.target.value!=null){
        if(event.target.value<=0){
          setValues({
            ...values,
            [event.target.name]: 1,
          });
        }
        else if(event.target.value>20){
          setValues({
            ...values,
            [event.target.name]: 20,
          });
        }
        else{
          setValues({
            ...values,
            [event.target.name]: event.target.value,
          });
        }
    }
    else{
      setValues({
        ...values,
        [event.target.name]: 1,
      });
    }
  }

  else if(event.target.name==="yearValue"){
    if(event.target.value!=null){
      if(event.target.value<=0){
        setValues({
          ...values,
          [event.target.name]: 1,
        });
      }
      else if(event.target.value>30){
        setValues({
          ...values,
          [event.target.name]: 30,
        });
      }
      else{
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      }
    }
    else{
      setValues({
        ...values,
        [event.target.name]: 1,
      });
    }
  }
  else{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  let data = EMIcalculation();
  setEmi(data.emi);
  setInterestPayable(data.interestPayable);
  setTotalAmountPayable(data.totalAmountPayable);
};

const handleChangeCoordination = (name) => (event, value) => {
  let data = EMIcalculation();
  setEmi(data.emi);
  setInterestPayable(data.interestPayable);
  setTotalAmountPayable(data.totalAmountPayable);

  setValues({...values, [name]:value});
}

  useEffect(()=>{
    function updateValue(){
      let data = EMIcalculation();
      setEmi(data.emi);
      setInterestPayable(data.interestPayable);
      setTotalAmountPayable(data.totalAmountPayable);
    }
      return updateValue();
  })

  return (
    <>
      <section className="slider-section mt-5">
        <div className="container-fluid">
          {/* <div className="col-10 mx-auto"> */}
            <div className="row">
              <div className="col-8 pl-5">
                <section className="featured-container">
                  <h4 className="heading-text">
                    Check interest & installment.
                  </h4>
                  <p>Find out how much would you need to pay monthly ?</p>
                </section>
                <div className="row">
                  <div className="col-8 mt-3">
                    <Slider
                      value={values.amountValue}
                      step={1}
                      min={1}
                      max={50000000}
                      name="amountValue"
                      onChange={handleChangeCoordination('amountValue')}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                    />
                  </div>
                  <div className="col-3">
                    <Typography gutterBottom>
                      <NumberFormat
                        customInput={TextField}
                        id="formattedAmount" 
                        label="Loan Amount"
                        max={50000000}
                        value={values.amountValue}
                        name="amountValue"
                        onBlur={handleChange}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                        }}
                        thousandSeparator={true} 
                        thousandsGroupStyle="lakh"
                      />
                    </Typography>
                  </div>
                </div>
                <br/>
                {/* Interest rate */}
                <div className="row">
                  <div className="col-8 mt-3">
                    <Slider
                      value={values.interestValue}
                      step={0.1}
                      min={1}
                      max={20}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      onChange={handleChangeCoordination('interestValue')}
                    />
                  </div>
                  <div className="col-3">
                    <Typography id="interest" gutterBottom>
                      <NumberFormat
                        id="formattedInterest"
                        customInput={TextField}
                        label="Interest Rate" 
                        name="interestValue"
                        value={values.interestValue}
                        onBlur={handleChange}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">p.a</InputAdornment>,
                        }}
                      />
                    </Typography>
                  </div>
                </div>
                <br/>
                {/* loan term */}
                <div className="row">
                  <div className="col-8 mt-3">
                    <Slider
                      value={values.yearValue}
                      step={1}
                      min={1}
                      max={30}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      onChange={handleChangeCoordination('yearValue')}
                    />
                  </div>
                  <div className="col-3">
                    <Typography id="years" gutterBottom>
                      <NumberFormat
                        id="formattedYear" 
                        customInput={TextField}
                        label="Loan Term" 
                        name="yearValue"
                        value={values.yearValue}
                        onBlur={handleChange}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">years</InputAdornment>,
                        }}
                      />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-5 text-center">
                <h4 className="text-center">Monthly EMI</h4>
                <h1 className="text-center text-danger">
                  <CurrencyFormat 
                    className="pl-2 text-danger" 
                    value={emi} 
                    displayType={'text'}
                    prefix={'Rs.'} 
                    thousandSeparator={true} 
                    thousandSpacing="2s"
                  />
                </h1>
                <p>
                  Principal
                  <CurrencyFormat 
                    className="pl-2 text-danger" 
                    value={values.amountValue} 
                    displayType={'text'}
                    prefix={'Rs.'} 
                    thousandSeparator={true} 
                    thousandSpacing="2s"
                  />
                </p>
                <p>
                  Interest Payable
                  <CurrencyFormat 
                    className="pl-2 text-danger" 
                    value={interestPayable} 
                    displayType={'text'}
                    prefix={'Rs.'} 
                    thousandSeparator={true} 
                    thousandSpacing="2s"
                  />
                </p>
                <p>
                  Total Amount Payable
                  <CurrencyFormat 
                    className="pl-2 text-danger" 
                    value={totalAmountPayable} 
                    displayType={'text'}
                    prefix={'Rs.'} 
                    thousandSeparator={true} 
                    thousandSpacing="2s"
                  />
                </p>
                {/* <button
                  type="button"
                  className="btn btn-lg btn-block shadow btnbuilt btn-primary"
                >
                  Apply For Loan
                </button> */}
                <p className="h6 mt-2">Contact : <span className="font-weight-bold">9841504552, 9813955307</span></p>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
