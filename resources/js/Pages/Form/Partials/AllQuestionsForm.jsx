import Question from '@/Components/Question'

export default function AllQuestionsForm({ questions, className = '' }) {
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Questions</h2>

                <p className="mt-1 text-sm text-gray-600">All questions</p>
            </header>

            <Question options={questions} />
        </section>
    )
}
