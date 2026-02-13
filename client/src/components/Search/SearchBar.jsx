function SearchBar() {
    return (<div className="bg-red-300  p-2 m-2 w-[700px] h-[350px] rounded-xl">
        Inform your city and data bellow
        <button className="cursor-pointer m-2 border-2 border-black p-2" onClick={async () => {
            try {
                const response = await fetch("http://localhost:3000")

                if (!response.ok) {
                    throw new Error(`Status error: ${response.status}`)

                }
                const data = await response.json()
                console.log(data)
                return
            } catch (error) {
                console.log(`HTTP error: ${error}`)
                return
            }
        }}>Click here</button>
    </div>

    )
}

export default SearchBar