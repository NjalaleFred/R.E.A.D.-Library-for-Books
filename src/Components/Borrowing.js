

export function Borrowing ({books}) {
    const receiptId = `REC-${Math.floor(Math.random()*10)}-${Math.floor(Math.random()*100)}-${Math.floor(Math.random()*1000)}`
    
    const today = new Date();
    const currentDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();       
    const dueDate=((today.getDate())+3) + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();

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
                        placeholder='NAME'/>
                    <input 
                        style={{textAlign:'center', width:'400px', margin: '10px'}}
                        type='number'
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
                    <p style={{textAlign:'center', width:'400px', margin: '5px'}}>
                        RECEIPT ID:
                    </p>
                    <input 
                        style={{textAlign:'center', width:'400px', margin: '5px'}}
                        type='text'
                        placeholder='BOOK'/>
                    <input 
                        style={{textAlign:'center', width:'400px', margin: '5px', fontSize:'15px'}}
                        type='date'
                        placeholder='BORROWING DATE'/>
                    <p style={{textAlign:'center', width:'400px', margin: '5px', fontSize:'15px'}}>
                        DUE DATE:
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