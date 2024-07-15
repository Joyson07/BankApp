import Header from '@/components/Header'
import RightSidebar from '@/components/RightSidebar';
import TotalBalance from '@/components/TotalBalance';
import React from 'react'

const Home = () => {
  const loggedIn ={firstName:'Joyson' , lastName: 'Lobo', email:'contact@bank.co.uk'};
  return (
    <section className='home'> 
    <div className='home-content'>
<header className='home-header'>
<Header 
type= "greeting"
title = "Welcome"
user ={loggedIn?.firstName || 'Guest'}
subtext = "Manage your accounts and transactions"

/>
<TotalBalance 
accounts={[]}
totalBanks={1}
totalCurrentBalance={1200.40}



/>

</header>
RECENT TRANSACTIONS
    </div>
    <RightSidebar
    user={loggedIn}
    transactions={[]}
    banks={[{currentBalance:123.50},{currentBalance:150.50}]}
    
    
    />
     </section>
    
   
  )
}

export default Home
