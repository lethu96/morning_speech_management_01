<?php
 
namespace App\Repositories\Services;
 
use App\User;
use App\EloquentModels\Follow;
Use App\EloquentModels\WorkSpace;
use Auth;
use DB;
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
        $users = User::where('status', '=', '1')->get();
        foreach ($users as $key => $user) {
            $user->position->name;
            $user->workSpace->name;
        }
        $collection = collect($users);

        return $collection;
    }

    public function delete($id)
    {
        $destroy = User::where('id', '=', $id)->update(['status' => 0]);
        return $destroy = response()->json(['Success' => 'Delete Success'], 200);
    }
        
    public function create($request)
    {
        $user = new User;

        if ($request->hasFile('avatar')) {
                $file = $request['avatar'];
                $file->move('images', $file->getClientOriginalName());
                $user->avatar = '/images/' . $file->getClientOriginalName();
            } else {
                $user->avatar = '/images/avatar.jpg';
            }
        $user->name = $request['name'];
        $user->password = bcrypt($request['password']);
        $user->email = $request['email'];
        $user->code_id = $request['code_id'];
        $user->card_number = $request['card_number'];
        $user->gender = $request['gender'];
        $user->birth_day = $request['birth_day'];
        $user->phone_contact = $request['phone_contact'];
        $user->work_space_id = $request['work_space_id'];
        $user->position_id = $request['position_id'];
        $user->company_id = $request['company_id'];
        $user->opening_date = $request['opening_date'];
        $user->close_date = $request['close_date'];
        $user->save();

        return response()->json($user);
    }

    public function getById($id)
    {
        $user = $this->model->find($id);

        return response()->json($user);
    }

    public function update($id, $request)
    {
        $user = $this->model->find($id);
        if ($request->hasFile('avatar')) {
                $file = $request['avatar'];
                $file->move('images', $file->getClientOriginalName());
                $user->avatar = '/images/' . $file->getClientOriginalName();
            } else {
                $user->avatar = '/images/avatar.jpg';
            }
        $user->name = $request['name'];
        $user->password = bcrypt($request['password']);
        $user->email = $request['email'];
        $user->code_id = $request['code_id'];
        $user->card_number = $request['card_number'];
        $user->gender = $request['gender'];
        $user->birth_day = $request['birth_day'];
        $user->phone_contact = $request['phone_contact'];
        $user->work_space_id = $request['work_space_id'];
        $user->position_id = $request['position_id'];
        $user->company_id = $request['company_id'];
        $user->opening_date = $request['opening_date'];
        $user->close_date = $request['close_date'];
        $user->save();

        return response()->json($user);
    }

    public function random($workSpaceId)
    {
        return User::inRandomOrder()->where('work_space_id', '=', $workSpaceId)->take(5)->get();
    }

    public function profile ()
    {
        $user = Auth::user();
        $position = $user->position->name;
        $count = $user->followers->count();
        $following  =  $user->following->count();

        $collection = collect($user);
        $collection->put('userFollow', $count);
        $collection->put('following', $following);
        $collection->put('position', $position);


        return $collection;
    }

    public function suggest()
    {
        $workspace_id = Auth::user()->work_space_id;
        $users = $this->model->where('work_space_id',$workspace_id)->limit(4)->get();
        foreach ($users as $key => $position) {
            $position->position->name;
        }

        $collection = collect($users);

        return $collection;
    }

    public function follows($request)
    {
        $user_id = Auth::user()->id;
        $request['follower'] = $user_id ;
        dd($request->all());
        $follow = Follow::create($request->all());
        
        return response()->json($follow);
    }
    public function notFollow()
    {
        $user = Auth::user();
        $user_id = Auth::user()->id;
        $userFollowing = $user->following()->with('following')->pluck('user_id')->prepend($user_id);
        $listUser = DB::table('users')->whereNotIn('id', $userFollowing)->get();
        $collection = collect($listUser);

        return $collection;

    }
    public function getFollowing()
    {
        $user = Auth::user();

        $follower = $user->following()->with('following')->get();

        $collection = collect($follower);

        return $collection;
    }
}