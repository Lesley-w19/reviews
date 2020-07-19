  //ADD THE BACKGROUNDS TO BE INCORPORATED
  let backgrounds = [
    {  
      page:"1",
      header:"Aquariams",  
      background : "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.75)),url(./images/aquariam1.jpg)",
      more:" They are also called Fish-Tanks. Fishkeeping especially in the home is one of the most exciting hobbies one can have."
    },
    {
      page:"2",
      header:"Aquariams",
      background : "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.75)),url(./images/aquariam2.jpg)",
      more:" Among its benefits are; it can act as a stress-releiver,  gives an ample environment of meditation as well as thinking."
    },
    {
      page:"3",
      header:"Aquariams",
      background : "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.75)),url(./images/aquariam4.jpg)",
      more:"It hepls decorate a home, gives one a sense of responsibility in terms of regular feeding of the fish and cleaning the aquariam..."
    },
    {
      page:"4",
      header:"Aquariams",
      background: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.75)),url(./images/aquariam6.jpg)",
      more:"I recommend ones start in this adventure of home fishkeeping as it is wonderful, motivating if not inspiring."
    }
  ];

 const pageNumber = document.querySelector(".pageNum");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const rndmBtn = document.querySelector(".btn");
   const background = document.getElementById("background");
   const header = document.querySelector(".heading");
  const information = document.querySelector(".info");
 

  let currentBackground = 0;
    
  window.addEventListener("DOMContentLoaded", ()=>{
    getBackground();
  })
  
  function getBackground(){
    const item = backgrounds[currentBackground];
    // console.log(item); 
    header.textContent = item.header;
    information.textContent = item.more;
    pageNumber.textContent = item.page;
    background.style.backgroundImage = item.background;
    
  }

  leftBtn.addEventListener('click', ()=>{
      currentBackground--;
      if(currentBackground <0){
        currentBackground = backgrounds.length - 1;
      }
      getBackground();
  })
  
  rightBtn.addEventListener('click', ()=>{
     currentBackground++;
if(currentBackground > backgrounds.length - 1){
  currentBackground = 0;
}
     getBackground();
  }) 

  rndmBtn.addEventListener('click',()=>{
      currentBackground = Math.floor(Math.random() * backgrounds.length);
      getBackground();
  })
  
  // SECTION - REVIEWS
  //data of the review that should be included
