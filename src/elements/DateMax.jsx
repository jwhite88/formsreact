

export default function DateMax({formElements, handleChange, max}) {
    return (
        <div id="datemax">
            <div className="w-64 flex justify-between pt-2">
                <label htmlFor="enddate">End Date</label>
                <input type="date" id="enddate" name="datemax" max={max} value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
