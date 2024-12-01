import React from 'react'
import FeatureCard from '../cards/FeatureCard'
import SectionTitle from '../shared/SectionTitle'

const ExcitingFeaturesSection = () => {
  return (
    <section className='bg-background2 py-16'>
        <div className="customContainer">
            <SectionTitle
                title='Exciting features'
                subTitle='Join now and enjoy the exciting features from Exord online'
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