<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RequestTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->admin()->create();

        $this->user->each(function (User $user){
            $user->profile()->save(Profile::factory()->make());
        });
    }

    /**
     * A request test for login page
     *
     * @return void
     */
    public function testRequestLoginPage()
    {
        $response = $this->getJson('/login');

        $response->assertOk();
    }

    /**
     * A post request for login with success
     *
     * @return void
     */
    public function testPostRequestForLoginWithSuccess()
    {
        $response = $this->postJson('api/login', ['email' => $this->user->email, 'password' => '303ebiMayo']);

        $response->assertOk()
            ->assertJson([
                'result' => true,
            ]);
    }


    /**
     * A post request for login with success
     *
     * @return void
     */
    public function testPostRequestForLoginWithFail()
    {
        $response = $this->postJson('api/login', ['email' => 'test@gmail.com', 'password' => 'password']);

        $response->assertOk()
            ->assertJson([
                'result' => false,
            ]);
    }
}

