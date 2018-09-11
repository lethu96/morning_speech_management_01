<?php
 
namespace App\Repositories\Services;
 
use App\EloquentModels\Post;
use App\EloquentModels\Vote;
use Auth;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use App\Repositories\Interfaces\PostRepositoryInterface;
 
class PostService implements PostRepositoryInterface
{
    public function __construct(Post $model)
    {
        $this->model = $model;
    }
 
    public function getAll()
    {
        $post = Post::where('status', '=', '1')->get();
        foreach ($post as $key => $name) {
            $name->user->name;
        }
        $collection = collect($post);

        return $collection;
    }
 
    public function getById($id)
    {
        $post = $this->model->find($id);

        return response()->json($post);
    }
 
    public function create($request)
    {
        $request['user_id'] = Auth::user()->id;
        $post = $this->model->create($request->all());

        return response()->json($post);
    }
 
    public function update($id, $request)
    {
        $user = $this->model->find($id)->update($request->all());

        return response()->json($user);
    }
 
    public function delete($id)
    {
        $destroy = Post::where('id', '=', $id)->update(['status' => 0]);

        return $destroy = response()->json(['Success' => 'Delete Success'], 200);
    }

    public function viewUpdate($id)
    {
        $dataPost = $this->model($id)->toArray();

        return response()->json($dataPost);
    }

    public function ranking()
    {
        $month = Carbon::now()->month;
        $selects = [
            'posts.*',
            'users.name',
            'users.code_id',
            'users.avatar',
            'COUNT(votes.post_id) AS  number_vote',
        ];
        $result = DB::table('posts')->join('users', 'posts.user_id', '=', 'users.id')
                                    ->join('votes', 'votes.post_id', '=', 'posts.id')
                                    ->selectRaw(implode(',', $selects))
                                    ->where('votes.type_vote', '=', 'vote_up')
                                    ->whereMonth('posts.created_at', $month)
                                    ->groupBy('posts.id')
                                    ->orderBy(\DB::raw('count(votes.post_id)'), 'DESC')
                                    ->get();
        $collection = collect($result);

        return $collection;
    }

    public function listPost()
    {
        $items = Post::where('status', '=', '1')->get();
        foreach ($items as $key => $item) {
            $item->user;
            $item->comments->count();
            $item->vote->count();
        }
        $collection = collect($items);

        return $collection;
    }
}