let reviews = [
  {
       fishNumber:1,
       image: "./images/goldfish-.jpg",
       name: "Gold Fish",
       otherInfo:"20-30 gallons",
       fishInfo:
       "Goldfish is the most popular freshwater aquarium fish of all time.They come in different varities and colors which are very easy to keep. Goldfish prefer a cooler environment(68-75`F) and do well on a simple flake food diet - no special feeding required...",
       link:"Much like Betta fish, the idea that Goldfish can live in bowls is completely wrong. In reality, they are mostly adaptable in Goldfish tanks"
      },
      {
        fishNumber:2,
          image: "./images/angelfish.jpg",
          name: "Angel fish",
          otherInfo:"29 gallons",
          fishInfo:
          "Angelfish can exist in saltwater and freshwater. The latter angelfish have been domesticated for a long time and have multitude of breeds available. AngelFish have variety of colors, fin shapes and sizes, and scale types. Similar to betta fish,...",
          link:"they're just as versatile and aggressive. AngelFish are cichlids, and most have distinct temperaments. Despite their potentially aggressive nature, they're normally great starter fish. They are hardy, strong, very personable, and are a great pet to own. Their distinct personalities cannot be replaced and it's impossible not to get attached."
        },
      {
       fishNumber:3,
         image: "./images/neontetra.png",
         name: "Neon Tetra",
         otherInfo:"10 gallons",
         fishInfo:
        "These are small, high-energy fish known for their bright colors and interesting schooling habits.Neon tetras can adapt to mant types of water conditions. As long as the fish-tank is stable able cycled properly, they are no problem to keep. They are...",
        link:" lively and set up to be in a natural aquariums."
        },
        {
       fishNumber:4,
         image: "./images/guppies.jpg",
         name: "Guppies",
         otherInfo:"10 gallons",
         fishInfo:
         "Fancy guppies are one of the most popular freshwater aquariam fish. They are harrdy in nature, have bright coloration and their ease of care, which makes them a great choice, even for first time aquarium owners. Because of their small size, guppies...", 
        link:"are fine in pretty small tanks.Recommended to feed them on high quality flake food."
        },
        {
       fishNumber:5,
         image: "./images/swordtail-fish.jpg",
         name: "Swordtails",
         otherInfo:"10 gallons",
         fishInfo:
         "Often grouped with guppies and mollies, SwordTails are also livebearers. Are unique such that; Male swordtails are equip with an interesting 'sword' protruding from their tails, giving them their name. This unique trait makes them a great attention...", 
        link:" grabber in any aquarium. Swordtails are easy to keep and thrive in a wide range of environment."
        },
        {
       fishNumber:6,
         image: "./images/bettafish.jpg",
         name: "betta fish",
         otherInfo:"5 gallons",
         fishInfo:
         "Betta fish are famous for their bright coloration, versatility and spunky personalities. Small bowls/tanks can cut its lifespan significantly. They are aggressive naturally. Though bettas usually prefer a tank to themselves, they can co-habitat well...", 
        link:" with Cory Catfish, Plecos and certain Tetras."
        },
        {
       fishNumber:7,
         image: "./images/mollies.png",
         name: "mollies",
         otherInfo:"10 gallons",
         fishInfo:
         "Mollies are a hardy, easy-to-keep livebearer knownfor their wide range of colors. They thrive in most conditions and reproduce extremely quickly. Mollies are omnivorous species, so they feed on anything given to them; flakes, pellets and frozen foods...", 
        link:" all work. They are also available in tons of different variations and colors -fits any aquariasts' taste."
        },
        {
       fishNumber:8,
         image: "./images/zebra_danios_.jpg",
         name: "Zebra Danio",
         otherInfo:"20 gallons",
         fishInfo:
        "Zebra Danios are one of the most iconic beginner freshwater aquarium fish in the hobby. They are prized for their instantly recognizable striped pattern, energetic antics, and ease-of-care. They are most energetic when kept in small schools –...", 
        link:" a group of 7-8 Danios will provide all the entertainment you need from a freshwater tank. Zebra Danios tend to be so zippy and lively."
        },
        {
       fishNumber:9,
         image: "./images/coryCatfish.png",
         name: "cory catfish",
         otherInfo:"20 gallons for group of 5",
         fishInfo:
         "These kind is an all-time favourite in any given fishtank. These bottom-dwelling catfish survive in a wide range of condition and get along with (nearly) every species. They are also very active and entertaining to watch. Since they are schooling fish,...", 
        link:" they should be kept in groups of at least 4-5. They are not picky eaters and do fine in a mixture of flakes and pellets. Dried bloodworms are also a great supplemental food for them. Given their docile namture, it is recommended keeping cories with peaceful species such as Tetras, Mollies and Danios."
        },
        {
       fishNumber:10,
         image: "./images/gourami-dwarf.png",
         name: "dwarf gourami",
         otherInfo:"20 gallons",
         fishInfo:
         "They are a hardy and colorful species. Not only are they easy to keep and extremely adaptable, Dwarf Gourami also make excellent 'centerpieces' for any aquarium due to their electric colors and large personalities. They are semi-aggressive - ...", 
        link:" they are generally peaceful in nature, but can become territorial if placed in small tanks with other fish. Some suitable tank mates include Cory Catfish, Guppies, Platies, and Endlers." 
        },
        {
          fishNumber:11 ,
          image:"./images/kuhli-loach.jpg",
          name:"Kuhli Loach",
          fishInfo:"If you’re looking for something a little different, a Kuhli Loach might be the perfect freshwater aquarium fish for you. Though this species resembles an eel, it is actually not in the eel family at all. Kuhli Loaches are most active...",
          otherInfo:"20 gallons",
          link:" at night, so don’t expect to see them too much during the day. That said, Kuhli Loaches are much more likely to be active during the day if they are kept in groups of 3-4.Another reason that Kuhli Loaches make great beginner aquarium fish is because they stay small (especially when compared with other loach species). At 3-5″ max length, a group can be kept in a 20 gallon aquarium with no problems."
        },
        {
          fishNumber: 12 ,
          image:"images/bristlenose-pleco.jpg",
          name:"Bristlenose Pleco",
           fishInfo:"The Bristlenose Pleco, often referred to as the Bushy Nose Pleco or Armored Catfish, is one of the most popular types of Pecostomus in the aquarium hobby. Despite its alien-like appearance, the Bristlenose Pleco is actually a great,...",
          otherInfo:"30 gallons",
          link:" peaceful addition to any community aquarium.One great thing about the Bristlenose Pleco is that it stays relatively small compared to other Pleco species. At right under 5″, they should be kept in tanks of at least 30 gallons. Because of their huge appetite for algae, Bristlenose Plecos do a great job at cleaning up aquariums. That said, aquarium owners should do supplemental feedings of algae wafers to keep their Bristlenose Plecos well fed and healthy."
        },
        {
          fishNumber: 13 ,
          image:"./images/convictcichlid.jpg",
          name:"Convict Cichlid",
           fishInfo:"In my opinion, Convicts are one of best beginner Cichlids out there for new aquarium owners. In fact, my first ever fish was a male Convict Cichlid (and I still own a few of his offspring nearly 20 years later!).If you have any interest in...", 
          otherInfo:"20 gallons",
          link:"breeding fish, Convict Cichlids are definitely the way to go. As long as your tank is stable and you have a male/female pair, not much else is required for these fish to spawn – and as a hardy species, Convict fry as pretty easy to raise. Be warned, though – as a species of Cichlid, Convicts aren’t always the most friendly fish (especially when they are spawning or caring for fry). If you decide to go with Convict Cichlids, save yourself the headache and avoid adding any tank mates."
        },
        {
          fishNumber: 14 ,
          image:"images/yellow-african-cichlid.jpg",
          name:"African Cichlids",
           fishInfo:"The term “African Cichlid” is a blanket term that includes tons of different Cichlid species (over 1,200) – some of the most popular include the Yellow Lab Cichlid, Peacock Cichlid, and Zebra Cichlid. In general, African Cichlids tend to be....", 
          otherInfo:"20 gallons",
          link:"colorful, hardy, and prolific breeders. As with most cichlids, though, they can be a bit aggressive – choose tank mates carefully if you want to house them with other species. Most African Cichlids are mouth-brooders, meaning they hold offspring in their mouths for 3-4 weeks until they can fend for themselves. If you have any interest in breeding fish and want something unique, I highly suggest looking into African Cichlids – the mouth-brooding process is truly amazing to watch."
        },
        {
          fishNumber: 15,
          image:"./images/red-cherry-shrimp.png",
          name:"Red Cherry Shrimp",
           fishInfo:"Red Cherry Shrimp aren’t technically fish, but they’re interesting nonetheless. Small, colorful, and easy to keep, Red Cherries are the most popular freshwater aquarium shrimp out there. While most shrimp are especially sensitive to...",
          otherInfo:"10 gallons",
          link:" water conditions, Red Cherries have been selectively bred for hardiness. That said, Red Cherry Shrimp still require good water conditions to thrive. In addition, Cherry Shrimp are best kept in shrimp-only tanks – otherwise, they usually become an unfortunate snack for hungry fish."
        },
        {
          fishNumber: 16 ,
          image:"./images/cherry-barb.jpg",
          name:"Cherry Barb",
           fishInfo:"f you’re looking for a colorful aquarium fish, Cherry Barbs are hard to beat. These bright-red Barbs and not only eye catching and energetic, but also very easy to care for. One great thing about Cherry Barbs is that they are just as...", 
          otherInfo:"20-30 gallons",
          link:"content by themselves as they are in community tanks with other fish. Although they are generally peaceful and get along with other species, these Barbs can be a bit skittish when kept around more aggressive fish. Overall, Cherry Barbs are a great beginner fish that add a sense of liveliness to any aquarium they reside in."
          },
        {
          fishNumber: 17,
          image:"./images/tiger-barb.jpg",
          name:"Tiger Barb",
           fishInfo:"The Tiger Barb is a lively, energetic fish famous for its recognizable orange and black striped pattern. As a schooling fish, Tiger Barbs should be kept in groups of 5-6 for best results. In my opinion, Tiger Barbs are one of the most...",
          otherInfo:"20-30 gallons",
          link:" entertaining fish to watch – these little things NEVER stop moving. That said, they can be a bit nippy. Be careful when keeping them with long-finned fish such as Angelfish. As an omnivorous species, Tiger Barbs should be fed a mix of flake food and meaty food (frozen brine shrimp or bloodworms) for optimal health. They also feel most “at home” in planted aquariums, but plants definitely aren’t an absolute must."
        },
        {
          fishNumber: 18,
          image:"./images/oscar-cichlid-fish.jpg",
          name:"Oscar Cichlids",
           fishInfo:"Oscar fish are a big commitment, with similar lifespans to dogs. They also have very similar personalities to dogs and are often called “water puppies”. Oscars can learn to recognize their owner and normally respond very positively to them,...", 
          otherInfo:"mininmun - 75 gallons",
          link:"with some going as far as allowing their owners to pet them. If you are able to provide the appropriate space, food, and water changes your Oscar needs, then taking care of them will be a snap. Larger tanks are actually much better for beginners than smaller tanks. A huge part of fish keeping is water chemistry, and water chemistry is more likely to change rapidly in a small tank than a large tank, so if something starts to go sideways, you will have much more time to fix it in a larger tank. Oscars are also very hardy and forgiving fish, which makes them suitable for beginners. In addition, most other hardy fish are not nearly as beautiful as the Oscar, nor do they have as many color variants. As long as a beginner has the space for one and knows they are signing up for 10+ years of care, the Oscar is a great pet, and they will stay loving and entertaining for their whole lives."
        },
        {
          fishNumber: 19,
          image:"./images/platies.jpg",
          name:"Platies",
           fishInfo:"One of the hardiest fish out there, the platy comes in a massive variety of styles and colors. Platies are a hardwater fish, so while they are extremely durable, you will have issues with keeping them in soft water. They are also a live bearing fish,...",
          otherInfo:"minimum - 10 gallons",
          link:" meaning they give birth to well-developed live young, instead of eggs like most other fish. Platies are some of the easiest fish to breed, and some of the best fish to get started with, both in terms of breeding and overall fish care. The young do not need any special care, aside from their food being smaller than the adults’ food. They are born fully functional, though you may want to provide extra hiding areas, as the adults can be cannibalistic. One way or another, if you have a female, she will give birth, and some of the young will survive. Be sure you have enough space to house them or have other homes lined up for them. Platies are a great interactive fish, easy to care for, and can adapt to very hard water that other fish cannot. Despite their cannibalistic nature, platies are very calm and peaceful fish, and can be kept with a wide range of tankmates."
        },
        {
          fishNumber: 20,
          image:"./images/discus.jpg",
          name:"Discus",
           fishInfo:"The Discus fish, commonly held as a holy grail in fish keeping and regarded as one of the most difficult to care for fish, can actually be kept by beginner fish keepers. While it is not recommended to keep Discus as your very first fish, it can be done...",
          otherInfo:"60 gallons",
          link:" When you first start keeping Discus, you will want to start with some of the lower-grade fish, though these will still cost $20-40 USD each. Discus are more demanding than your average fish, so it helps to have experience with at least one other fish before moving to Discus. Recently, there have been several lower-grade strains that could easily be regarded as hardy, meaning the average fish keeper can successfully house these fish.Their main issue is nitrates; while most fish tolerate 20-40ppm just fine, it is best to keep the nitrates in a Discus tank between 0-10ppm. Essentially, these fish need more water changes than other fish, primarily due to their meat heavy diet, which produces a lot of nitrogenous waste. As long as you can provide a large tank, appropriate food (which often includes beef heart and homemade meals), a school of Discus (at least 6), enough filtration, and a solid time commitment, you should have no trouble keeping them."
         
        },
        {
          fishNumber: 21,
          image:"./images/killifish.jpg",
          name:"Killifish",
           fishInfo:"While there are hundreds of species of killifish, here we will go over some of the common aspects of care. Most species you can find for sale will fall under this category and general care, as the sensitive ones are normally only sold online...",  
          otherInfo:"mininmum - 10-20 gallons",
          link:" Most species are incredibly hardy, and while they are prone to jumping, they do not have any other downsides. They can have absolutely magnificent coloration, such as f. gardneri, though there are hundreds of bold colored killifish. Unlike the other fish on this list, killifish do best in a species only tank, or a tank that only houses one species of fish. They can be skittish and tricky to feed, so a community tank can cause a lot of stress for them. Simply because there are so many species, and because each one has slightly different requirements, they do require more in-depth research than other beginner species."
        },
        {
          fishNumber: 22 ,
          image:"./images/rainbowfish.jpg",
          name:" Rainbowfish",
           fishInfo:"Rainbowfish are large and brilliantly colored schooling fish, normally best suited for equally large community tanks. They are incredibly active, which can make other fish feel safer, and are very hardy and easy to take care of. Rainbowfish are...",
            otherInfo:"minimum - 55 gallons",
          link:" not at all picky, nor aggressive. A few species can be difficult for a beginner to care of, though these are not commonly found in stores, so there is little chance that a beginner accidentally buys a difficult rainbow fish. They do best in heavily planted tanks, as they like to weave in and out of the plants. In addition, green plants provide a beautiful contrast to their bright colors and can really make them pop."
        
        },
        {
          fishNumber: 23,
          image:"./images/firemouth-cichlid.jpg",
          name:"Firemouth Cichlids",
           fishInfo:"Firemouth cichlids are stunning and hardy fish, perfect for beginners. They are flashy, iridescent, and can light up any tank. They also thrive in a wide range of water parameters, so nothing needs to be done to provide them with special water...", 
           otherInfo:"mi nimum - 20 gallons",
          link:"or alter the water you already have. Like other cichlids, they can be aggressive, especially when breeding, but as long as you chose tank mates of a similar size, the aggression will not last long. Provide plenty of decorations such as rocks and driftwood, as these double as sight breaks and potential territories. If your cichlid can establish a territory around one or two decorations that they feel safe in, the tank will be peaceful."        
        },
        {
          fishNumber: 24 ,
          image:"./images/pictuscatfish.jpg",
          name:"Pictus Catfish",
           fishInfo:"The pictus catfish is one of the most classic looking aquarium catfish that a beginner can own. They have light gray bodies with bold black spots, and massive barbells, or whiskers, which give them that “catfish” look. Other catfish in aquariums,...", 
            otherInfo:"minimum - 55 gallons",
          link:"such as pleco catfish, do not have large whiskers, and may not be immediately recognized as catfish. Pictus catfish will shoal if you keep them together, but you will need a much larger tank. They are peaceful inhabitants of community aquariums, as long as there are enough decorations for them to hide in and among. These catfish are very active and do not stay at the bottom of the aquarium. Expect to see them swimming around in the mid-section frequently, and plan tank mates accordingly. While they are peaceful, they will eat smaller tank mates when hungry, so it is best to house them with larger fish."     
        },
        {
          fishNumber:25 ,
          image:"./images/clown-loach.jpg",
          name:"clown loach",
           fishInfo:"Clown loaches have large, bold, vertical black and yellow stripes, which make them stand out in any aquarium. They are boisterous and have to be kept in groups, so there is no way for them to blend into the background. Many people get them in order to...",
          otherInfo:"mininmum - 175 gallons",
          link:" deal with snail infestations, but you need to be sure that you will be able to house a group of these large fish. They simply will not survive in small tanks, but the bigger the tank you put them in, the happier and more active they will become. Clown loaches do require quite a few hiding areas in order to be safe and stress free, thus reducing the chances of them getting sick. They are active during the day, unlike most loaches, so feeding them in a community setting will not be an issue."
        },
        {
          fishNumber: 26,
          image:"./images/white-cloud-minnow.jpg",
          name:"White Cloud Minnows",
           fishInfo:"White cloud mountain minnows (WCMM) are adorable and flashy little fish. While they were only recently introduced into the hobby, they have become quite popular in a short period of time. Their lively and peaceful nature, coupled with their white bodies...",
           otherInfo:"minimum - 10 gallons",
          link:" and colorful red fins, make them perfect for many aquariums. In terms of hardiness, this fish may very well be the hardiest fish on this list. They are durable in terms of adaptability to various water parameters, their food, school size (though it needs to be at least six), tank mates, and they can thrive in water from 45 to 85 degrees Fahrenheit. This fish is not at all demanding and is great for learning the ropes of fish keeping."
        },
        {
          fishNumber: 27,
          image:"./images/bichir-fish.jpg",
          name:"Bichir",
           fishInfo:"While bichirs are generally regarded as a difficult fish to keep, anyone who has done proper research and can properly feed them will be able to let this fish thrive. Bichirs aren’t necessarily aggressive, but they will attempt to eat any smaller fish in...", 
            otherInfo:"minimum - 50-125 gallons",
          link:"the tank. While other fish prefer community tanks, as the activity of other species make them feel safer, bichirs have no preference toward either a community tank or a species only tank. In terms of feeding, they have voracious appetites, so the issue is not getting them to eat, rather, their food can be quite expensive. They require frozen food, such as shrimp, mussels, clams, worms, and fish to be a primary part of their diet, and the cost for these can add up quickly. Despite this, owners rarely find the cost an issue, simply because bichirs are so incredibly unique and fun to keep."
        },
        {
          fishNumber: 28 ,
          image:"./images/golden-barb.jpg",
          name:"Gold Barb",
           fishInfo:"The gold barb is a large and flashy schooling fish, presenting a gold body with black speckling and bright red fins. Planted aquariums are especially good at drawing out the color of these fish, which will attract a lot of attention to your tank. Schooling...", 
            otherInfo:"minimum - 20 gallons",
          link:"fish can get nippy if their school is too small, and the gold barb is no exception. They aren’t particularly aggressive, but if they are uncomfortable in their school, they may lash out at other species in the tank. Luckily, this is easily resolved with the addition of a few more gold barbs. It is impossible to be disappointed with these gorgeous fish and flashy colors, especially because they do so well in community tanks. While they are not often centerpiece fish, they are great for enhancing other colors in the tank and helping with the overall aesthetic. Gold barbs are good beginner fish due to their hardy nature, calm demeanor, and ability to peacefully interact with other fish."
        },
        {
          fishNumber: 29 ,
          image:"./images/rosy-barb.jpg",
          name:"Rosy Barb",
           fishInfo:"While they get larger than gold barbs, and most barbs for that matter, rosy barbs are not aggressive or overly boisterous. Their size makes them more compatible with larger fish than other barbs, but otherwise has little impact on their care. Rosy barbs are...",
           otherInfo:"minimum - 29 gallons",
          link:" aptly named for their stark red coloration and highly iridescent scales, which reflect a soft pink color. Other coloration is sparse and varies from fish to fish, but they normally have a black dot at the beginning of their tail and black on the tips of their fins. Keeping a properly sized group of at least six is very important for rosy barbs, as they do have a tendency to bite the fins of other fish if their school is too small. They are extremely hardy, not picky eaters, and work very well in community tanks and with other peaceful fish. Most are also able to handle semi-aggressive fish very well, so options for tankmates are not as limited as they are with other barbs."
        },
        {
          fishNumber: 30,
          image:"./images/jack-dempsey-2.jpg",
          name:" Jack Dempsey",
           fishInfo:"The Jack Dempsey Cichlid is probably the second most aggressive fish on this list, and despite this fact, they can still be successfully kept by a beginner. They are strikingly beautiful, as their dark bodies are speckled with bright colored iridescent and...", 
           otherInfo:"minimum - 60 gallons",
          link:"opalescent scales, changing with every movement they make. Understand that aggressive fish require more care and maintenance than peaceful fish, so a Jack Dempsey will require much more care than the other fish on this list. They also need larger tanks, more expensive food, and more expensive filtration. These are obstacles for beginners, but by no means do they prevent a knowledgeable beginner from properly caring for this fish."
        }
      ];

      //accessing the classes. of the information places
