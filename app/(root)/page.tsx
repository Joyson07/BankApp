import Header from '@/components/Header'
import RightSidebar from '@/components/RightSidebar';
import TotalBalance from '@/components/TotalBalance';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return(
    <section className='home'> 
    <div className='home-content'>
<header className='home-header'>
<Header 
type= "greeting"
title = "Welcome"
user ={loggedIn?.name || 'Guest'}
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
