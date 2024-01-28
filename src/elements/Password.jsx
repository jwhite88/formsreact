

export default function Password({formElements, handleChange}) {
  return (
    <div id="password">
    <div className="flex justify-between pt-2">
        <label htmlFor="passwordfield">Password</label>
        <input type="password" id="passwordfield" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="password" value={formElements} onChange={handleChange} />
    </div>
</div>
  )
}
