import React from 'react'

const StarRating = ({rating,handelRating}) => {
    function stars(x){
        let stars=[]
        for (let i=1;i<=8;i++){
            if (i<=x) {
                stars.push(
                    <span onClic ={()=>handelRating(i)}style={{color:'gold',fontSize:"25px",cursor:"pointer"}}>★</span>
                )
            }else stars.push(
                <span onClik={()=>handelRating(i)}style={{color:'black',fontSize:"25px",cursor:"pointer"}}>★</span>
            )
        }
        return stars
    }
    return (
        <div>
            {stars(rating)}
        </div>
    )
}
StarRating.defaultProps ={handelRating:()=>{}}
export default StarRating
