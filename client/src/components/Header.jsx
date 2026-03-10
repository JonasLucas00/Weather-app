function Header() {
    return (<div className="flex bg-white/5 border-b border-white/10 justify-between p-4">
        <div>
            <button className="text-xl text-white">Weather</button>
        </div>

        <div className="">
            <button className="mx-2 text-xl text-white/60 hover:text-white transition duration-200">UserIcon</button>
            <button className="mx-2 text-xl text-white/60 hover:text-white transition duration-200">Theme</button>
        </div>
    </div>

    )
}

export default Header