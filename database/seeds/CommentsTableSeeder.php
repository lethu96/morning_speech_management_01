<?php

use Illuminate\Database\Seeder;
use App\EloquentModels\Comment;

// @codingStandardsIgnoreLines
class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
 
    const START_DATE = '2018-08-20 00:00:00';
    const INTERVAL = 'P1D';
    const END_DATE = '2018-08-30 00:00:00';
    const NUMBER_OF_USER_ID = 2;
    const NUMBER_OF_POST_ID = [
        3,
        2,
        1,
    ];
    const CONTENT = [
        'This is a comment of a post Morning Speech',
        'This is a comment of a post Morning Speech',
        'This is a comment of a post Morning Speech',
    ];

    private function processDay(Datetime $day)
    {
        for ($i = 2; $i <= self::NUMBER_OF_USER_ID; $i++) {
            $this->createPost($day, $i);
        }
    }

    private function createPost(Datetime $day, $userID)
    {
        $comment = new Comment;
        $comment->user_id = $userID;
        $comment->post_id = self::NUMBER_OF_POST_ID[mt_rand(0, count(self::NUMBER_OF_POST_ID) - 1)];
        $comment->content = self::CONTENT[mt_rand(0, count(self::CONTENT) - 1)];
        $comment->time = $day;
        $comment->saveOrFail();
    }

    public function run()
    {
        $start = new DateTime(self::START_DATE);
        $interval = new DateInterval(self::INTERVAL);
        $end = new DateTime(self::END_DATE);
        $period = new DatePeriod($start, $interval, $end);
        foreach ($period as $date) {
            $hourRandom = mt_rand(0, 23);
            $date->modify('+' . $hourRandom . ' hour');
            $this->processDay($date);
        }
    }
}
