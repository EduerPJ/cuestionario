const SingleChoice = ({ options, name, label, onChange }) => {
    const optionTemplate = options.map((option) => {
        return (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
        )
    })

    return (
        <div>
            <label for={name}>{label}</label>
            <select onChange={onChange} name={name} id={name}>
                {optionTemplate}
            </select>
        </div>
    )
}

export default SingleChoice
