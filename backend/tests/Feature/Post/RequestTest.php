<?php

namespace Tests\Feature\Post;

use App\Models\User;
use App\Repositories\Post\PostRepository;
use App\Repositories\Post\PostRepositoryInterface;
use Exception;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RequestTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()
            ->state([
                'name' => 'test name'
            ])
            ->create();

        $this->post = Post::factory()
            ->state([
                'user_id' => $this->user->id
            ])->create();
    }

    /**
     * A request for get all posts when unAuthorized.
     *
     * @return void
     */
    public function testGetAllPostsWhenUnAuthorized()
    {
        $this->withoutExceptionHandling();
        $this->expectException(Exception::class);
        ($this->getJson('api/posts'))->execute(1);
    }

    /**
     * A request for get all posts when authorized.
     *
     * @return void
     */
    public function testGetAllPostsWhenAuthorized()
    {
        $this->withoutExceptionHandling();
        $request = $this->actingAs($this->user)
            ->getJson('api/posts');
        $request->assertOk();
    }

    /**
     * A request for create post when unAuthorized.
     *
     * @return void
     */
    public function testPostPageRequestWhenUnAuthorized()
    {
        $this->withoutExceptionHandling();
        $this->expectException(Exception::class);
        ($this->postJson('api/post', ['title' => 'test title', 'content' => 'test content']))->execute(1);
    }

    /**
     * A request for create post when Authorized.
     *
     * @return void
     */
    public function testPostPageRequestWhenAuthorized()
    {
        $this->withoutExceptionHandling();
        $request = $this->actingAs($this->user)
            ->postJson('api/post', ['title' => 'test content', 'content' => 'test content']);
        $request->assertOk()
            ->assertJson([
                'result' => true
            ]);

        $this->assertSame(2, Post::all()->count());
    }

    /**
     * A request for update post when unAuthorized.
     *
     * @return void
     */
    public function testUpdatePostRequestWhenUnAuthorized()
    {
        $this->withoutExceptionHandling();
        $this->expectException(Exception::class);
        ($this->putJson('api/post', ['id' => $this->post->id, 'title' => 'updated title', 'content' => 'updated content']))->execute(1);
    }

    /**
     * A request for update post when Authorized.
     *
     * @return void
     */
    public function testUpdatePostRequestWhenAuthorized()
    {
        $this->withoutExceptionHandling();
        $result = $this->actingAs($this->user)
            ->putJson('api/post', ['id' => $this->post->id, 'title' => 'updated title', 'content' => 'updated content']);
        $result->assertOk()
            ->assertJson([
                'result' => true
            ]);
        $this->assertSame('updated title', Post::find($this->post->id)->title);
        $this->assertSame('updated content', Post::find($this->post->id)->content);
    }

    /**
     * A request for create post when post repository throw exception.
     *
     * @return void
     */
    public function testPostPageRequestWhenPostRepositoryThrowException()
    {
        $this->withoutExceptionHandling();
        $mock = \Mockery::mock(PostRepository::class);
        $mock->shouldReceive('savePost')
            ->once()
            ->andThrow(Exception::class);

        $this->app->bind(PostRepositoryInterface::class, function() use ($mock) {
            return $mock;
        });

        $this->expectException(Exception::class);
        ($this->actingAs($this->user)
            ->postJson('api/post', ['title' => 'test title', 'content' => 'test content']))->execute(1);
        $this->assertSame(1, Post::all()->count());
    }
}
