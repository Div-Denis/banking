'use client'

import CountUp from 'react-countup'

// 动画计数器

const AnimatedCounter = ({amount} : {amount: number}) => {
  return (
    <div className='w-full'>
      <CountUp
        // 动画持续时间
        duration={2}
        // 小数点后位数
        decimals={2}
        // 小数点
        decimal='.'
        // 前缀
        prefix='$' 
        // 结束值
        end={amount}
      />
    </div>
  )
}

export default AnimatedCounter
