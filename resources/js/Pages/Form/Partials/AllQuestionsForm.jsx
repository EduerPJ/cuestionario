import Question from '@/Components/Question'
import PrimaryButton from '@/Components/PrimaryButton'
import { Link } from '@inertiajs/react'

export default function AllQuestionsForm({ questions, className = '' }) {
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Questions</h2>
            </header>

            <Question options={questions} />
            <div className="flex items-center justify-end mt-4">
                <Link
                    href={route('form.index')}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <PrimaryButton className="ml-4">Visualize the form</PrimaryButton>
                </Link>
            </div>
        </section>
    )
}
