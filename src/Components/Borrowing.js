import { useState } from "react";


export function Borrowing ({books}) {
    //Sets the value of the receipt to a dynamic value that is random
    const [receipt, setReceipt] = useState(`REC-${Math.floor(Math.random()*10)}-${Math.floor(Math.random()*100)}-${Math.floor(Math.random()*1000)}`)
    //Sets the value of the borrower to an empty state
    const [borrower, setBorrower] = useState('')
    //Sets the value of the borrowed book to an empty state
    const [specificBook, setSpecificBook] = useState('')
    
    //This event handles the input of the borrower's information
    const handleUser = (e) => {
        //Set the value of the empty borrower to the input value
        setBorrower(
            [e.target.name] = e.target.value
        )
    }
    
    //Assigns the current date and time to an empty variable
    const today = new Date();
    //Formats the value of the above variable to show only the date and time
    const currentDate = parseInt(today.getMonth()+1) +"/" + today.getDate() + "/"+ today.getFullYear();
    //Uses the current date to calculate the due date by adding 3 days
    const dueDate = parseInt(today.getMonth()+1) + "/" + ((today.getDate())+3) + "/"+ today.getFullYear();


    return (
        /*The main body of the webpage*/
        <div style={{border: 'solid', borderColor: 'black'}}>

            {/*Contains all the styling of the header information*/}
            <header style={{
                    backgroundColor: 'whitesmoke',
                    padding: '20px',
                    border: 'solid',
                    borderColor: 'gray'
                    }}>
                "Borrow A Book"
            </header>


            <div>
                {/*Contains all the styling of the header info of the second div*/}
                <header style={{
                    backgroundColor: 'gray',
                    padding: '5px',
                    border: 'dashed',
                    borderColor: 'black'
                    }}>
                    Borrower's Information
                </header>

                {/*Contains all the styling of the borrower information div*/}
                <div style={{display:'inline-grid'}}>
                    <input 
                        /*Stores the borrower's name as an input field*/
                        style={{textAlign:'center', width:'400px', margin: '10px'}}
                        type='text'
                        name="borrower"
                        value={borrower}
                        onChange={handleUser}
                        placeholder='NAME'/>
                    <input 
                        /*Stores the borrower's phone number as an input field*/
                        style={{textAlign:'center', width:'400px', margin: '10px'}}
                        type='number'
                        name="borrowerPhone"
                        placeholder='PHONE NUMBER'/>
                </div>
            </div>


            <div>
                {/*Contains all the styling of the header info of the third div*/}
                <header style={{
                    backgroundColor: 'gray',
                    padding: '5px',
                    border: 'dashed',
                    borderColor: 'black'
                    }}>
                    Borrowing Details
                </header>

                {/*The borrowing details div*/}
                <div style={{display:'inline-grid'}}>
                    <p style={{textAlign:'center', width:'400px', margin: '5px'}}
                        >
                        RECEIPT NUMBER: {receipt}
                    </p>
                    <input 
                    /*Stores the book title as an input field*/
                        style={{textAlign:'center', width:'400px', margin: '5px'}}
                        type='text'
                        placeholder='BOOK'
                        onChange={(e)=>{
                            setSpecificBook(e.target.value)
                        }}/>
                    <p  /*Stores the current date as a field*/ 
                        style={{textAlign:'center', width:'400px', margin: '5px', fontSize:'15px'}}>
                        BORROW DATE: {currentDate}
                    </p>
                    <p /*Stores the due date as a field*/ 
                        style={{textAlign:'center', width:'400px', margin: '5px', fontSize:'15px'}}>
                        DUE DATE: {dueDate}
                    </p>
                    <input /*Controls the submission of the borrowed book*/ 
                        style={{alignContent:'center', width:'100px', margin: '5px', fontSize:'15px', padding: '5px'
                                , backgroundColor:'violet', cursor:'pointer'}}
                        onClick={(e)=>{
                            /*Outputs an alert that confirms the borrowing*/ 
                            alert(`Confirmed borrowing of ${specificBook} by ${borrower} on ${currentDate} with receipt ${receipt} due ${dueDate}` )
                        }}
                        type='submit'
                        />
                </div>
            </div>
        </div>
    )
}