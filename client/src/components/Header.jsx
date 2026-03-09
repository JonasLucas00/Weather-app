function Header() {
    return (<div className="flex bg-green-400 justify-between p-4">
        <div>
            <button className="text-xl">Weather</button>
        </div>

        <div className="">
            <button className="mx-2 text-xl">UserIcon</button>
            <button className="mx-2 text-xl">Theme</button>
        </div>
    </div>

    )
}

export default Header