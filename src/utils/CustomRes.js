export const handleStatus = (data) => {
    let status = ''
    if(data === 1){
        status = "Hoạt Động"
    } else {
        status = "Không hoạt Động"
    }
    return status
}

export const handleFee = (data) => {
    let status = ''
    if(data === 1){
        status = "Miễn Phí"
    } else {
        status = "Tính Phí"
    }
    return status
}