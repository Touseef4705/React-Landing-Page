import { useState } from 'react';
import './App.css'
import Feature from './Component/feature.jsx';
import Footer from './Component/Footer.jsx';
import Header from './Component/Header.jsx';
import Hero from './Component/Hero.jsx';
import Service from './Component/Service.jsx';
import Testimantion from './Component/Testimantional.jsx';
import content from './content/content'
import FinanceTracker from './Component/Financetracker.jsx';


function App() {
  let {header , hero , feature , testimonial , service , footer} = content;
  
  const [amount , setAmount] = useState(0);
  const [type , setType] = useState("Income");
  const [transitions , setTransition] = useState([]);

  const  handleTransition = () =>{
    setTransition([...transitions , {amount , type}])
  };

  const totalIncome = transitions.reduce((acc , transition) => transition.type == "Income" ? acc + Number(transition.amount) : acc , 0)
  const totalExpense = transitions.reduce((acc , transition) => transition.type == "Expense" ? acc + Number(transition.amount) : acc , 0)

  const totalBalance = totalIncome - totalExpense;
  

  return (

    <>
    {/* header section */}
    <Header header={header} />

    {/* Hero Section */}
    <Hero hero={hero} />

    {/* Feature Section */}
    <Feature feature={feature} />

    {/* Testimantion Section */}
    <Testimantion testimonial={testimonial} />

    {/* Service Section */}
    <Service service={service} />

    {/* Finance Tracker */}
    <FinanceTracker amount={amount} type={type} totalIncome={totalIncome} totalExpense={totalExpense} totalBalance={totalBalance} handleTransition={handleTransition} transitions={transitions} setAmount={setAmount} setType={setType} />

    {/* Footer Section */}
    <Footer footer={footer} header={header} />



    </>
  )
}

export default App
