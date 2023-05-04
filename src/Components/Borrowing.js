import { useEffect, useState } from "react";


export function Borrowing ({books}) {
    const [receipt, setReceipt] = useState(`REC-${Math.floor(Math.random()*10)}-${Math.floor(Math.random()*100)}-${Math.floor(Math.random()*1000)}`)
    const [borrower, setBorrower] = useState('')

    const handleUser = (e) => {
        setBorrower(
            [e.target.name] = e.target.value
        )
    }
    
    
    const today = new Date();
    const currentDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/" + today.getFullYear();       
    const dueDate=parseInt(today.getMonth()+1) + "/" + ((today.getDate())+3) + "/"+ today.getFullYear();

    return (
        <div style={{border: 'solid', borderColor: 'black'}}>
            <header style={{
                    backgroundColor: 'whitesmoke',
                    padding: '20px',
                    border: 'solid',
                    borderColor: 'gray'
                    }}>
                "Borrow A Book"
            </header>

            <div>
                <header style={{
                    backgroundColor: 'gray',
                    padding: '5px',
                    border: 'dashed',
                    borderColor: 'black'
                    }}>
                    Borrower's Information
                </header>
                <div style={{display:'inline-grid'}}>
                    <input 
                        style={{textAlign:'center', width:'400px', margin: '10px'}}
                        type='text'
                        name="borrower"
                        value={borrower}
                        onChange={handleUser}
                        placeholder='NAME'/>
                    <input 
                        style={{textAlign:'center', width:'400px', margin: '10px'}}
                        type='text'
                        name="borrowerPhone"
                        placeholder='PHONE NUMBER'/>
                </div>
            </div>

            <div>
                <header style={{
                    backgroundColor: 'gray',
                    padding: '5px',
                    border: 'dashed',
                    borderColor: 'black'
                    }}>
                    Borrowing Details
                </header>
                <div style={{display:'inline-grid'}}>
                    <p style={{textAlign:'center', width:'400px', margin: '5px'}}
                        >
                        RECEIPT NUMBER: {receipt}
                    </p>
                    <input 
                        style={{textAlign:'center', width:'400px', margin: '5px'}}
                        type='text'
                        placeholder='BOOK'/>
                    <p style={{textAlign:'center', width:'400px', margin: '5px', fontSize:'15px'}}>
                        BORROW DATE: {currentDate}
                    </p>
                    <p style={{textAlign:'center', width:'400px', margin: '5px', fontSize:'15px'}}>
                        DUE DATE: {dueDate}
                    </p>
                    <input 
                        style={{alignContent:'center', width:'100px', margin: '5px', fontSize:'15px', padding: '5px'
                                , backgroundColor:'violet', cursor:'pointer'}}
                        type='submit'
                        />
                </div>
            </div>
        </div>
    )
}