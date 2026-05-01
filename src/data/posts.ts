import reactMarkdown from "react-markdown";

export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  emoji: string;
  thumbnailColor: string;
  content : string;
};

export const posts: Post[] = [
  {
    slug: "jee-not-letting-me-jeena",
    title: "JEE. not letting me 'jee'-na the way i wanted to",
    date: "April 29, 2026",
    readTime: "7 min read",
    category: "college-life",
    excerpt:
      "A little bit about how JEE shaped me, a few of my experiences written down cause JEE was for sure an arc in my life",
    emoji: "💻",
    thumbnailColor: "#e8ddd3",
    content: `
I don't even know when i could say that this day, My prep for JEE started. Was it my 6th grade when my father enrolled me into FIITJEE? or was it in my 11th grade that i stopped thinking about anything but. IIT. yes, i have been an IITpaglu since long. I definitely did not get into one. but the prep days, mock days, exam days and the dreaded result days has shaped me a lot. I have met so many wonderful people all because of JEE. I met my respected late math teacher. Who.. just loved math, people, and food. He was a ray of sunshine. ah, I met one more teacher too. I met him through my father, who scoffed at me during 11th grade saying "iska RKGIT mai admission karva dete hai" (RKGIT is a tier-69 institute (no offense, but i mean it)) and he replied, "arey, kuch bhi." and from then on, he blindly kept on believing in me. Thank you for putting your faith in me, sir. Thank you for seeing me when i couldn't even see myself for who i am. I love these people and i got to learn so much math. Ah, i wish- I wish. That new year lasted longer. The meeting and classes felt infinite. Time felt like..so small during those moments. But things shattered. very very very badly.

I had to shift to a coaching, in my 12th grade. Where i met a lot of people i'll remember. in good and bad ways.

Anyways, JEE taught me that, JEE isn't for me. I hated this continuous feeling of guilt when i was not studying. I hated myself so much during that period. I hated feeling insecure, seeing all my school friends go on trips and enjoying, i missed having friends back then. I hated being that isolated. all cooped in my room trying to solve that one question.

I'm glad everything happened. Not sir leaving me. I fucking hate that but no one can control death, can they? If i had to tell a few thing to my younger self i would say, "Oye, listen up. MS chauhan won't be helping you a lot, but HCV would definitely be.

and, talk to people. come out of your shell. read more books, instead of watching lectures. And, stop blaming everything on your papa."

I guess, that would be it.

*— To my cengages, hcv, ncerts, ms chauhan, arihants, modules, and my respected teachers.*
`,
  },
  {
    slug: "a-little-rant-about-my-love-life",
    title: "just a little rant about my love life",
    date: "January 13, 2026",
    readTime: "6 min read",
    category: "let it be life",
    excerpt:
      "Something personal, No you won't get a story time, only a heartbroken girl.",
    emoji: "🥸",
    thumbnailColor: "#dde8e0",
     content: `
ah, I never imagined myself to be the "dil-toota aashiq" but here i am. This phase of my life has been tumultuous. From puppy eyes to eyes full of tears, It has made me a different person. This is something extremely personal to me and i hope no one ever reads it. I put it out here, because i wanna write. A lot. (I wanna write till the time i unravel myself).

here it goes!  
I wish to write something about you.

*when i lose love, i lose a friendship i once deeply treasured.*  
*I made the same mistake i once promised to myself i won't do again*  
*i tried to love again, and boy did i fail again cause it got me writing.*  
*this time, it came, and i refused to see all the danger signs it came with*  
*this time, it came, and i allowed myself to indulge in*  
*this time, it broke my heart in a way i never knew it could be broken*  
*i told myself again and again, that heyyy don't get too attached! You know this could be called off at any moment*  
*but my little heart refused to listen.*  

*I miss you. quite profoundly.*   

*i thought of doing the same thing you did, to date again because the other person moved on why should i wait?*  
*but, something in me didn't approve of that.*  
*to be so cruel, to someone who had nothing to do with the whole thing. is selfish.*    
*and i was that someone in your case. wasn't i?*  

*I missed you so terribly at the book fair. you have no clue. You are probably busy living up the best life you can.*    
*and i'm trying to get busy so that i could run away from the thoughts of you.*    

*a part of me hopes that one day you get your heartbroken terribly. people don't choose you. people don't value you or love you.*  
*a part of me wants you to suffer. willingly.*  
*and then the other part of me, thinks that is a bit too shrewd. to wish for revenge when i did love you. i did love you. even though i never accepted it or told it to you. i did.*  

*but one thing i would want for you. no matter what you did to me.*  
*is for you to shine.*  
*you are genuinely smart.*  
*and i want you to be seen for it.*  
*i want you to earn a good amount of money so that you could get that bullet you always told me about.*   

*so much of me misses this person who's only been in my life for a small fraction of it.*  

thankfully, i hugged you the last time i came over. so, this ends. and. I gave it my all. I have no regrets.
`,
  },
  
  
];

export const latestPost = posts[0];
export const recentPosts = posts.slice(1);
