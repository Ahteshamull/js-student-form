let Student = document.getElementById('student')
let title = document.getElementById('title')
let batch = document.getElementById('batch')
let studentId = document.getElementById('student_Id')
let StudentList = document.getElementById('Student-list')

// let btn = document.getElementById('btn')



// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log("click");
// })
// console.log(Student);
Student.addEventListener('submit',(e)=>{
        e.preventDefault()
        let titleValue = title.value;
        let batchvalue = batch.value;
        let studentIdvalue = studentId.value;
       


        if(titleValue ==''&& batchvalue ==''&& studentIdvalue ==''){
        alert('Please Fill Up The Form')
        }else{

            let tr = document.createElement('tr')

            let td = document.createElement('td')       
            td.innerHTML=titleValue;
            tr.appendChild(td)
            StudentList.appendChild(tr)

            let ntd = document.createElement('td')       
            ntd.innerHTML=batchvalue;
            tr.appendChild(ntd)
            StudentList.appendChild(tr)

            let nntd = document.createElement('td')       
            nntd.innerHTML=studentIdvalue;
            tr.appendChild(nntd)
            StudentList.appendChild(tr)
        }
})