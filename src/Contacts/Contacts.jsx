import React, { useState, useEffect } from 'react'
import TableContact from '../TableContact/TableContact';
import styles from './Contacts.module.css'


const Contacts = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    alert("Error. Status: " + response.status)
                }
            })
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h1>Contact book</h1>
                <div className={styles.abrakadabra}>
                    <ul className={styles.list1a}>
                        {users.map((item) => {
                            return (
                                <TableContact key={item.id} className={styles.list1a} item={item} />
                            )

                        }
                        )
                        }

                    </ul>
                </div>

            </div>

            <div className={styles.draw}>
                <button>A-Z</button>
            </div>


            <div className={styles.help}>
                <form className={styles.d2}>
                    <input type="text" placeholder="Искать здесь..." />
                    <button type="submit" />
                </form>
            </div>


        </>
    );
};
export default Contacts