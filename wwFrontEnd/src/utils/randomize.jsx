
const randomize = (arrOfImgs) => {
    if(arrOfImgs !== undefined) {
        const count = 3
        const shuffled = [...arrOfImgs].sort(()=> 0.5- Math.random())
        return(shuffled.slice(0,count))
    }
    return []
}

export default randomize