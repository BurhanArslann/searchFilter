import React from "react";

const Table = ({Data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td style={{fontWeight:"bolder"}}>Name</td>
                    <td style={{fontWeight:"bolder"}}>Surname</td>
                    <td style={{fontWeight:"bolder"}}>Email</td>
                </tr>
               {Data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table