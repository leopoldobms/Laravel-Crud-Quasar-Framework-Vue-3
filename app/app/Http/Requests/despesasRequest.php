<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class despesasRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|numeric',
            'data' => 'required|before:today',
            'description' => 'required|max:191',
            'value' => 'required|numeric|min:0',

        ];
    }
}
