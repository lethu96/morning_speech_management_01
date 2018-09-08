<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLines
class WorkspacessTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $workspace = [
            ['name' => 'KeangNam', 'address' => 'KeangNam'],
            ['name' => 'Tran Khat Chan', 'address' => 'Tran Khat Chan'],
            ['name' => 'Handico', 'address' => 'Handico'],
        ];
        
        DB::table('workspaces')->insert($workspace);
    }
}
