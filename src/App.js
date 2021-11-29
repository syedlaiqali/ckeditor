import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { First } from "./home/First";
import Button from "@restart/ui/esm/Button";
import { useState ,} from "react";

function App() {
  const [scolor, setColor] = useState("white");
  const [fontsiz, setFontsiz] = useState(16);
  const [ffamily, setFfamily] = useState("moz-initial");
  const [gback, setGback]=useState('');
  const [style , setStyle]= useState('');
  const [ fweight, setFweight] =useState('');
  const [fvariant, setFvariant] =useState('');
  const [tdecoration, setTdecoration]= useState('');
  const [bimage, setBimage]= useState('')
  
  return (
    <div>
      <div id="dd1"></div>
      <h1 id="hh1"> PickupBiz Ck Text Editor___✍ </h1>
      {
        <textarea
          name=""
          id="text1"
          cols="100"
          rows="15"
          style={{ color: `${scolor}`,fontSize: `${fontsiz}px`,fontFamily:`${ffamily}`,backgroundColor:`${gback}`, fontStyle:`${style}`,
           fontWeight:`${fweight}`, fontVariant:` ${fvariant}`,textDecoration:`${tdecoration}`, backgroundImage:`${bimage}`,

          }}
          
        ></textarea>
      }
       {/* this found color buttons */}
      
      <niv id="dropwon">
        <a href=""  className="drophed1">Colors</a>
        
        <niv id="droplist">
      <Button id="colblk" className="color0"
        // onClick={(e) => (scolor == "red" ? setColor("black") : setColor("red"))}
        onClick={(e) => setColor("black")}></Button>
      <Button id="a" className="color1" onClick={(e) => setColor("blue")}></Button>
      <Button id="a" className="color2" onClick={(e) => setColor("green")}></Button>
      <Button id="a" className="color3" onClick={(e) => setColor("white")}></Button>
      <Button id="a" className="color4" onClick={(e) => setColor("violet")}></Button>
      <Button id="a" className="color5" onClick={(e) => setColor("yellow")}></Button>
      <Button id="a" className="color6" onClick={(e) => setColor("red")}></Button>
      <Button id="a" className="color7" onClick={(e) => setColor("indigo")}></Button>
      <Button id="a" className="color8" onClick={(e) => setColor("purple")}></Button>
      <Button id="a" className="color9" onClick={(e) => setColor("orange")}></Button>
      
      </niv>
      </niv>
      {/* found color button end */}
      {/* this is fontsiz buttton */}
      <Button className="plusb" onClick={(e) => setFontsiz(fontsiz + 2)}> +fontsiz</Button>
      <Button className="mines" onClick={(e) => setFontsiz(fontsiz - 2)}>- fontsiz</Button>
      {/* fondsizbutton end */}
      {/* this is fontFamily button */}
      <nav id="dropwon2">
        < a id="stylehed" href="">Fontstyle</a>
        
        <nav id="droplist2">
      <Button id="b" className="style1" onClick={(e)=> setFfamily("fantasy")}>fantasy</Button>
      <Button id="b" className="style2" onClick={(e)=> setFfamily("cursive")}>cursive</Button>
      <Button id="b" className="style3" onClick={(e)=> setFfamily("monospace")}>monospace</Button>
      <Button id="b" className="style4" onClick={(e)=> setFfamily("sans-serif")}>sans-serif</Button>
      <Button id="b" className="style5" onClick={(e)=> setFfamily("serif")}>serif</Button>
      <Button id="b" className="style6" onClick={(e)=> setFfamily("'Courier New', Courier, monospace")}>Courier,N</Button>
      
      </nav>
      </nav>
         {/* this background color */}
         <niv id="dropwon3"> 
         <Button id="bgbutton">bgcolor</Button>
         <niv id="droplist3">

      <Button id="b3" className="b31" onClick={(e)=> setGback("	#606a37")}></Button>
      <Button id="b3" className="b32" onClick={(e)=> setGback("	#1a0700")}></Button>
      <Button id="b3" className="b33" onClick={(e)=> setGback("  #000033")}></Button>
      <Button id="b3" className="b34" onClick={(e)=> setGback(" #330000 ")}></Button>
      <Button id="b3" className="b35" onClick={(e)=> setGback(" #1a3300 ")}></Button>
      <Button id="b3" className="b36" onClick={(e)=> setGback(" #331f00 ")}></Button>
      <Button id="b3" className="b37" onClick={(e)=> setGback("#d9d9d9")}></Button>
      </niv>
      </niv>
      {/* this is fontStyle Button */}
       <Button onClick={(e)=>(style == "italic"? setStyle("normal"):setStyle("italic"))}>italic</Button>
          {/* fontweight button */}

        <Button onClick={(e)=>(fweight == "bold"? setFweight("normal"): setFweight("bold"))}>bold</Button>  
         {/* fonstVariant/////////// */}
         <Button onClick={(e)=>(fvariant == "small-caps"? setFvariant("normal"): setFvariant("small-caps"))}>small-caps</Button>
            
            {/* textDecoration */}
         <Button onClick={(e)=>(tdecoration=="underline"? setTdecoration("none"): setTdecoration("underline"))}>underlin</Button>
         <Button onClick={(e)=>(tdecoration==" overline"? setTdecoration("none"): setTdecoration(" overline"))}> overline</Button>
         <Button onClick={(e)=>(tdecoration=="line-through"? setTdecoration("none "): setTdecoration("line-through"))}> line-through</Button>
         <Button onClick={(e)=>(tdecoration==" underline overline"? setTdecoration("none"): setTdecoration(" underline overline"))}> underline overline</Button>
         <Button onClick={(e)=> setBimage("url(./texture/texture1.jpg)")}>texure</Button>
         <Button onClick={(e)=> setBimage("url(./texture/texture2.jpg)")}>texure</Button>
         <Button onClick={(e)=> setBimage("url(./texture/texture3.jpg)")}>texure</Button>
         <Button onClick={(e)=> setBimage("url(./texture/texture4.jpg)")}>texure</Button>
         <Button onClick={(e)=> setBimage("url(./texture/texture5.jpg)")}>texure</Button>
         <Button onClick={(e)=> setBimage("url(none)")}>texure none</Button>
         
         

         
    </div>
  );
}

export default App;
