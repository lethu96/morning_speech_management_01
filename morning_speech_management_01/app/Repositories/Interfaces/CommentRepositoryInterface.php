<?php
 
namespace App\Repositories\Interfaces;
 
interface CommentRepositoryInterface
{
    public function getCommentOfPost($postId);
 
    public function create($request);
}
