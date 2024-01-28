

export default function Checkbox({handleChange}) {
  return (
    <div id="checkbox">
    <div className="flex-form">
        <label htmlFor="subscribe">Subscribe</label>
        <input type="checkbox" name="checkbox" id="subscribe" onChange={handleChange} />
    </div>
</div>
  )
}
