import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ToggleWithIcon() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled
          ? 'bg-rose-600 focus:ring-rose-500'
          : 'bg-blue-gray-400 focus:ring-blue-gray-500',
        'relative inline-flex flex-shrink-0 h-9 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      )}
    >
      <span className='sr-only'>Changer le mode d'éclairage</span>
      <span
        className={classNames(
          enabled ? 'translate-x-7' : 'translate-x-0',
          'pointer-events-none relative inline-block h-8 w-8 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <MoonIcon className='h-6 w-6 text-blue-gray-400' />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <SunIcon className='h-6 w-6 text-yellow-400' />
        </span>
      </span>
    </Switch>
  );
}
