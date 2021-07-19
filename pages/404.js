import Link from 'next/link';
import { Image } from 'cloudinary-react';

export default function NotFoundPage() {
  return (
    <div className='bg-white min-h-screen flex flex-col lg:relative'>
      <div className='flex-grow flex flex-col'>
        <main className='flex-grow flex flex-col bg-white'>
          <div className='flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8'>
            <div className='flex-shrink-0 pt-10 sm:pt-16'>
              <Link href='/' className='inline-flex'>
                <span className='inline-flex cursor-pointer'>
                  <span className='sr-only'>Keke Cook</span>
                  <img
                    className='h-12 w-auto'
                    src='/assets/images/keke_cook_logo.svg'
                    alt='Keke Cook'
                  />
                </span>
              </Link>
            </div>
            <div className='flex-shrink-0 my-auto py-16 sm:py-32'>
              <p className='text-sm font-semibold font-hind text-rose-500 uppercase tracking-wide'>
                Erreur 404
              </p>
              <h1 className='mt-2 text-4xl font-extrabold font-hind text-blue-gray-800 tracking-tight sm:text-5xl'>
                Page introuvable
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                Désolé, nous n'avons pas trouvé la page que vous recherchez.
              </p>
              <div className='mt-6'>
                <Link href='/' className='text-base font-medium font-hind'>
                  <span className='text-rose-500 hover:text-rose-500 cursor-pointer'>
                    Accueil<span aria-hidden='true'> &rarr;</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <Image
          className='absolute inset-0 h-full w-full object-cover'
          cloudName='dmcookpro'
          publicId='keke-recettes/keke-recettes-404.jpg'
          loading='lazy'
          width='100%'
          height='100%'
        ></Image>
      </div>
    </div>
  );
}
