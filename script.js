let ultasks = $('#ultasks')
let btnadd = $('#btnadd')
let btnreset = $('#btnreset')
let inpnewtask = $('#inpnewtask')
let itr = document.getElementById('ultasks')
let btncleanup =$('#btncleanup')
let btnsort = $('#btnsort')

window.onload=function(){
    toggleresetbtn(true)
    toggleotherbtn(true)
}
function additem(){
    if(inpnewtask.val()!=0){
        let listitem=$('<li>',{
            'class':'list-group-item',
            text: inpnewtask.val()
        })
        // listitem.click(()=>{
        //     Console.log('clicked')
        //     // $(event).toggleClass('disabled')
        // })
        ultasks.append(listitem)
        inpnewtask.val('')
    }
    toggleresetbtn(true)
    toggleotherbtn(false)
}

btnadd.click(()=>{
    additem()
})

btncleanup.click(()=>{
    $('#ultasks > .done').remove()
    toggleotherbtn(true)
})

inpnewtask.keypress((e) =>{
    if(e.which==13){
        additem()
    }
})

itr.onclick = function(event) {
    // console.log('clicked',event.target.classList.contains('done'))
    if(event.target.classList.contains('done')){
        event.target.classList.remove('done')
        if($('#ultasks > .done').length==0){
            toggleotherbtn(true)
        }
    }
    else{
        event.target.className +=' done'
        toggleotherbtn(false)
    }
}

btnreset.click(()=>{
    inpnewtask.val('')
    toggleresetbtn(true)
})

btnsort.click(()=>{
    $('#ultasks > .done').appendTo(ultasks)
    btnsort.prop('disabled',true)
})
function toggleresetbtn(valisempty){
    if(valisempty){
        btnreset.prop('disabled',true)
        btnadd.prop('disabled',true)
    } 
    else{
        btnreset.prop('disabled',false)
        btnadd.prop('disabled',false)
    } 
}
function toggleotherbtn(valisempty){
    if(valisempty){
        btnsort.prop('disabled',true)
        btncleanup.prop('disabled',true)
    } 
    else{
        btnsort.prop('disabled',false)
        btncleanup.prop('disabled',false)
    } 
}
inpnewtask.on('input',()=>{
    // inpnewtask.val()!= ''
    toggleresetbtn(inpnewtask.val()==0)
})