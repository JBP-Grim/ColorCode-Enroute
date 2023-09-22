function Color(props){
    return (
        <div id={props.propid} className="col-1">
            <p>{props.color}</p>
        </div>
    );
} 

export default Color;