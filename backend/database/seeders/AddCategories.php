<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddCategories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'title' => 'Instagram',
                'alias' => 'instagram'
            ],
            [
                'title' => 'Facebook',
                'alias' => 'facebook'
            ]
        ]);
    }
}
