

export default function Hidden({formElements}) {
    return (
        <>
            <input type="hidden" name="hidden" value={formElements} />
        </>
    )
}
