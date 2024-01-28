

export default function NumberInputType({formElements, handleChange, htmlforid, labeltext}) {
  return (
    <div className="number">
    <div className="w-28 flex justify-between pt-2">
        <label htmlFor={htmlforid}>{labeltext}</label>
        <input type="number" id={htmlforid} className="w-12 pl-1" name="number" value={formElements} onChange={handleChange} />
    </div>
</div>
  )
}
