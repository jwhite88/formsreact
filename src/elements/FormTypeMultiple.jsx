

export default function FormTypeMultiple({handleChange, htmlforid, labeltext}) {
    return (
        <div className="filesMultiple">
            <div className="w-[420px] flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <input type="file" id={htmlforid} multiple={true} className="" name="filesMultiple" onChange={handleChange} />
            </div>
        </div>
    )
}
