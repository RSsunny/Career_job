

const getApply=()=>{
    const jobDetails=localStorage.getItem('job_apllay');
    if(jobDetails){
        return JSON.parse(jobDetails)
    }
    return [];
}

const saveApplidJob=id=>{
        const jobLocalStorage=getApply()
        const exists= jobLocalStorage.find(jobid=>jobid === id)
        if(!exists){
            jobLocalStorage.push(id)
            localStorage.setItem('job_apllay',JSON.stringify(jobLocalStorage ) )
        }
        
        
}
export {saveApplidJob , getApply}