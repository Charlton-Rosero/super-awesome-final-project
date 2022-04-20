const db = require(`../db`);

const Artist = require(`../models/artist.js`)


db.on(`error`, console.error.bind(console, `MongoDB connection error`));

const main = async () => {
    const artist = [
      {
        name: `The Dave Brubeck Quartet`,
        genre:'Jazz',
        years_active:'1951-2012',
        members: 'Dave Brubeck, Joe Morello, Paul Desmond, Eugene Wright',
        labels:'Sony, Decca, Fantasy Records',
        bio:`Brubeck organized the Dave Brubeck Quartet in 1951, with Paul Desmond on alto saxophone. They took up a long residency at San Francisco's Black Hawk nightclub and gained great popularity touring college campuses, recording a series of albums with such titles as Jazz at Oberlin (1953), Jazz at the College of the Pacific (1953), and Brubeck's debut on Columbia Records, Jazz Goes to College (1954).`,
      },
      {
        name: `The Beatles`,
        genre:'Classic Rock',
        years_active:'1960-1970',
        members: 'John Lennon, Paul Mcartney, George Harrison, Ringo Starr',
        labels:'Parlophone, Apple, Capitol',
        bio:`The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and popular music's recognition as an art form. Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements.`,
      },
      {
        name: `Elton John`,
        genre:'Pop',
        years_active:'1962-present',
        labels:'Philips, Congress, DJM, UniParamount',
        bio:`Sir Elton Hercules John is an English singer, pianist and composer. Commonly nicknamed the "Rocket Man" after his 1972 hit single of the same name, John has led a commercially successful career as a solo artist since the 1970s, having released 31 albums since 1969. Collaborating with lyricist Bernie Taupin since 1967, John is acclaimed by critics and musicians, particularly for his work during the 1970s, and his lasting impact on the music industry. John's music and showmanship have had a significant impact on popular music. His songwriting partnership with Taupin is one of the most successful in history.`,
      },
      {
        name: `RUN DMC`,
        genre:'Hip-Hop',
        years_active:'1983-2002',
        members: `Joseph "Run" Simmons, Darryl "D.M.C." McDaniels, Jason "Jam Master Jay" Mizell`,
        labels:'Profile, Arista/BMG',
        bio:`Run-DMC was an American hip hop group from Hollis, Queens, New York City, founded in 1983 by Joseph Simmons, Darryl McDaniels, and Jason Mizell. Run-DMC is regarded as one of the most influential acts in the history of hip hop culture and one of the most famous hip hop acts of the 1980s. Along with Beastie Boys, LL Cool J and Public Enemy, the group pioneered new school hip hop music. The group was among the first to highlight the importance of the MC and DJ relationship.`,
      },
      {
        name: `Pyotr Ilyich Tchaikovsky`,
        genre:'Classical',
        years_active:'1865-1878',
        bio:`Composer Pyotr Ilyich Tchaikovsky's work was first publicly performed in 1865. In 1868, his First Symphony was well-received. In 1874, he established himself with Piano Concerto No.1 in B-flat Minor. Tchaikovsky resigned from the Moscow Conservatory in 1878 and spent the rest of his career composing yet more prolifically. Tchaikovsky is most celebrated for his ballets, specifically Swan Lake, The Sleeping Beauty and The Nutcracker. He died in St. Petersburg on November 6, 1893.`,
      },
      


    ];
    await Artist.insertMany(artist);
    console.log(`Data added`);
  };

  const run = async () => {
    await main();
    db.close();
  };
  
  run();