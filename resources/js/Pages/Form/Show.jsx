import { useState } from 'react'
import FormLayout from '@/Layouts/FormLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SingleChoice from '@/Components/SingleChoice'
import TextInput from '@/Components/TextInput'
import AllQuestionsForm from './Partials/AllQuestionsForm'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Show({ auth, form }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        type: 'text',
    })
    const [questions, setQuestions] = useState([])

    const submit = (e) => {
        e.preventDefault()

        post(route('question.store'))
    }

    return (
        <FormLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Add questions</h2>
            }
        >
            <Head title="Add questions" />
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="mb-6">
                            <h1>
                                Add questions to the form: <strong>{form.title}</strong>
                            </h1>
                            <p>{form.description}</p>
                        </div>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                    isFocused={true}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                />

                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="type" value="Type" />

                                <SingleChoice
                                    id="type"
                                    type="text"
                                    name="type"
                                    value={data.type}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('type', e.target.value)}
                                    required
                                    options={[
                                        { value: 'text', text: 'Text' },
                                        { value: 'single', text: 'Single Choice' },
                                        { value: 'multiple', text: 'Multiplo Choice' },
                                    ]}
                                />

                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('form.index')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    All forms
                                </Link>

                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Add
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <AllQuestionsForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </FormLayout>
    )
}
