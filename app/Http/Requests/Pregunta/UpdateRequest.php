<?php

namespace App\Http\Requests\Pregunta;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'enunciado' => 'required|min:10',
            'respuestaA' => 'required|min:10',
            'respuestaB' => 'required|min:10',
            'respuestaC' => 'required|min:10',
            'respuestaD' => 'required|min:10',
            'esCorrecto' => [
                'required',
                'min:10',
                Rule::in([
                    $this->respuestaA,
                    $this->respuestaB,
                    $this->respuestaC,
                    $this->respuestaD,
                ])
            ],
        ];
    }
}
