import React from 'react'

type Props = {}

const HeaderTitle = (props: Props) => {
  return (
    <div className="p-8 bg-emerald-700 rounded-xl grid grid-cols-3 md:grid-cols-4 grid-rows-1 justify-between max-h-[244px]">
      <div className="flex flex-col gap-2 col-span-2 md:col-span-3 justify-between">
        <div>
          <p className="text-base font-normal text-white">Best seller</p>
          <p className="text-xl font-bold text-white capitalize">
            GeForce 1050Ti
          </p>
        </div>
        <p className="text-emerald-200 font-light text-xs cursor-pointer">
          Order now -{'>'}
        </p>
      </div>
      <div className="bg-emerald-800 aspect-square p-1 rounded-2xl h-ful">
        <img
          className="aspect-square"
          src="https://xtremegames.com.ar/wp-content/uploads/2022/02/product_7_20180411113751_5acd830f900d9.png"
          alt="GeForce 1050Ti"
        />
      </div>
    </div>
  )
}

export default HeaderTitle
