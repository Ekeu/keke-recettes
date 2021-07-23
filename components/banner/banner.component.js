import { InformationCircleIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Banner({
  bannerColor,
  iconBgColor,
  textColor,
  mobileText,
  webText,
  linkPath,
  linkClassName,
  linkText,
}) {
  return (
    <div className={`${bannerColor}`}>
      <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='w-0 flex-1 flex items-center'>
            <span className={`flex p-2 rounded-lg ${iconBgColor}`}>
              <InformationCircleIcon
                className={`h-6 w-6 ${textColor}`}
                aria-hidden='true'
              />
            </span>
            <p className={`ml-3 font-medium font-hind ${textColor} truncate`}>
              <span className='md:hidden'>{mobileText}</span>
              <span className='hidden md:inline'>{webText}</span>
            </p>
          </div>
          <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
            <span
              className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm cursor-pointer text-sm font-medium font-hind ${linkClassName}`}
            >
              <Link href={linkPath}>{linkText}</Link>
            </span>
          </div>
          <div className='order-2 flex-shrink-0 sm:order-3'>
            <div className='-mr-1 flex p-2 sm:-mr-2' />
          </div>
        </div>
      </div>
    </div>
  );
}
