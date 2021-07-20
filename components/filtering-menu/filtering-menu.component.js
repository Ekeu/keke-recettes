import {
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from '@heroicons/react/solid';

export default function FilteringMenu({ filter, onChangeView }) {
  return (
    <div className='flex-1 flex items-stretch overflow-hidden'>
      <main className='flex-1 overflow-y-auto'>
        <div className='pt-8 max-w-full mx-auto'>
          <div className='mt-3 sm:mt-2'>
            <div className='hidden sm:block'>
              <div className='flex items-center border-b border-rose-100 pb-3'>
                <div className='hidden bg-rose-100 p-0.5 rounded-lg items-center sm:flex'>
                  <button
                    type='button'
                    onClick={() =>
                      onChangeView('view', { list: !filter.view.list })
                    }
                    className={`p-1.5 rounded-md text-rose-400 ${filter.view.list ? 'bg-white shadow-sm' : 'hover:bg-rose-200 hover:shadow-sm'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500`}
                  >
                    <ViewListIcon className='h-5 w-5' aria-hidden='true' />
                    <span className='sr-only'>
                      Utiliser l'affichage en liste
                    </span>
                  </button>
                  <button
                    type='button'
                    onClick={() =>
                      onChangeView('view', { list: !filter.view.list })
                    }
                    className={`ml-0.5 p-1.5 ${!filter.view.list ? 'bg-white shadow-sm' : 'hover:bg-rose-200 hover:shadow-sm'} rounded-md text-rose-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500`}
                  >
                    <ViewGridIconSolid className='h-5 w-5' aria-hidden='true' />
                    <span className='sr-only'>
                      Utiliser l'affichage en grille
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
/* 

1 ==> bg-white shadow-sm 

0 ==> hover:bg-rose-200 hover:shadow-sm


*/
