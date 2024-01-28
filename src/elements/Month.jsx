

export default function Month({formElements, handleChange}) {
    return (
        <div className="month">
            <div className="w-68 flex justify-between pt-2">
                <label htmlFor="monthyear">Month and Year</label>
                <input type="month" id="monthyear" name="month" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
