<?php

namespace App\Http\Controllers\Admin;

use App\Exam;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Examen\CreateRequest;
use App\Http\Requests\Examen\UpdateRequest;

class ExamenController extends Controller
{
    public function index()
    {
        return view('admin.exams.index',[
            'examenes' => Exam::paginate(7)
        ]);
    }

    public function create()
    {
        return view('admin.exams.create',[
            'examen' => new Exam()
        ]);
    }

    public function store(CreateRequest $request)
    {
        Exam::create($request->validated());
        return redirect()->route('admin.examens.index');
    }

    public function show(Exam $examen)
    {
        return view('admin.exams.show', compact('examen'));
    }

    public function edit(Exam $examen)
    {
        return view('admin.exams.edit', compact('examen'));
    }

    public function update(UpdateRequest $request, Exam $examen)
    {
        $examen->update($request->validated());
        return redirect()->route('admin.examens.index');
    }
}
