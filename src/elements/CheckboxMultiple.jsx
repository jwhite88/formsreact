

export default function CheckboxMultiple({ dataarray, handleChange }) {
    return (
        <div id="checkboxmultiple">
            {dataarray.map((data, idx) => {
                return (<div key={idx} className="flex-form">
                    <label htmlFor={data.name.toLowerCase()}>{data.name}</label>
                    <input type="checkbox" name="checkboxMultiple" id={data.name.toLowerCase()} value={data.name} onChange={handleChange} />
                </div>)
            })}
        </div>
    )
}
