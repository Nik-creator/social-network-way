
const OutputPost = ({post})=>{
    const style = {
        div:{
            marginBottom:'50px',
        }
    }

    return (
        <div>
            <div style={style.div}>Ваши посты</div>

            <div>
                {post.map((post, index)=>
                    <div key={index}>{post}</div>
                )
                }
            </div>

        </div>
    )
}
export default OutputPost;