import React, { useState, useEffect } from 'react'
import styles from './Contacts.module.css'
import {Link} from ''

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

        <div className={styles.container}>
			<h1>user information</h1>
			<div className={styles.users}>
				{users.map((item) => (
					<div className={styles.userBlock}>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Surname</p>
							<p className={styles.info}>{item.name}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Name</p>
							<p className={styles.info}>{item.username}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Email</p>
							<p className={styles.info}>{item.email}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>City</p>
							<p className={styles.info}>{item.address.city}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Street</p>
							<p className={styles.info}>{item.address.street}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>House number</p>
							<p className={styles.info}>{item.address.suite}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Phone numberм</p>
							<p className={styles.info}>{item.phone}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Company</p>
							<p className={styles.info}>{item.company.name}</p>
						</div>
						<div className={styles.blockInfo}>
							<p className={styles.title}>Website</p>
							<p className={styles.info}>{item.website}</p>
                  </div>
                  <Link to={`/detalis/${item.id}`}>More about the user</Link>
               </div>
            
				))}
			</div>
		</div>
    );
};
export default Contacts