var output= document.getElementById('output');
var btn= document.getElementById('btn');
var quotes=[
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,
    `“So many books, so little time.”
    ― Frank Zappa`,
    `“You only live once, but if you do it right, once is enough.”
    ― Mae West`,
    `“In three words I can sum up everything I've learned about life: it goes on.”
    ― Robert Frost`,
    `“If you tell the truth, you don't have to remember anything.”
    ― Mark Twain`,
    `“A friend is someone who knows all about you and still loves you.”
    ― Elbert Hubbard`,
    `“Always forgive your enemies; nothing annoys them so much.”
    ― Oscar Wilde`,
    `“Live as if you were to die tomorrow. Learn as if you were to live forever.”
    ― Mahatma Gandhi`,
    `“Without music, life would be a mistake.”
    ― Friedrich Nietzsche`,
    `“We accept the love we think we deserve.”
    ― Stephen Chbosky, The Perks of Being a Wallflower`
];
// sellection function 
function randomSelect(){
    randomQuote=quotes[Math.floor(Math.random() *quotes.length)]
    output.innerHTML = randomQuote ;
}