

export default function UrlFormType({ formElements, handleChange, htmlforid, labeltext }) {
    return (
        <div className="url">
            <div className="w-90 flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <input type="url" id={htmlforid} className="w-80 pl-1" name="url" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
