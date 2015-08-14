describe('Hello World', function() {
   it('should say "Hi" to "Ball"', function(){
      expect(greet('Ball')).toEqual('Hi, Ball!')
   });

    it('should say "Hi" to "Robroo"', function(){
      expect(greet('Robroo')).toEqual('Hi, Robroo!')
   });
});
