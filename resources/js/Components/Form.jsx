import { Link } from '@inertiajs/react'

const Form = ({ options }) => {
    const item = options.map((option, id) => {
        return (
            <li key={option.id}>
                <Link
                    href={route('form.show', { id: option.id })}
                    className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {option.title}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <ul>{item}</ul>
        </div>
    )
}

export default Form
