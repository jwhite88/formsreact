

export default function Date({formElements, handleChange}) {
    return (
        <div id="date">
            <div className="w-64 flex justify-between pt-2">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id="birthday" name="date" value={formElements} onChange={handleChange} />
            </div>
        </div>
    )
}
