

export default function Radio({ datalist, handleChange }) {
    return (
        <div className="radio">
            {
                datalist.map((data, idx) => {
                    return (
                        <div key={idx} className="flex-form">
                            <label htmlFor={data.name.toLowerCase()}>{data.name}</label>
                            <input type="radio" name="radio" id={data.name.toLowerCase()} value={data.name} onChange={handleChange} />
                        </div>
                    )
                })
            }
        </div>
    )
}
