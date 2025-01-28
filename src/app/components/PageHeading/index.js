import styles from './styles.module.css';

const PageHeading = ({ text }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {text.split(' ').map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </h1>
    </div>
  );
};

export default PageHeading;

