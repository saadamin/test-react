import styles from './Time.module.css'
const ShowTime = ({ getTime }) => {
    return (
    <p className={styles.timeP}>Current Time : {getTime()}</p>
    )
}

export default ShowTime;