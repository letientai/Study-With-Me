export const handleStatus = (data) => {
    let status = ''
    if(data === 1){
        status = "Hoạt Động"
    } else {
        status = "Không hoạt Động"
    }
    return status
}