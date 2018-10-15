<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tag = [
            [

                'name' => 'Công việc'
            ],
            [

                'name' => 'Gia Đình'
            ],
            [

                'name' => 'Câu chuyện cuộc sống'
            ],
            [
                'name' => 'Giải trí'
            ],
            [

                'name' => 'Ẩm thực'
            ],
            [

                'name' => 'Du lịch'
            ],
            [

                'name' => 'Du hành'
            ],
            [
                'name' => 'Du ca'
            ],
        ];

        DB::table('tags')->insert($tag);
    }
}
