let mes=document.querySelector("#mes");
let sura=document.querySelector(".surah");
let mesa=document.querySelector(".message");
const happy=[
    {
        message:"Allah does not burden a soul beyond that it can bear.",
        surah:"Surah Al-Baqarah (2:286)"
    },
    {
        message:"Remember Me; I will remember you. And be grateful to Me and do not deny Me",
        surah:"Surah Al-Baqarah (2:152)"
    },
    {
        message:"And as for those who are happy, they will be in Paradise, abiding there so long as the heavens and the earth endure",
        surah:"Surah Hud (11:108)"
    },
    {
        message:"And do good; indeed, Allah loves the doers of good",
        surah:"Surah Al-Baqarah(2:195)"
    },
    {
        message:"Verily, in the remembrance of Allah do hearts find rest",
        surah:"Surah Ar-Ra'd(13:28)"
    },
    {
        message:"Whoever does good, whether male or female, and is a believer, We will surely bless them with a good life",
        surah:"Surah An-Nahl(16:97)"
    },
    {
        message:"And [remember] when your Lord proclaimed: If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.",
        surah:"Surah Ibrahim(14:7)"
    },
    {
        message:"Know that the life of this world is but amusement and diversion and adornment and boasting to one another and competition in increase of wealth and children. Like the example of rain whose [resulting] plant growth pleases the tillers; then it dries and you see it turn yellow; then it becomes [scattered] debris.”",
        surah:"Al-Hadid(57:20)" 
    },
    {
        message:"Charity does not decrease wealth. No one forgives another except that Allah increases his honor, and no one humbles himself for the sake of Allah except that Allah raises his status.",
        surah:"Sahih Muslim"
    },
    {
        message:"Give good news ˹O Prophet˺ to those who believe and do good that they will have Gardens under which rivers flow. Whenever provided with fruit, they will say, “This is what we were given before,” for they will be served fruit that looks similar ˹but tastes different˺. They will have pure spouses,and they will be there forever.",
        surah:"Surah Al-Baqarah(2:25)"
    }
]
const anxious=[
    {
        message: "Indeed, with hardship [will be] ease.",
        surah:"Surah Ash-Sharh(94:5-6)"
    },
    {
        message:"Allah does not burden a soul beyond that it can bear.",
        surah:"Surah Al-Baqarah(2:286)"
    },
    {
        message:"Verily, in the remembrance of Allah do hearts find rest.",
        surah:"Surah Al-Ra'd(13:28)"
    },
    {
        message:"And if he encounters difficulties, hardships, dangers and disasters in this way, Allah alone will rescue him, for there is no other rescuer beside Him.",
        surah:"Surah At-Talaq(65:3)"
    },
    {
        message:"And indeed, you are a reminder, and the Quran is a reminder for the one who fears.",
        surah:"Surah Al-Muzzamil(73:20)"
    },
    {
        message:"And Allah invites to the Home of Peace and guides whom He wills to a straight path.",
        surah:"Surah Al-Ankabut(29:62)"
    },
    {
        message:"Seek help through patience and prayer.",
        surah:"Surah Al-Baqarah(2:45)"
    },
    {
        message:"And the worldly life is not but amusement and diversion; but the home of the Hereafter is best for those who fear Allah…",
        surah:"Surah Al-An'am(6:32)"
    },
    {
        message:"this world is a temporary enjoyment and that the Hereafter will bring punishment or forgiveness.",
        surah:"Surah Al-Hadid(57:20)"
    },
    {
        message:"So˺ compete with one another for forgiveness from your Lord and a Paradise as vast as the heavens and the earth, prepared for those who believe in Allah and His messengers. This is the favour of Allah. He grants it to whoever He wills. And Allah is the Lord of infinite bounty.",
        surah:"Surah Al-Hadid(57:21)"
    }
]
const thankful=[
    {
        message:"When God brought you out of your mother’s womb, you were empty of knowledge. But he gave you eyes and ears and hearts, in order that you may give thanks to him.",
        surah:"Surah An-Nahl(16:78)"
    },
    {
        message:"Has there (not) been a long time when man was not even a mentionable thing. It is We who have created man out of a sperm-drop intermingled, so that We might test him. And therefore We have made him hearing and seeing. Surely We have guided him to the way (and it rests with him to prove himself) either grateful or ungrateful.",
        surah:"Surah Al-Insan(76:1-3)" 
    },
    {
        message:"If you give thanks, I will give you more",
        surah:"Surah Ibrahim(14:7)"
    },
    {
        message:"Soon We will reward the Thankful.",
        surah:"Surah Ali 'Imran(3:145)"
    },
    {
        message:"[Satan] said, “Because You have put me in error, I will surely sit in wait for them on Your straight path. Then I will come to them from before them and from behind them and on their right and on their left, and You will not find most of them grateful [to You].”",
        surah:"Surah Al-A'raf(7:16-17)" 
    },
    {
        message:"If you are thankless—Allah is in no need of you—yet He is not pleased by ingratitude of His worshippers. And if you are thankful He is pleased by it in you…”",
        surah:"Surah Az-Zumar(39:7)"
    },
    {
        message:"Anyone who desires the reward in this world shall be given it here, and anyone who desires the reward in the hereafter shall be given it there. Soon We will reward the thankful.”",
        surah:"Surah Ali 'Imran(3:145)"
    },
    {
        message:"We enjoined on man to recognize the rights of his parents. His mother bore him in her womb with weakness upon weakness and his weaning took two years. Give thanks to Me and to your parents. All things will return to Me.",
        surah:"Surah Luqman(31:14)"
    },
    {
        message:"Whoever does not thank the people does not thank Allah.",
        surah:"Hadith in Abu Dawud"
    },
    {
        message:"…Whoever does a favor for you or an act of kindness, then repay him in a similar manner. But if you cannot find that which you can reward him with, then supplicate God for him continuously, until you think you have repaid him.”",
        surah:"Hadith in Ahmad"
    }
]
const lonely=[
    {
        message:"And indeed,We are closer to him than his jugular vein",
        surah:"Surah Al-Qaf(50:16)"
    },
    {
        message:"O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient",
        surah:"Surah Al-Baqarah(2:153)"
    },
    {
        message:"Those who believe, and whose hearts find satisfaction in the remembrance of Allah. for without doubt in the remembrance of Allah do hearts find satisfaction.",
        surah:"Surah Ar-Rad(13:28)"
    },
    {
        message:"No Muslim servant visits his brother for the sake of Allah but that a caller from the heavens announces: You are purified and Paradise is purified for you! Otherwise, Allah says in the realms of His throne: My servant has visited Me and his guest for My Sake, so I am not pleased for him to have any reward other than Paradise.",
        surah:"Musnad al-Bazzar"
    },
    {
        message:"If any of you loves his brother, then he should inform him",
        surah:"At-Tirmidhi"
    },
    {
        message:"Salah in congregation is twenty-seven times more meritorious than a Salah performed individually.",
        surah:"Bukhari and Muslim"
    },
    {
        message:"When two Muslims meet (give salaam), and shake hands, they are forgiven their sins before they part (with each other).",
        surah:"Abu Dawud"
    },
    {
        message:"You will not enter paradise until you believe, and you will not believe until you love one another: ‘Spread salaam’ (the greeting of peace) among you.",
        surah:"Muslim"
    },
    {
        message:"Whoever relieves a believer’s distress of the distressful aspects of this world, Allah will rescue him from a difficulty of the difficulties of the Hereafter… Allah is helping the servant as long as the servant is helping his brother.”",
        surah:"Muslim"
    },
    {
        message:"As for the world of emotions and feelings, then the single believer has, in his belief, a close friend and companion that relieves the feeling of strangeness.” ",
        surah:"Dr. Muhammad Ahmad ar-Rashid"
    }
]
const angry=[
    {
        message:"“A man said to the Prophet, ‘Give me advice.’ The Prophet, peace be upon him, said, ‘Do not get angry.’ The man asked repeatedly and the Prophet answered each time, ‘Do not get angry.’”",
        surah:"Hadith"
    },
    {
        message:"he powerful man is not the one who can wrestle, but the powerful man is the one who can control himself at the time of anger.",
        surah:"Hadith"
    },
    {
        message:"Those who spend (in Allah’s cause) in prosperity and in adversity, who repress their anger, and who pardon men, verily, Allah loves the al-Muhsinun (the good-doers).”",
        surah:"Surah Ali 'Imran"
    },
    {
        message:"The Propet(sas) said:`I know a word, the saying of which will cause him to relax, if he does say it. If he says:'I seek Refuge with Allah from Satan' then all his anger will go away.",
        surah:"Hadith"
    },
    {
        message:" The Prophet of Allah said, When one of you becomes angry while standing, he should sit down. If the anger leaves him, well and good; otherwise he should lie down.",
        surah:"Hadith"
    },
    {
        message:" The Prophet (sas) said, “If one of you becomes angry then he should stay silent.”",
        surah:"Hadith"
    },
    {
        message:". The Prophet (sas) said, “Anger comes from the devil, the devil was created from fire, and fire is extinguished only with water. So when one of you becomes angry, he should make wudu.”",
        surah:"Hadith"
    },
    {
        message:" “So whatever you have been given is but (a passing) enjoyment for this worldly life, but that which is with God (Paradise) is better and more lasting for those who believe and put their trust in their Lord.  And those who avoid the greater sins, and illegal sexual intercourse, and when they are angry, they forgive.” ",
        surah:"Surah Ash-Shuraa(42-36 & 37)"
    },
    {
        message:"And those who restrain (their) anger and pardon men. And Allah loves the doers of good (to others). And those who, when they commit an indecency or wrong their souls, remember Allah and ask forgiveness for their sins. And who forgives sins but Allah? And they persist not knowingly in what they do.",
        surah:"Surah Ali 'Imran(3:133,134)"
    },
    {
        message:"The Prophet Muhammad (peace be upon him) said: “He who gave up disputing while he is right, a palace of high rank in Paradise will be built for him. He who gave up disputing while he is a fabricator, a palace in the center of Paradise will be built for him.",
        surah:"Al-Tirmidhi who declared it as hasan"
    }
]
const sad=[
    {
        message:"Do not weaken and do not grieve, and you will be superior if you are [true] believers",
        surah:"Surah Al-'Imran(3:139)"
    },
    {
        message:"Indeed, those who have said, 'Our Lord is Allah' and then remained on a right course – the angels will descend upon them, [saying], 'Do not fear and do not grieve but receive good tidings of Paradise, which you were promised",
        surah:"Surah Fussilat(41:30)"
    },
    {
        message:"Allah reassured ˹them˺, “Have no fear! I am with you, hearing and seeing.",
        surah:"Surah Taha(20:40)"
    },
    {
        message:"O Prophet! Tell the captives in your custody, “If Allah finds goodness in your hearts, He will give you better than what has been taken from you, and forgive you. For Allah is All-Forgiving, Most Merciful.",
        surah:"Surah Al-Anfal(8:70)"
    },
    {
        message:"Your Lord has proclaimed, “Call upon Me, I will respond to you...",
        surah:"Surah Ghafir(40:60)"
    },
    {
        message:"Do not falter or grieve, for you will have the upper hand, if you are ˹true˺ believers.",
        surah:"Surah Ali-'Imran(3:139)"
    },
    {
        message:"And ˹remember˺ when your Lord proclaimed, ‘If you are grateful, I will certainly give you more",
        surah:"Surah Ibrahim(14:7)"
    },
    {
        message:"And the next life is certainly far better for you than this one.",
        surah:"Surah Ad-Duhaa(93:4)"
    },
    {
        message:"Perhaps you dislike something which is good for you and like something which is bad for you. Allah knows and you do not know.",
        surah:"Surah Al-Baqarh(2-216)"
    },
    {
        message:"But no! Allah is your Guardian, and He is the best Helper.",
        surah:"Surah Ali 'Imran(3-150)"
    }
]
function generaterandomnumber(){
    let n=Math.random();
    n=n*10;
    console.log(n);
    return Math.trunc(n);
}
let buttons=document.querySelectorAll("li");
const emotions={
    happy,
    anxious,
    thankful,
    lonely,
    angry,
    sad
};
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        console.log("clicked")
        let emotion=e.target.id;
        if(emotions[emotion])
        {
            let no=generaterandomnumber();
            mes.innerText=emotions[emotion][no].message;
            sura.innerText=emotions[emotion][no].surah;
            if(emotion==="happy")
            {
                mesa.style.backgroundColor="orange";
            }
            else if(emotion==="anxious")
            {
                mesa.style.backgroundColor="blue"
            }
            else if(emotion==="thankful")
            {
                mesa.style.backgroundColor="red"
            }
            else if(emotion==="lonely")
            {
                mesa.style.backgroundColor="purple"
            }
            else if(emotion==="angry")
            {
                mesa.style.backgroundColor="darkred"
            }
            else
            {
                mesa.style.backgroundColor="pink"
            }
        }
    })
})
