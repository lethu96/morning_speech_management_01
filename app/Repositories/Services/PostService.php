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
        $post = $this->model->whereKey($id)->with('user')->first();

        $collection = collect($post);

        return $collection;
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
        $posts = Post::withCount(['vote','comments', 'vote as checkVote' => function ($query) {
            $user_id = Auth::user()->id;
                $query->where('user_id', '=', $user_id);
            }])->get();

        foreach ($posts as $post) {
              $post->comments_count;
              $post->vote_count;
              $post->user;
              $post->checkVote;
        }
        $collection = collect($posts);

        return $collection;
    }

    public function myPost()
    {
        $user_id = Auth::user()->id;
        $posts = $this->model->where('user_id',$user_id)->get();
        foreach ($posts as $key => $post) {
           $post->user;
        }

        return response()->json($posts);
    }

}
