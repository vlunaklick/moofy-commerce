import React from 'react'

type Props = {
  topText?: string
  title?: string
  message?: string
  image?: string
}

const HeaderHome = ({
  topText,
  title = 'Title',
  message = 'message ->',
  image,
}: Props) => {
  return (
    <div className="p-8 bg-emerald-700 rounded-xl grid grid-cols-3 md:grid-cols-4 grid-rows-1 justify-between max-h-[244px]">
      <div className="flex flex-col gap-2 col-span-2 md:col-span-3 justify-between">
        <div>
          {topText && (
            <p className="text-base font-normal md:text-2xl text-white">
              {topText}
            </p>
          )}
          <p className="text-xl md:text-3xl font-bold text-white normal-case">
            {title}
          </p>
        </div>
        <p className="text-emerald-200 font-light text-xs cursor-pointer">
          {message}
        </p>
      </div>
      <div className="bg-emerald-800 aspect-square p-1 rounded-2xl h-ful">
        <img className="aspect-square" src={image} alt="GeForce 1050Ti" />
      </div>
    </div>
  )
}

export default HeaderHome
