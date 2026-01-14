 let url = "https://catfact.ninja/fact";

 async function getJocks(){
    try{
        const header ={headers:{Accept:"application/json"}};
        let res = await axios.get(url,header);
        console.log(res.data);
    } catch(err){
        console.log(err);
    }
 }