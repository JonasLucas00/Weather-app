function Main({data}){
    return(<div>

        {data &&
            <div>{JSON.stringify(data)}</div>
        }

    </div>)

}
export default Main