const img = document.getElementById("image");
const fishName = document.getElementById("name");
const  tankSize = document.getElementById("other");
const  about = document.getElementById("fishabout");


//Access the btns
const moreBtn = document.querySelector(".moreBtn");
const changBtn = document.querySelector("#btnCh");
const nextBtn = document.getElementById("next-Btn");
const prevBtn = document.getElementById("prev-Btn");
const randomBtn = document.getElementById("random-Btn");

let currentFish = 0;

//What to be dispalyed when the page is intially loaded
window.addEventListener('DOMContentLoaded', ()=>{
  //  const item = reviews[currentFish];
  // //  console.log(item);
  // img.src = item.image;
  // fishName.textContent = item.name;
  // tankSize.textContent = item.otherInfo;
  // about.textContent = item.fishInfo;
  showFish();
})

//RELATIVELY , create a function with on acces point to call in all the btns

function showFish(){
  const item = reviews[currentFish];
   img.src = item.image;
   fishName.textContent = item.name;
    tankSize.textContent = item.otherInfo;
    about.textContent = item.fishInfo;
    changBtn.style.display = "none";
    moreBtn.style.display = "inline";
}

function moreFish(){
  const item = reviews[currentFish];
  img.src = item.image;
  fishName.textContent = item.name;
   tankSize.textContent = item.otherInfo;
   about.textContent = item.fishInfo + item.link;
   moreBtn.style.display = "none";
   changBtn.style.display = "inline";
   

}
// enable the moreBtn
moreBtn.addEventListener('click',()=>{
  moreFish();
})
changBtn.addEventListener('click',()=>{
  showFish();
})

//enable the next button
nextBtn.addEventListener('click',()=>{
   currentFish++;
  //  console.log(currentFish);
  if(currentFish > reviews.length - 1){
     currentFish = 0;
  }
  showFish();
})

//enable the prev button
  prevBtn.addEventListener('click',()=>{
    currentFish--;
    if(currentFish < 0){
      currentFish = reviews.length - 1;
    }
    showFish();
  })

//enable the random button
randomBtn.addEventListener('click',()=>{
    currentFish = Math.floor(Math.random() * reviews.length);
    //  console.log(currentFish);
    showFish();
})


