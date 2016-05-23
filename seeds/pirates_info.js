
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({
      name: 'Miss Fortune',
      poison: 'bullets',
      accessory: 'guns',
      image_url:'http://t01.deviantart.net/WPxB7iAn0-B-kCZwxbQAE6ea1bk=/300x200/filters:fixed_height(100,100):origin()/pre02/d12a/th/pre/f/2015/260/4/2/miss_fortune_by_avaiable-d99x7gj.png'
    }),
    knex('pirates').insert({
      name: 'Elizabeth Swan',
      poison: 'ex-lax',
      accessory: 'infinity stone',
      image_url:'https://s-media-cache-ak0.pinimg.com/736x/9a/fa/8f/9afa8f6b99f5a51517a50b314551c485.jpg'
    }),
    knex('pirates').insert({
      name: 'Captain Hook',
      poison: 'bilgewater',
      accessory: 'alarm clock',
      image_url:'https://upload.wikimedia.org/wikipedia/en/1/1b/CaptainHookcartoon.jpg'
    })
  );
};
