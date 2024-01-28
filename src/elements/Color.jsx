

export default function Color({formElements, handleChange, htmlforid, labeltext}) {
    return (
        <div className="color">
            <div className="w-56 flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}<span>{formElements.color}</span></label>
                <input type="color" id={htmlforid} className="w-8" name="color" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
