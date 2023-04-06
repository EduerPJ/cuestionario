import { useState } from 'react'
import FormLayout from '@/Layouts/FormLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SingleChoice from '@/Components/SingleChoice'
import TextInput from '@/Components/TextInput'
import AllQuestionsForm from './Partials/AllQuestionsForm'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Show({ auth, form, questions }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        type: 'text',
        formId: form.id,
    })
    // const [questions, setQuestions] = useState([])

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


        </FormLayout>
    )
}
