<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserValidatorRequest extends FormRequest
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
            'name' => 'required|max:50',
            'phone_contact' => 'required|regex:/^[\(\)\-\ \.\+\/0-9]+$/|max:20',
            'code_id' => 'required|regex:/^[A-Za-z0-9,\ \-\.]+$/|max:20',
            'birth_day' => 'required|date|before:now|after:60 year ago',
            'email' => 'required|string|email|max:255|unique:users',
            'card_number' => 'required|integer',
            'position_id' => 'required|integer',
            'work_space_id' => 'required|integer',
            'opening_date' => 'required|date',
            'close_date' => 'required|date',
            'role' => 'integer',
            'password' => 'required|min:8|max:16',
            'avatar' => 'mimes:gif,png,jpeg|nullable|max:10240',
            'gender' => 'required|in:"male", "female"',
        ];
    }
}
