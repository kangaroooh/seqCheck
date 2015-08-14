describe('Tennis eiei', function() {
   it('it should say Love Love', function(){
      expect(score()).toEqual('Love - Love')
   });

    it('A get It should be Fifteen, Love', function(){
      expect(PlayerAGetScore()).toEqual('Fifteen - Love')
   });

    it('A get It should be Thirty, Love', function(){
      expect(PlayerAGetScore()).toEqual('Thirty - Love')
   });

    it('B get It should be Thirty, Fifteen', function(){
      expect(PlayerBGetScore()).toEqual('Thirty - Fifteen')
   });

    it('B get It should be Thirty, Thirty', function(){
      expect(PlayerBGetScore()).toEqual('Thirty - Thirty')
   });

    it('A get It should be Forty, Thirty', function(){
      expect(PlayerAGetScore()).toEqual('Forty - Thirty')
   });

    it('A get It should be Player A Win', function(){
      expect(PlayerAGetScore()).toEqual('Player A Win')
   });

});
