<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::insert([
            [ 'name' => 'react', 'created_at' => now(), 'updated_at' => now() ],
            [ 'name' => 'laravel', 'created_at' => now(), 'updated_at' => now() ],
            [ 'name' => 'docker', 'created_at' => now(), 'updated_at' => now() ],
        ]);
    }
}
