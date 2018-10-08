<?php
 
namespace App\Repositories\Services;
 
use App\EloquentModels\Post;
use App\EloquentModels\Vote;
use App\EloquentModels\Follow;
use App\User;
use App\EloquentModels\WorkSpace;
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

        return $post;
    }
 
    public function create($request)
    {
        $result = '';

        $tagId = explode ( ',', $request['tag_id']);

        $request['user_id'] = Auth::user()->id;

        $post = $this->model->create($request->all());

        if($post['id']) {
            for( $i = 0; $i < sizeof($tagId); $i ++)
            {
                $result = DB::table('post_tag')->insert([
                    'tag_id' => $tagId[$i],
                    'post_id' => $post['id']
                ]);
            }
        }

        return response()->json($result);
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
        }])->where('confirm', '=', 1)->orderBy('id', 'DESC')->get();

        foreach ($posts as $post) {
            $post->comments_count;
            $post->vote_count;
            $post->user->workspace;
            $post->checkVote;
            $post->postTags->load('tags')->pluck('name');
        }

        return $posts;
    }

    public function myPost()
    {
        $user_id = Auth::user()->id;
        $posts = $this->model->where('user_id', $user_id)->get();
        foreach ($posts as $key => $post) {
            $post->user->workspace;
            $post->postTags->load('tags');
        }

        return $posts;
    }

    public function votePost($request)
    {
        $user_id = Auth::user()->id;
        $count = Vote::where('user_id', $user_id)->where('post_id', $request['post_id'])->count();

        if ($count > 0) {
            $result = Vote::where('user_id', $user_id)->where('post_id', $request['post_id'])->delete();
        } else {
            $result = Vote::create(['post_id' => $request['post_id'],'user_id' => $user_id]);
        }
        
        return $result;
    }

    public function followUser($request)
    {
        $follower = Auth::user()->id;
        $count = Follow::where('user_id', $request['user_id'])->where('follower', $follower)->count();

        if ($count > 0) {
            $result = Follow::where('user_id', $request['user_id'])->where('follower', $follower)->delete();
        } else {
            $result = Follow::create(['user_id' => $request['user_id'],'follower' => $follower]);
        }

        return $result;
    }

    public function topPost()
    {
        
        $month = Carbon::now()->month;

        $posts = DB::table('users')->join('work_spaces', 'work_spaces.id', '=', 'users.work_space_id')
            ->join('posts', 'posts.user_id', '=', 'users.id')
            ->join('votes', 'votes.post_id', '=', 'posts.id')
            ->select(DB::raw('count(work_spaces.id) as total, work_spaces.id, posts.*'))
            ->groupBy('votes.post_id')->orderBy('total', 'DESC')
            ->whereMonth('votes.created_at', $month)
            ->limit(3)->get();

        return $posts;
    }

    public function getUserVote($postId)
    {
        $post = Post::findOrFail($postId);
        $userVotes = Vote::where('post_id', $post['id'])->get();
        if ($userVotes) {
            foreach ($userVotes as $key => $userVote) {
                $userVote->user;
            }
            return $userVotes;
        } else {
            return ;
        }
    }

    public function search($request)
    {
        $search =  $request->search;
        $posts = '';

        if (trim($request->search)) {
            $posts = Post::where('title', 'LIKE', "%{$search}%")
                        ->orderBy('created_at', 'DESC')->limit(5)->get();

            $posts = $posts->map(function ($post, $key) {
                return [
                    'title' => $post['title'],
                    'id'    => $post['id'],
                ];
            });
        }

        return $posts;
    }

    public function choosePostForCampaign()
    {
        $userId = Auth::user()->id;

        $posts = Post::where('user_id', $userId)->where('confirm',NULL)->get();

        return $posts; 
    }
}
