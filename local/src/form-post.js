import React from 'react';
export default function FormPost(){
    let[postedData, setPostedData]= React.useState("")
    const form = React.useRef()

    const onSubmitForm = (event)=>{
        event.preventDefault()
        const formData = new FormData(form.current)
        const formEnt = Object.formEnt(formEnt.entries())
        fetch('/api/form-post', {
            method: 'POST',
            body: JSON.stringify(formEnt),
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.text())
        .then(result => setPostedData(result))
        .catch(err => alert(err))
    }

    const inputStyle = {
        margin : 'Spx 0',
    }
    return (
        <div style={{margin:'30px'}}>
            <form ref={form} onSub={onSubmitForm}>
                <div>ติดต่อเรา</div>
            </form>
        </div>
    )
}