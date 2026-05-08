


//const Nav=()=>{
    // function Nav(){
    const Nav=function(){
    return(
        <nav style={{ backgroundColor: "goldenrod", height:"90px" }}>
            <ol style={ListStylings.ol}>
                <li style={ListStylings.list}>Home</li>
                <li style={ListStylings.list}>About</li>
                <li style={ListStylings.list}>Contact</li>
                <li style={ListStylings.list}>Services</li>
            </ol>
        </nav>
    )}


// declaring stylings 

const ListStylings={
    list:{
        backgroundColor:"plum",padding:" 10px 20px ", fontSize:"22px",fontStyle:"italic",fontWeight:"bold",
        color:"red",borderRadius:"20px",cursor:"pointer",boxShadow: "2px 2px 5px black",textShadow: "1px 1px 2px black"
    },
    ol:{
        display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"30px",margin:"10px",listStyle:"none",padding:"30px"
    }
}    
export default Nav;


