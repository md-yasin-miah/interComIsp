import React from 'react'

const SectionTitle = ({ title, subTitle, className = 'w-fit mb-5' }) => {
  const tittleClass = "pl-8 text-[35px] relative font-semibold before:content-[''] before:w-[5px] before:h-full before:top-0 before:left-0 before:block before:absolute before:bg-gradient-to-b before:from-primary before:to-secondary"
  return (
    <div className={`${className}`}>
      <h2 className={tittleClass}>
        {title?.split(' ')?.[0]}
        <span className="text-primary">
          {' '}{title?.split(' ')?.slice(1)?.join(' ')}
        </span>
      </h2>
      <p className="text-base leading-6 pl-8">{subTitle}</p>
    </div>
  )
}

export default SectionTitle