import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/sorting/slice';
import { Sort as SortType, SortPropertyEnum } from '../../redux/sorting/types';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortPopupProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  { name: 'по рейтингу(от высокого к низкому)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'по рейтингу(от низкого к высокому)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'по дате(сначала новые)', sortProperty: SortPropertyEnum.DATE_DESC },
  { name: 'по дате(сначала старые)', sortProperty: SortPropertyEnum.DATE_ASC },
];

const Sorting = memo(({ value }: SortPopupProps): JSX.Element => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sorting">
      <div className="sorting__label">
        <b>Сортировать:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{value.name}</span>
      </div>
      {isOpen && (
        <div className="sorting__popup">
          <ul>
            {sortList?.map((obj, i) => (
              <li
                key={obj.name}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sorting;