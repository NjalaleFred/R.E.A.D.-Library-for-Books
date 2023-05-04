

export function Borrowing ({books}) {
    const receiptId = `REC-${Math.floor(Math.random()*10)}-${Math.floor(Math.random()*100)}-${Math.floor(Math.random()*1000)}`
    
    const today = new Date();
    const currentDate=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();       
    const dueDate=((today.getDate())+3) + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
    console.log(dueDate);
}