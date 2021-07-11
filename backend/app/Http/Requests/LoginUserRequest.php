<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use App\Rules\PasswordRule;

class LoginUserRequest extends FormRequest
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
            'email' => ['required', 'string', 'email', 'exists:users,email'],
            'password' => ['required', 'string', new PasswordRule]
        ];
    }

    /**
     * Handle a failed validation attempt.
     *
     * @param Validator $validator
     * @return void
     * @throw HttpResponseException
     */
    protected function failedValidation(Validator $validator): void
    {
        $data = [
            'data' => [],
            'status' => 'error',
            'summary' => 'Failed validation.',
            'errors' => $validator->errors()->toArray(),
        ];

        throw new HttpResponseException(response()->json(['result' => false, 'status' => 422, 'user' => null, 'message' => $validator->errors()->toArray()]));
    }
}
