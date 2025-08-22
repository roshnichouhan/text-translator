import{useState} from "react"
import axios from "axios"
import { LoaderCircle } from "lucide-react"
import { Languages } from 'lucide-react';
import { RotateCw } from 'lucide-react';

function App(){

  const[textInput, setTextInput] = useState("")
  const[selectValue,setSelectValue] = useState("")
const[result,setResult]= useState("")
const[loading,setLoading] = useState(false);

  const handleTextTranslation = async()=>{
    setLoading(true)


    try{
     const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': '3e73a78dabmsh6a2ab6e0b43d117p1aed35jsndaab76eb9f0e',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: `${textInput}`,
    source: 'en',
    target: `${selectValue}`,
    format: 'text'
  }
  
};

const response = await axios.request(options)
setLoading(false)
console.log(response?.data?.data?.translations?.[0]?.translatedText);
setResult(response?.data?.data?.translations?.[0]?.translatedText);


    }catch(error){
       setLoading(false)
       console.log(error?.response?.data || error.message);
    }
  }


  console.log(textInput)
  console.log(selectValue)

  return(
    <div className= "h-screen w-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center">

      <div class="continer " className="bg-white p-10 rounded-2xl shadow-2xl w-[600px] flex flex-col items-center gap-6">

       {/* Header */}
        <div className="flex items-center gap-3">
          <Languages size={35} className="text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Text Translator</h1>
        </div>


      <div className="flex flex-col items-center justify-center gap-y-10 ">
      
       <textarea className="w-140 h-32 border-2 border-gray-300 rounded-lg p-4 text-lg outline-none focus:ring-2 focus:ring-purple-500" onChange={(e)=> setTextInput(e.target.value)}  placeholder="Enter text" >
       
       </textarea>
       

      </div>
      
 {/* Language Selector */}
      <div className="flex items-center gap-4 w-full">
          <label className="font-semibold text-gray-700">Convert to:</label>
          <select
            className="flex-1 border-2 border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">Select</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ru">Russian</option>
            <option value="ar">Arabic</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>
        </div>

 <div className="  flex col-flex relative items-center justify-center ">
      <textarea
        className= "w-140 h-32 border-2 border-gray-300 rounded-lg p-4 text-lg outline-none focus:ring-2 focus:ring-purple-600"value={result} readOnly
        placeholder="Translation..."
      ></textarea>

    </div>


<div className="flex justify-center">
      <button
        className="bg-purple-800 flext w-100 justify-center my-5 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 transition duration-200"
       onClick={handleTextTranslation}>
        <span>🈯</span>{
          loading ? (<LoaderCircle/>) : "Translate"
        }
      </button>
    </div>



      </div>
      </div>
      
    
  
  )
}

export default App;