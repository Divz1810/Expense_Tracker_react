import './Card.css';

function Card(props){

    const classes= 'card ' + props.className;//jo classes jaha se card laga hai usme hai vo classes b rhegi + card class b add ho jae
    
    return <div className= {classes}>{props.children}</div> 
    //agar props.children na lagate to jis div pe card laga hai uske andr k children work na krte
}
export default Card;
