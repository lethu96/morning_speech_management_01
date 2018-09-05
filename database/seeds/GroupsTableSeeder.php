<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLines
class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $group = [
            ['name' => 'Human Development Division/Education Section/Group 3/PHP members'],
            ['name' => 'Human Development Division/Education Section/Group 3/Android members'],
            ['name' => 'Human Development Division/Education Section/Group 3/Ruby members '],
        ];
        
        DB::table('groups')->insert($group);
    }
}
