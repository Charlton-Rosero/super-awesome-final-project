const db = require(`../db`);

const Artist = require(`../models/artist.js`)


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
    const artist = [
      {
        name: `The Beatles`,
        genre:'Classic Rock',
        years_active:'1960-1970',
        members: 'John Lennon, Paul Mcartney, George Harrison, Ringo Starr',
        labels:'Parlophone, Apple, Capitol',
        bio:`The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.`,
      }


    ];
    await Artist.insertMany(artist);
    console.log(`Data added`);
  };

  const run = async () => {
    await main();
    db.close();
  };
  
  run();