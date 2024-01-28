

export default function OptionsMultiple({datalist,selectlabel, handleChange}) {
    return (
        <div className="multipleOption pb-4">
            <div className="w-64 flex justify-between pt-2">
                <label htmlFor="sport">{selectlabel}</label>
                <select id="sport" className="" name="optionsMultiple"  multiple={true} size="5" onChange={handleChange}>
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
