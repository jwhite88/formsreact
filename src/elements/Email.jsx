

export default function Email({formElements, handleChange}) {
  return (
    <div id="email">
    <div className="flex justify-between pt-2">
        <label htmlFor="emailField">Email</label>
        <input type="email" id="emailField" className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="email" value={formElements} onChange={handleChange} />
    </div>
</div>
  )
}
