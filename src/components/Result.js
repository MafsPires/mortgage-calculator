import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({data}) => {

  const {homeValue, downPayment, loanAmount, loanTerm, interestRate} = data //destructuring the data object

  const totalLoanMonths = loanTerm * 12 ;//converting the loan term to months 60 mothns = 5 years
  const interestPerMonth = interestRate / 100 / 12 ;//converting the annual interest rate to monthly interest rate

  const monthlyPayment = loanAmount * interestPerMonth *( 1 + interestPerMonth ) ** totalLoanMonths / ( ( 1 + interestPerMonth ) ** totalLoanMonths - 1 ) ;//calculating the monthly payment

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount ;//calculating the total interest generated

   const pieChartData = {
    labels: ['Principle', 'Interest',],
    datasets: [
      {
        label: 'Ratio of Principle and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Stack gap={3}>
      <Typography textAlign='center' variant='h5'>Monthly Payment: $ {monthlyPayment.toFixed(2)}</Typography>
      <Stack direction='row' justifyContent='center'>
        <div>
          <Pie data={pieChartData}/>
        </div>
      </Stack>
    </Stack>
  )
}

export default Result
