import FormLayout from '@/Layouts/FormLayout'
import Form from '@/Components/Form'
import { Head, useForm } from '@inertiajs/react'

export default function AllForms({ auth, forms }) {
    return (
        <FormLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">All forms</h2>
            }
        >
            <Head title="All forms" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div>
                            <h1>All forms</h1>
                            <Form options={forms} />
                        </div>
                    </div>
                </div>
            </div>
        </FormLayout>
    )
}
