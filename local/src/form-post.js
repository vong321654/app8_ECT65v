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
                <input type="text" name="name" size="43" placeholder="ชื่อ" style={inputStyle}/><br/>
                <input type="email" name="email" size="43" placeholder="อีเมล" style={inputStyle}/><br/>
                <textarea name="message" col="40" rows="4" placeholder="ข้อความ"></textarea><br/>
                <button>ตกลง</button>
            </form>
            <br/>
            <div dangerouslySetInnerHTML={{_html:postedData}}></div>
        </div>
    )
}