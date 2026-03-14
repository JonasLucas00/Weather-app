function Header() {
    return (<div className="flex bg-sky-500 border-b border-white/10 justify-between p-4">
        <div>
            <button className="text-xl text-white">Weather</button>
        </div>

        <div className="">
            <button className="mx-2 text-xl text-white/60 hover:text-white transition duration-200"><i className="fa-solid fa-user text-2xl"></i></button>
            <button className="mx-2 text-xl text-white/60 hover:text-white transition duration-200">Theme</button>
        </div>
    </div>

    )
}

export default Header