<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLine
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CompanysTableSeeder::class);
        $this->call(GroupsTableSeeder::class);
        $this->call(WorkspacessTableSeeder::class);
        $this->call(PositionsTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(UserGroupTableSeeder::class);
    }
}
