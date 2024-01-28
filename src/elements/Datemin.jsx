

export default function Datemin({ formElements, handleChange, min }) {
    return (
        <div id="datemin">
            <div className="w-64 flex justify-between pt-2">
                <label htmlFor="startdate">Start Date</label>
                <input type="date" id="startdate" name="datemin" min={min} value={formElements} onChange={handleChange} />
            </div>
        </div>

    )
}
