import Header from '@/components/Header'
import PaymentTransferForm from '@/components/PaymentTranferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const PaymentTransfer = async() => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  return (
    <section className='payment-transfer'>
      <Header
      title='Payment Transfer'
      subtext='Please provide the required details'
      
      />
      <section className='size-full pt-6'>
        <PaymentTransferForm accounts={accountsData}/>


      </section>

    </section>
  )
}

export default PaymentTransfer
