import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ReportChart from '../components/ReportChart';

const Home = () => {
    console.log("Reached Home")
    return (
        <div>
            <h1 className='font-medium text-center text-xl'>Expense Tracker</h1>
            <ExpenseForm />
            <ExpenseList />
            <ReportChart />
        </div>
    )
}

export default Home;