

export default function NumberStep({formElements, handleChange, htmlforid, labeltext, step}) {
    return (
        <div className="numberStep">
            <div className="w-28 flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <input type="number" id={htmlforid} className="w-12 pl-1" name="numberStep" step={step} value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
