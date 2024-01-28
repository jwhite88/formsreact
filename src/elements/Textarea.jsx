

export default function Textarea({formElements, handleChange, htmlforid, labeltext}) {
    return (
        <div className="textarea">
            <div className="flex flex-col pt-2 gap-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <textarea name="textarea" id={htmlforid} cols="30" rows="10" value={formElements.textarea} onChange={handleChange}></textarea>
            </div>
        </div>
    )
}
