import {
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
  SortAscendingIcon,
  SortDescendingIcon,
} from '@heroicons/react/solid';

import FilterButton from '../button/button-filter.component';

export default function FilteringMenu({ filter, onChangeView }) {
  return (
    <div className='flex-1 flex items-stretch overflow-hidden'>
      <main className='flex-1 overflow-y-auto'>
        <div className='pt-8 max-w-full mx-auto'>
          <div className='mt-3 sm:mt-2'>
            <div className=' sm:block'>
              <div className='flex items-center border-b border-rose-100 dark:border-blue-gray-700 pb-3'>
                <FilterButton
                  onClick={() =>
                    onChangeView('view', { list: !filter.view.list })
                  }
                  textColor='text-rose-400 dark:text-rose-500'
                  filterAttribute={filter.view.list}
                  bgHoverColor='hover:bg-rose-200'
                  FirstSortIcon={ViewListIcon}
                  SecondSortIcon={ViewGridIconSolid}
                  firstSRDescriptionText="Utiliser l'affichage en liste"
                  secondSRDescriptionText="Utiliser l'affichage en grille"
                  constainerClassName='bg-rose-100'
                />
                <FilterButton
                  onClick={() =>
                    onChangeView('sort', { asc: !filter.sort.asc })
                  }
                  textColor='text-violet-400 dark:text-violet-500'
                  filterAttribute={filter.sort.asc}
                  bgHoverColor='hover:bg-violet-200'
                  FirstSortIcon={SortAscendingIcon}
                  SecondSortIcon={SortDescendingIcon}
                  firstSRDescriptionText='Trier par ordre croissant'
                  secondSRDescriptionText='Trier par ordre décroissant'
                  containerClassName='ml-4 bg-violet-100 '
                />
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
