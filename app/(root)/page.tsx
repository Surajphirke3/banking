
import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn ={firstName :'Suraj',lastName:'phirke',email:'surajphrike3@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header>
                <HeaderBox
                 type="greeting"
                 title="Welcome "
                 user={loggedIn?.firstName||'guest'}
                 subtext="Access and manage user account and transactions efficiently"
                />
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={5500.20}
                />
                </header>

                recent transcation 

        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[]}       
        />
    </section>
  )
}

export default Home