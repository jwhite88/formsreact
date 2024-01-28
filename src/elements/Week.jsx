

export default function Week({formElements, handleChange, labeltext, labeltextid}) {
    return (
        <div className="week">
            <div className="w-68 flex justify-between pt-2">
                <label htmlFor={labeltextid}>{labeltext}</label>
                <input type="week" id={labeltextid} name="week" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
