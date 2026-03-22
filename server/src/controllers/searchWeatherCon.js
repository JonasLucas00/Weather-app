async function searchWeather(req,res){
    const {phrase} = req.query

    console.log(phrase)
    return res.json({message: "Hello there from the server"})
    // try {
        
    // } catch (error) {
        
    // }
}

export default searchWeather