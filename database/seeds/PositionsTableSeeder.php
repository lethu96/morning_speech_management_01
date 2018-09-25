<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLines
class PositionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $position = [
            ['name' => 'PHP developer'],
            ['name' => 'Android Developer'],
            ['name' => 'Ruby Developer'],
            ['name' => 'PHP Internship'],
            ['name' => 'Android Internship'],
            ['name' => 'Ruby Internship'],
            ['name' => 'PHP Open'],
            ['name' => 'Android Open'],
            ['name' => 'Ruby Open'],
        ];
        DB::table('positions')->insert($position);
    }
}
