<?php

namespace Database\Factories;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tag::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
        ];
    }

    public function php()
    {
        return $this->state(function (array $attribute){
            return [
                'name' => '#PHP'
            ];
        });
    }

    public function laravel()
    {
        return $this->state(function (array $attribute){
            return [
                'name' => '#Laravel'
            ];
        });
    }

    public function docker()
    {
        return $this->state(function (array $attribute){
            return [
                'name' => '#Docker'
            ];
        });
    }
}
