<?php

namespace App\Http\Requests\Usuario;

use Illuminate\Foundation\Http\FormRequest;

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
        $rules = [
            'name' => 'required',
            'avatar' => 'nullable|image|mimes:jpeg,jpg,png,gif|max:10000',
            'apellido_paterno' => 'nullable|min:2',
            'apellido_materno' => 'nullable|min:2',
        ];
        if ($this->filled('password')) {
            $rules['password'] = ['confirmed', 'min:6'];
        }
        return $rules;
    }
}
