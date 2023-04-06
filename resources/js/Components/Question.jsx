import { Link } from '@inertiajs/react'

const Question = ({ options }) => {
    const item = options.map((option, id) => {
        return (
            <tr key={option.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{option.title}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{option.type}</td>
            </tr>
        )
    })

    return (
        <div>
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">{item}</tbody>
            </table>
        </div>
    )
}

export default Question
