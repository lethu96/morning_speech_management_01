<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentValidatorRequest extends FormRequest
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
<<<<<<< HEAD
            'content' => 'required|max:300',
=======
            'user_id' => 'required|integer',
            'post_id' => 'required|integer',
            'content' => 'required|text',
>>>>>>> de30220b9035b459237b02d03e3f20c81063a288
        ];
    }
}
