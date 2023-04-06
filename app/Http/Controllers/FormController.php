<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function index()
    {
        return Inertia::render(
            'Form/AllForms',
            ['forms' => Form::where('user_id', auth()->user()->id)->get()]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Form/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'string|max:255',
            'user_id' => auth()->user()->id
        ]);

        $form = Form::create([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->route('form.show', ['id' => $form->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Form $id)
    {
        return Inertia::render(
            'Form/Show',
            ['form' => Form::find($id)[0],
            'questions' => Question::all()]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Form $form)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Form $form)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Form $form)
    {
        //
    }
}
