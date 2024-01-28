

export default function DateTimeLocal({formElements, handleChange, labeltext}) {
    return (
        <div className="dateTimeLocal">
            <div className="w-68 flex justify-between pt-2">
                <label htmlFor={labeltext.toLowerCase()}>{labeltext}</label>
                <input type="datetime-local" id="appointment" name="dateTimeLocal" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
