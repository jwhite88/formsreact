

export default function Option({datalist, handleChange,selectlabel}) {
    return (
        <div className="option pb-4">
            <div className="w-60 flex justify-between pt-2">
                <label htmlFor="sport">{selectlabel}</label>
                <select id="sport" className="" name="option" onChange={handleChange}>
                <option disabled={true} selected={true}>Choose...</option>
                    {
                        datalist.map((data, idx) => {
                            return(
                                <option key={idx} value={data.name}>{data.name}</option> 
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}
