import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export default function ContentAuthor({ author, updatedAt }) {
  return (
    <div className='relative font-semibold text-center uppercase'>
      <p className='text-sm text-blue-gray-800 font-semibold font-hind sm:inline'>
        {author?.name}
      </p>{' '}
      <p className='text-sm sm:inline font-hind text-blue-gray-800'>
        {' '}
        | {moment(updatedAt).format('ll')}
      </p>
    </div>
  );
}
