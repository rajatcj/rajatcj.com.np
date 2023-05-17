class DiscordUser {
    constructor( 
      public name: string, 
      public discriminator: string,
      public id: string 
    ) {}
  
    fullName() {
      return this.name + "#" + this.discriminator
    }
  }
  
  export let user = new DiscordUser("Rajat", '6969', '754033245972201612');
