<?php

use Illuminate\Database\Seeder;
use App\EloquentModels\Post;

// @codingStandardsIgnoreLines
class PostsTableSeeder extends Seeder
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
    const MEDIA_URL = [
        'chan.jpg',
        'test.jpg',
    ];
    const VIDEO_URL = [
        'testvideo.mp4',
        'test.mp4',
    ];
    const TITLE = [
        'This is a post Morning Speech 1',
        'This is a post Morning Speech 2',
        'This is a post Morning Speech 3',
    ];
    const CONTENT = [
        'Content of Morning Speech 01',
        'Content of Morning Speech 02',
        'Content of Morning Speech 03',
    ];

    private function processDay(Datetime $day)
    {
        for ($i = 2; $i <= self::NUMBER_OF_USER_ID; $i++) {
            $this->createPost($day, $i);
        }
    }

    private function createPost(Datetime $day, $userID)
    {
        $post = new Post;
        $post->title = self::TITLE[mt_rand(0, count(self::TITLE) - 1)];
        $post->content = self::CONTENT[mt_rand(0, count(self::CONTENT) - 1)];
        $post->img = self::MEDIA_URL[mt_rand(0, count(self::MEDIA_URL) - 1)];
        $post->video = self::MEDIA_URL[mt_rand(0, count(self::VIDEO_URL) - 1)];
        $post->user_id = $userID;
        $post->saveOrFail();
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
