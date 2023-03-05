describe('Posts API', () => {
  context('GET /api/posts', () => {
    it('gets a list of posts', () => {
      // test
      cy.request('GET', 'http://localhost:4200/api/posts').then((res) => {
        console.log('res', res);
        expect(res.status).to.eq(200);
        expect(res.body.length).to.eq(100);
      });
    });
  });

  context('GET /api/posts/:postId', () => {
    it('gets a post with postId 2', () => {
      // test
      const postId = 2;
      cy.request('GET', `http://localhost:4200/api/posts/${postId}`).then((res) => {
        console.log('res', res);
        expect(res.status).to.eq(200);
        expect(res.body).to.deep.equal({
          userId: 1,
          id: postId,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        });
      });
    });
  });

  context('POST /api/posts', () => {
    it('create a new post', () => {
      cy.request('POST', `http://localhost:4200/api/posts`, {
        userId: 1,
        title: 'some post',
        body: 'some post description',
      }).then((res) => {
        console.log('res', res);
        expect(res.status).to.eq(201);
      });
    });
  });

  context('PATCH /api/posts:postId', () => {
    it('create a new post', () => {
      const postId = 4;
      cy.request('PATCH', `http://localhost:4200/api/posts/${postId}`, {
        userId: 1,
        title: 'some post',
        body: 'some post descripti',
        id: postId,
      }).then((res) => {
        console.log('res', res);
        expect(res.status).to.eq(200);
      });
    });
  });

  context('DELETE /api/posts/:postId', () => {
    it('create a new post', () => {
      const postId = 4;
      cy.request('DELETE', `http://localhost:4200/api/posts/${postId}`).then((res) => {
        console.log('res', res);
        expect(res.status).to.eq(200);
      });
    });
  });

  context('GET /api/posts/:postId/comments', () => {
    it('gets a post with postId 2', () => {
      // test
      const postId = 1;
      cy.request('GET', `http://localhost:4200/api/posts/${postId}/comments`).then((res) => {
        console.log('res', res);
        expect(res.status).to.eq(200);
        expect(res.body).to.deep.equal([
          {
            postId: 1,
            id: 1,
            name: 'id labore ex et quam laborum',
            email: 'Eliseo@gardner.biz',
            body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
          },
          {
            postId: 1,
            id: 2,
            name: 'quo vero reiciendis velit similique earum',
            email: 'Jayne_Kuhic@sydney.com',
            body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
          },
          {
            postId: 1,
            id: 3,
            name: 'odio adipisci rerum aut animi',
            email: 'Nikita@garfield.biz',
            body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
          },
          {
            postId: 1,
            id: 4,
            name: 'alias odio sit',
            email: 'Lew@alysha.tv',
            body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
          },
          {
            postId: 1,
            id: 5,
            name: 'vero eaque aliquid doloribus et culpa',
            email: 'Hayden@althea.biz',
            body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
          },
        ]);
      });
    });
  });
});
