import BankCard from '@/components/BankCard';
import Header from '@/components/Header'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  return (
    <section className='flex'>
      <div className='my-banks'>
        <Header
        title='Bank Accounts'
        subtext='Manage all your banking activities'
        
        />
        <div className='space-y-6'>
          <h2 className='header-3'>
            All Cards

          </h2>
          <div className='flex flex-wrap gap-6'>
            {/* check if there are accounts, if there are accounts then map the accounts and for each account there is a bank card is generated */}
            {accounts && accounts.data.map((a: Account)=>(
              <BankCard
              key={accounts.id}
              account={a}
              userName={loggedIn?.firstName}
              />
            ))}

          </div>

        </div>
        

      </div>

    </section>
  )
}

export default MyBanks
