

export default function Telephone({formElements, handleChange, htmlforid, labeltext}) {
    return (
        <div id="tel">
            <div className="flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <input type="tel" id={htmlforid} className="w-64 border-solid border-[1px] border-slate-700 rounded pl-1" name="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
