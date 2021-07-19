import ToggleWithIcon from '../toggle/toggle-w-icon.component';

export default function Navbar() {
  return (
    <nav className='bg-white'>
      <>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-end h-16'>
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
