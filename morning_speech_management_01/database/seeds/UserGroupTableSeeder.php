<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLine
class UserGroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userGroup = [
            [
                'user_id' => 2,
                'group_id' => 3
            ],
            [
                'user_id' => 1,
                'group_id' => 3
            ],
            [
                'user_id' => 2,
                'group_id' => 1
            ],
            [
                'user_id' => 1,
                'group_id' => 2
            ],
        ];

        DB::table('group_user')->insert($userGroup);
    }
}
