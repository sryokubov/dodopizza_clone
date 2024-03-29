import styles from './Stars.module.scss';

interface StarsProps {
  rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }: StarsProps) => {
  const isHalfStarNeeded = (): boolean => {
    const floatingPart = rating % 1;
    return floatingPart >= 0.5;
  };

  return (
    <ul className={styles['stars-list']}>
      {Array(Math.trunc(rating))
        .fill('')
        .map(() => {
          return (
            <li
              key={'star' + Math.trunc(Math.random() * 100)}
              className={styles['stars-list__item']}
            >
              <img src='/icons/star-fill.svg' alt='star' />
            </li>
          );
        })}

      {isHalfStarNeeded() && (
        <li className={styles['stars-list__item']}>
          <img src='/icons/star-half-fill.svg' alt='star' />
        </li>
      )}
    </ul>
  );
};

export default Stars;
