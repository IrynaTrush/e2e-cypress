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
    it('gets a list of posts', () => {
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
});
