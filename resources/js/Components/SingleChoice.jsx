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
            <label htmlFor={name}>{label}</label>
            <select
                onChange={onChange}
                name={name}
                id={name}
                className={
                    'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                }
            >
                {optionTemplate}
            </select>
        </div>
    )
}

export default SingleChoice
