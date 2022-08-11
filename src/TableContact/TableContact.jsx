import React from 'react'
import { useState } from 'react'
import BookAdress from '../BookAdress/BookAdress'


const TableContact = (props) => {

    const [active, setActive] = useState()

    return (
        <li onClick={() => setActive(active ? false : true)}>{props.item.name}
            {active && <BookAdress item={props.item} />}
        </li>
    )
}

export default TableContact