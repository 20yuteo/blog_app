<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class LoginRequestTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->state([
            'name' => '20yuteo',
            'email' => '20yuteo@gmail.com',
            'password' => Hash::make('ghshandball'),
        ])->create();
    }

    /**
     * A post request for login with success
     *
     * @return void
     */
    public function testPostRequestForLoginWithSuccess()
    {
        $response = $this->post('/login', ['user' => $this->user]);

        $response->assertRedirect('/');
    }
}
