

export default function Range({formElements, handleChange, htmlforid, labeltext, min, max, step}) {
    return (
        <div className="range">
            <div className=" flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}<span>{formElements}</span></label>
                <input type="range" id={htmlforid} name="range" value={formElements} onChange={handleChange} min={min} max={max} step={step} />
            </div>
        </div>
    )
}
