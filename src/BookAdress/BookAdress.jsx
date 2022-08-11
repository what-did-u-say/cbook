import React from 'react'
import styles from './BookAdress.module.css'

const BookAdress = (props) => {
    return (
        <div className={styles.userBlock}>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Surname</p>
                <p className={styles.info}>{props.item.name}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Name</p>
                <p className={styles.info}>{props.item.username}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Email</p>
                <p className={styles.info}>{props.item.email}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>City</p>
                <p className={styles.info}>{props.item.address.city}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Street</p>
                <p className={styles.info}>{props.item.address.street}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>House number</p>
                <p className={styles.info}>{props.item.address.suite}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Phone number</p>
                <p className={styles.info}>{props.item.phone}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Company</p>
                <p className={styles.info}>{props.item.company.name}</p>
            </div>
            <div className={styles.blockInfo}>
                <p className={styles.title}>Website</p>
                <p className={styles.info}>{props.item.website}</p>
            </div>
        </div>
    )

}

export default BookAdress