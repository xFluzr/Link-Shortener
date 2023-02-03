export const fetchData=async(userUrl)=>{
  const response=await fetchData(`https://api.shrtco.de/v2/${userUrl}`);
  return response.json();
}