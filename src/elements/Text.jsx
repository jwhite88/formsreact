export default function Text({formElements, handleChange}) {
    return (
        <div id="text">
            <div className="flex justify-between pt-2">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="text" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
