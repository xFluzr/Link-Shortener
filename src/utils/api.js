export const fetchData=async(userUrl)=>{
  try{
    const response=await fetch(`https://api.shrtco.de/v2/shorten?url=${userUrl}`);
    const data= await response.json();
    const results=await data.result;
    const result = Object.keys(results).map((key) => results[key]);
    return result;
  }
  catch(e){
    return null;
  }
 
}