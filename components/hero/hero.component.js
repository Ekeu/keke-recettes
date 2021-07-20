import { Image } from 'cloudinary-react';

import PatternRect from '../patterns/pattern-rect.component';

export default function Hero() {
  return (
    <div className='bg-white pb-8 sm:pb-12 lg:pb-12'>
      <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
        <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24'>
          <div>
            <div>
              <img
                className='h-16 w-16'
                src='/assets/images/keke_cook_logo.svg'
                alt='Keke Cook'
              />
            </div>
            <div className='mt-10'>
              <div className='mt-6 sm:max-w-xl'>
                <h1 className='text-4xl font-extrabold font-hind text-blue-gray-800 tracking-tight sm:text-5xl'>
                  Découvrez et réalisez vos propres recettes!
                </h1>
                <p className='mt-6 text-xl text-blue-gray-500 font-hind'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo, aliqua ad ad non deserunt sunt.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='hidden sm:block'>
              <div className='absolute inset-y-0 left-1/2 w-screen bg-blue-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
              <PatternRect
                className='absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0'
                id='837c3e70-6c3a-44e6-8854-cc48c737b659'
              />
            </div>
            <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
              <Image
                className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                cloudName='dmcookpro'
                publicId='keke-recettes/keke-recettes-hero-3.jpg'
                loading='lazy'
                width='100%'
                height='100%'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
