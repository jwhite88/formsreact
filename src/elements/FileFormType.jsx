

export default function FileFormType({ handleChange, htmlforid, labeltext }) {
    return (
        <div className="file">
            <div className="w-[420px] flex justify-between pt-2">
                <label htmlFor={htmlforid}>{labeltext}</label>
                <input type="file" id={htmlforid} className="" name="onefile" onChange={handleChange} />
            </div>
        </div>
    )
}
