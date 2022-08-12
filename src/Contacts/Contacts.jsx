/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import TableContact from '../TableContact/TableContact';
import styles from './Contacts.module.css'
import { Link } from 'react-router-dom';


const Contacts = () => {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
/*     const [order, setOrder] = useState(false); */

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


/*     function handleSort() {
        
        if (order === false) {
            const sortedData = [...users].sort((a, b) => a.name > b.name ? 1 : -1)
            setUsers(sortedData) 
        }else if(order === true){
           return [...users].sort((b, a) => a - b).reverse()
        }

    } */

    return (
        <>
            <div className={styles.container}>
                <h1>Contact book</h1>
                <div className={styles.abrakadabra}>
                    <ul className={styles.list1a}>
                        {users
                            .filter((val) => {
                                if (searchTerm === '') {
                                    return val;
                                } else if (
                                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val
                                };
                            })
                            .map((item) => {
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
           
           

              <button /* onClick={handleSort} */>A-Z</button>
            
              

            </div>


            <div className={styles.help}>
                <form className={styles.d2}>
                    <input onChange={(e) => { setSearchTerm(e.target.value) }} type="text" placeholder="Искать здесь..." />
                    <Link to="#">
                        <button />
                    </Link>
                </form>
            </div>

        </>
    );
};
export default Contacts