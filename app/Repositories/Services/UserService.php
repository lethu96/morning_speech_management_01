<?php
 
namespace App\Repositories\Services;
 
use App\User;
use Illuminate\Support\Collection;
use App\Repositories\Interfaces\UserRepositoryInterface;
 
class UserService implements UserRepositoryInterface
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }
 
    public function getAll()
    {
        $user = User::where('status', '=', '1')->get();
        foreach ($user as $key => $name) {
            $name->position->name;
            $name->company->name;
            $name->workSpace->name;
        }
        $collection = collect($user);

        return $collection;
    }

    public function delete($id)
    {
        $destroy = User::where('id', '=', $id)->update(['status' => 0]);
        return $destroy = response()->json(['Success' => 'Delete Success'], 200);
    }

    public function create($request)
    {
        $request['password'] = bcrypt($request['password']);
        $user = $this->model->create($request->all());

        return response()->json($user);
    }

    public function getById($id)
    {
        $user = $this->model->find($id);

        return response()->json($user);
    }

    public function update($id, $request)
    {
        if ($request->hasFile('avatar')) {
            $file = $request->avatar;
            $file->move('img', $file->getClientOriginalName());
            $request['avatar'] = 'img' . $file->getClientOriginalName();
        }
        $user = $this->model->find($id)->update($request->all());

        return response()->json($user);
    }

    public function random($workSpaceId)
    {
        return User::inRandomOrder()->where('work_space_id', '=', $workSpaceId)->take(config('number'))->get();
    }
}
