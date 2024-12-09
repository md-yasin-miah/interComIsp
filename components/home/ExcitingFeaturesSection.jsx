import React from 'react'
import FeatureCard from '../cards/FeatureCard'
import SectionTitle from '../shared/SectionTitle'

const ExcitingFeaturesSection = () => {
  return (
    <section className='bg-background2 dark:bg-black py-20'>
      <div className="customContainer">
        <SectionTitle
          title='Exciting features'
          subTitle='Join now and enjoy the exciting features from NetCom online'
        />
        <div className='grid grid-cols-3 gap-5 pt-10'>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  )
}

export default ExcitingFeaturesSection