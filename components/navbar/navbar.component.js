import Link from 'next/link';

import ToggleWithIcon from '../toggle/toggle-w-icon.component';

export default function Navbar() {
  return (
    <nav className='bg-white dark:bg-blue-gray-800'>
      <>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex px-2 lg:px-0'>
              <div className='flex-shrink-0 flex items-center'>
                <Link href='/'>
                  <img
                    className='block lg:hidden h-10 w-auto cursor-pointer'
                    src='/assets/images/keke_cook_logo.svg'
                    alt='Keke Cook'
                  />
                </Link>
                <Link href='/'>
                  <img
                    className='hidden lg:block h-10 w-auto cursor-pointer'
                    src='/assets/images/keke_cook_logo.svg'
                    alt='Keke Cook'
                  />
                </Link>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <ToggleWithIcon />
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
