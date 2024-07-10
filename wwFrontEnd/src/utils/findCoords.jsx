
export const findCoords = (event) =>{
    const rect = event.target.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100
    return ([xPercent, yPercent])
}