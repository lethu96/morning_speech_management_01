<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserValidatorRequest extends FormRequest
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
            'name' => 'max:50',
            'phone_contact' => 'regex:/^[\(\)\-\ \.\+\/0-9]+$/|max:20',
            'code_id' => 'regex:/^[A-Za-z0-9,\ \-\.]+$/|max:20',
            'birth_day' => 'date|before:now|after:60 year ago',
            'card_number' => 'integer',
            'position_id' => 'integer',
            'work_space_id' => 'integer',
            'opening_date' => 'date',
            'close_date' => 'date',
            'role' => 'integer',
            'gender' => 'in:"male", "female"',
        ];
    }
}
