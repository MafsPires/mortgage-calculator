import React from 'react'
import SliderComponent from './common/SliderComponent'


const SliderSelect = ({data, setData}) => {

  const bank_limit= 10000

  return (
    <>

      <SliderComponent
      label='Home Value'
      unit='$'
      amount={data.homeValue}
      min={1000}
      max={bank_limit}
      defaultValue={data.homeValue}
      value={data.homeValue}
      step={100}
      onChange={(e, value)=> setData({ ...data,
        downPayment: value * 0.2,
        loanAmount: value * 0.8,
        homeValue: value})} //...data is used to keep the previous value of the state and only update the value of homeValue
      />


      <SliderComponent
      label='Down Payment'
      unit='$'
      amount={data.downPayment}
      min={0}
      max={data.homeValue}
      defaultValue={data.downPayment}
      value={data.downPayment}
      step={100}
      onChange={(e, value)=> setData({ ...data,
        loanAmount: (data.homeValue - value), //value here its the downPayment
        downPayment: value})}
      />

      <SliderComponent
      label='Loan Amount'
      unit='$'
      amount={data.loanAmount}
      min={0}
      max={data.homeValue}
      defaultValue={data.loanAmount}
      value={data.loanAmount}
      step={100}
      onChange={(e, value)=>setData({ ...data,
        downPayment: (data.homeValue - value),
        loanAmount: value})}
      />

      <SliderComponent
        label='Interest Rate'
        unit='%'
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        amount={data.interestRate}
        step={0.5}
        onChange={(e, value)=> setData({ ...data, interestRate: value})}
      />

    </>
  )
}

export default SliderSelect
//onChange={(e, value)=> console.log(value)}
