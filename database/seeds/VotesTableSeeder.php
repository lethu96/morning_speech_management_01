<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLine
class VotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $vote = [
            [
                'user_id' => 1,
                'post_id' => 2,
                'type_vote' => 'vote_up',
            ],
            [
                'user_id' => 2,
                'post_id' => 1,
                'type_vote' => 'vote_up',
            ],
            [
                'user_id' => 1,
                'post_id' => 3,
                'type_vote' => 'vote_down',
            ],
            [
                'user_id' => 2,
                'post_id' => 3,
                'type_vote' => 'vote_down',
            ],
        ];

        DB::table('votes')->insert($vote);
    }
}
