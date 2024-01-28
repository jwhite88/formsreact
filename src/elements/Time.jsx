

export default function Time({formElements, handleChange, htmlforid, labeltext}) {
    return (
        <div className="time">
            <div className="w-68 flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <input type="time" id={htmlforid} name="time" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
