<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLines
class CompanysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companies')->insert([
            'name' => 'Framgia Viet Nam',
            'address' => 'KeangNam',
        ]);
    }
}
