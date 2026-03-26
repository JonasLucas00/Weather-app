function uvCalc(uv, setUvData){
    console.log('Uv calc',uv)
    const data = uv ? uv.current.uv_index : false

    if(data == null){
        console.log(`no uv data to calculate`)
        return
    }
    console.log('Uv calc',data)

    if(data <= 2 ){ 
        return setUvData({level: 'low', spf:'opcional'}) 
        
    }
    if(data <= 5){ 
        return setUvData({level: 'medium', spf:'15 or 30'}) 
        
    }
    if(data <= 7){ 
        return setUvData({level: 'high', spf:'30'}) 
        
    }
    if(data <= 10){ 
        return setUvData({level: 'very high', spf:'50'}) 
        
    }

    return setUvData({level: 'extreme', spf:'> 50'}) 
    


}

export default uvCalc