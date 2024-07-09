
const randomize = (arrOfImgs) => {
const count = 3
const shuffled = [...arrOfImgs].sort(()=> 0.5- Math.random())
return(shuffled.slice(0,count))
}

export default randomize