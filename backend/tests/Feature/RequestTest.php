<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RequestTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testRequestTopPage()
    {
        $response = $this->get('/');

        $response->assertOk();
    }

    /**
     * A request test for about page
     *
     * @return void
     */
    public function testRequestAboutPage()
    {
        $response = $this->get('/about');

        $response->assertOk();
    }

    /**
     * A request test for login page
     *
     * @return void
     */
    public function testRequestLoginPage()
    {
        $response = $this->get('/login');

        $response->assertOk();
    }
}
