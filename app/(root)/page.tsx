import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = async () => {
  // 获得登录者信息
  // const loggedIn = { firstName: 'Jack', lastName: 'Div', email: 'jack@gmail.com' }
  const loggedIn = await getLoggedInUser(); 

  // if(loggedIn) redirect('/sign-in')

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            // user={loggedIn?.firstName || 'Guest'}
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

         <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.34}
        />
        </header>
        
        RECENT TRANSACTIONS
      </div>

      {/* 右侧边栏 */}
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250.34 },{ currentBalance: 234.23 }]}
      />
    </section>
  )
}

export default Home
