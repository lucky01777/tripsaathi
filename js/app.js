/* ===== TripSaathi App JavaScript ===== */

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// ===== Trip Data =====
var tripData = [
  {
    id: 1, name: "Manali Snow Adventure", city: "Manali",
    days: 3, price: 2999, category: "adventure",
    emoji: "🏔️",
    desc: "Explore snow-capped peaks, Solang Valley & Old Manali cafes on a tight budget.",
    transport: "Volvo bus from Delhi (₹800)", stay: "Hostel dorm (₹400/night)", food: "Local dhabas (₹200/day)",
    itinerary: ["Arrive Manali, explore Mall Road & Old Manali", "Solang Valley & Rohtang viewpoint", "Jogini Waterfall trek & departure"]
  },
  {
    id: 2, name: "Rishikesh Rafting Trip", city: "Rishikesh",
    days: 2, price: 1999, category: "adventure",
    emoji: "🌊",
    desc: "White water rafting, camping by the Ganga & Beatles Ashram vibes.",
    transport: "Bus from Delhi (₹400)", stay: "Riverside camp (₹600/night)", food: "Cafe hopping (₹250/day)",
    itinerary: ["Arrive, rafting 16km stretch, beach camping", "Beatles Ashram, Ram Jhula, cafe sunset & departure"]
  },
  {
    id: 3, name: "Delhi Street Food Tour", city: "Delhi",
    days: 1, price: 499, category: "food",
    emoji: "🍜",
    desc: "Chandni Chowk to Connaught Place — the ultimate street food crawl.",
    transport: "Metro pass (₹100)", stay: "Day trip", food: "All-you-can-eat budget (₹350)",
    itinerary: ["Chandni Chowk paranthe wali gali → Karim's → Jalebi at Old Famous → CP momos & kulfi"]
  },
  {
    id: 4, name: "Jaipur Heritage Walk", city: "Jaipur",
    days: 2, price: 2499, category: "culture",
    emoji: "🏰",
    desc: "Pink City forts, bazaars, and authentic Rajasthani thali experience.",
    transport: "Train from Delhi (₹300)", stay: "Budget hotel (₹500/night)", food: "Thali meals (₹150/day)",
    itinerary: ["Amber Fort, Nahargarh sunset, Johari Bazaar walk", "Hawa Mahal, City Palace, local thali & departure"]
  },
  {
    id: 5, name: "Goa Beach Escape", city: "Goa",
    days: 3, price: 4499, category: "chill",
    emoji: "🏖️",
    desc: "North Goa beaches, night markets, and sunset shacks on a student budget.",
    transport: "Sleeper bus (₹1200)", stay: "Beach hostel (₹500/night)", food: "Beach shacks (₹300/day)",
    itinerary: ["Arrive, Baga Beach & Tito's Lane", "Anjuna flea market, Chapora Fort sunset", "Calangute water sports & departure"]
  },
  {
    id: 6, name: "Varanasi Spiritual Trip", city: "Varanasi",
    days: 2, price: 1799, category: "culture",
    emoji: "🕉️",
    desc: "Ganga Aarti, ancient ghats, and the best lassi & chaat in India.",
    transport: "Train (₹350)", stay: "Ghat-view guesthouse (₹400/night)", food: "Street food trail (₹200/day)",
    itinerary: ["Morning boat ride, Kashi Vishwanath, Blue Lassi shop", "Ganga Aarti, Assi Ghat walk, chai & departure"]
  },
  {
    id: 7, name: "Kasol Backpacker Trip", city: "Kasol",
    days: 3, price: 3499, category: "adventure",
    emoji: "⛺",
    desc: "Parvati Valley trek, Israeli cafes, and mountain camping under the stars.",
    transport: "Bus from Delhi (₹700)", stay: "Camp tent (₹500/night)", food: "Cafe meals (₹250/day)",
    itinerary: ["Arrive Kasol, explore village & riverside cafes", "Kheerganga trek (full day)", "Chalal walk, Manikaran hot springs & departure"]
  },
  {
    id: 8, name: "Udaipur Lake City", city: "Udaipur",
    days: 2, price: 2999, category: "culture",
    emoji: "🌅",
    desc: "City of lakes, rooftop cafes, and royal Rajasthani vibes without breaking the bank.",
    transport: "Bus/Train (₹600)", stay: "Lakeside hostel (₹500/night)", food: "Rooftop dining (₹250/day)",
    itinerary: ["City Palace, Fateh Sagar Lake boat ride, sunset at Ambrai Ghat", "Saheliyon ki Bari, Jagdish Temple, bazaar shopping & departure"]
  },
  {
    id: 9, name: "Kolkata Food & Culture", city: "Kolkata",
    days: 2, price: 1999, category: "food",
    emoji: "🍛",
    desc: "Victoria Memorial, Howrah bridge vibes, and the best mishti doi & biryani.",
    transport: "Train (₹500)", stay: "Budget hotel (₹400/night)", food: "Street eats (₹200/day)",
    itinerary: ["Victoria Memorial, Park Street, Howrah Bridge sunset, kathi rolls", "College Street books, Kumartuli, mishti doi trail & departure"]
  },
  {
    id: 10, name: "Mcleodganj Weekend", city: "Mcleodganj",
    days: 2, price: 2499, category: "adventure",
    emoji: "🧘",
    desc: "Mini Tibet vibes — monasteries, Triund trek, and momos galore.",
    transport: "Bus from Delhi (₹700)", stay: "Hostel (₹400/night)", food: "Tibetan cafes (₹200/day)",
    itinerary: ["Arrive, Bhagsu Waterfall, Namgyal Monastery", "Triund day trek, sunset views & departure"]
  },
  {
    id: 11, name: "Amritsar Golden Trip", city: "Amritsar",
    days: 2, price: 1999, category: "food",
    emoji: "🙏",
    desc: "Golden Temple, Wagah Border ceremony, and legendary Amritsari kulcha.",
    transport: "Train from Delhi (₹300)", stay: "Sarai (free) / Budget hotel (₹400/night)", food: "Langar + street food (₹150/day)",
    itinerary: ["Golden Temple darshan, langar, Jallianwala Bagh, street food walk", "Wagah Border ceremony, kulcha trail & departure"]
  },
  {
    id: 12, name: "Pondicherry Vibes", city: "Pondicherry",
    days: 3, price: 3999, category: "chill",
    emoji: "🇫🇷",
    desc: "French Quarter, beach cycling, Auroville & affordable seafood.",
    transport: "Bus from Chennai (₹400)", stay: "Hostel (₹500/night)", food: "French cafes + local (₹300/day)",
    itinerary: ["White Town heritage walk, Rock Beach sunrise", "Auroville visit, Paradise Beach by boat", "Promenade cycling, cafe hopping & departure"]
  }
];

// ===== Experience Data =====
var experienceData = [
  {
    id: 1, name: "Chandni Chowk Food Walk", city: "Delhi", category: "food",
    emoji: "🥘", duration: "3 hours", price: 299, rating: 4.8,
    desc: "Taste 10+ iconic dishes from paranthe wali gali to jalebi at Old Famous. A local guide takes you through lanes tourists never find.",
    highlights: ["Paranthe Wali Gali", "Karim's kebabs", "Old Famous Jalebi Wala", "Natraj Dahi Bhalle"]
  },
  {
    id: 2, name: "Hidden Temples of Varanasi", city: "Varanasi", category: "hidden",
    emoji: "🛕", duration: "4 hours", price: 199, rating: 4.9,
    desc: "Skip the tourist ghats — explore secret temples, ancient wells, and local chai spots known only to residents.",
    highlights: ["Secret Shiva temple", "500-year old well", "Weaver's quarter", "Local chai adda"]
  },
  {
    id: 3, name: "Jaipur Bazaar Secrets", city: "Jaipur", category: "hidden",
    emoji: "💎", duration: "3 hours", price: 249, rating: 4.7,
    desc: "Learn to spot real gems, find the cheapest block-print shops, and eat where locals eat in the Pink City.",
    highlights: ["Gem testing tricks", "Block print workshops", "Hidden rooftop cafe", "Local kachori spot"]
  },
  {
    id: 4, name: "Mumbai Dabba Trail", city: "Mumbai", category: "food",
    emoji: "🍱", duration: "4 hours", price: 349, rating: 4.8,
    desc: "Follow the dabbawalas, taste vada pav from 5 legendary spots, and explore hidden Irani cafes.",
    highlights: ["Dabbawala journey", "5 vada pav spots", "Irani cafe breakfast", "Chowpatty bhelpuri"]
  },
  {
    id: 5, name: "Old Delhi by Night", city: "Delhi", category: "hidden",
    emoji: "🌙", duration: "3 hours", price: 399, rating: 4.9,
    desc: "Experience Chandni Chowk after dark — the night food scene, lit-up Jama Masjid, and midnight chai.",
    highlights: ["Midnight butter chicken", "Jama Masjid by moonlight", "Night chai stalls", "Hidden rooftop views"]
  },
  {
    id: 6, name: "Kolkata Street Art Walk", city: "Kolkata", category: "hidden",
    emoji: "🎨", duration: "2.5 hours", price: 149, rating: 4.6,
    desc: "Discover Kolkata's vibrant street art scene, from political murals to modern graffiti in hidden alleyways.",
    highlights: ["Street art murals", "College Street lane art", "Artists' quarter", "Chai with local artists"]
  },
  {
    id: 7, name: "Lucknow Tunday Trail", city: "Lucknow", category: "food",
    emoji: "🍢", duration: "3.5 hours", price: 279, rating: 4.9,
    desc: "The ultimate Lucknowi food crawl — Tunday kebabs, basket chaat, and the secret malai paan.",
    highlights: ["Tunday Kababi (original)", "Basket chaat", "Royal Cafe", "Malai paan secret shop"]
  },
  {
    id: 8, name: "Goa Beyond Beaches", city: "Goa", category: "hidden",
    emoji: "🌿", duration: "5 hours", price: 499, rating: 4.7,
    desc: "Forget Baga — explore abandoned Portuguese houses, secret waterfalls, and local feni-making villages.",
    highlights: ["Abandoned Portuguese mansion", "Secret waterfall", "Feni distillery visit", "Village fish thali"]
  },
  {
    id: 9, name: "Amritsar Food Marathon", city: "Amritsar", category: "food",
    emoji: "🫓", duration: "4 hours", price: 199, rating: 4.9,
    desc: "From the legendary Kesar da Dhaba to hole-in-the-wall lassi shops — 8 stops of pure Punjab flavor.",
    highlights: ["Kesar da Dhaba dal", "Amritsari kulcha", "Lassi at Ahuja", "Jalebi at Gurdas Ram"]
  }
];

// ===== Homestay Data =====
var homestayData = [
  {
    id: 1, name: "Mountain View Cottage", location: "Manali, HP",
    emoji: "🏡", price: 600, rating: 4.7, type: "cottage",
    desc: "Cozy cottage with valley views, home-cooked Himachali meals, and bonfire nights.",
    amenities: ["Wi-Fi", "Home food", "Bonfire", "Valley view"],
    host: "Aunty Kamla"
  },
  {
    id: 2, name: "Riverside Camp Stay", location: "Rishikesh, UK",
    emoji: "⛺", price: 450, rating: 4.5, type: "camp",
    desc: "Tents by the Ganga with yoga sessions and unlimited chai.",
    amenities: ["River access", "Yoga", "Chai", "Campfire"],
    host: "Ravi Bhai"
  },
  {
    id: 3, name: "Heritage Haveli Room", location: "Jaipur, RJ",
    emoji: "🏰", price: 800, rating: 4.8, type: "heritage",
    desc: "Stay in a 150-year old haveli with rooftop breakfast and palace views.",
    amenities: ["Rooftop", "Breakfast", "Palace view", "AC"],
    host: "Sharma Family"
  },
  {
    id: 4, name: "Backpacker Bunk", location: "Kasol, HP",
    emoji: "🛏️", price: 300, rating: 4.3, type: "hostel",
    desc: "Budget-friendly bunks in the heart of Kasol with common kitchen and chill zone.",
    amenities: ["Kitchen", "Wi-Fi", "Locker", "Common area"],
    host: "Wanderers Hostel"
  },
  {
    id: 5, name: "Beach Hut Paradise", location: "Gokarna, KA",
    emoji: "🏖️", price: 500, rating: 4.6, type: "hut",
    desc: "Simple bamboo hut steps from Om Beach — hammock, sea breeze, zero stress.",
    amenities: ["Beach access", "Hammock", "Sea view", "Restaurant"],
    host: "Suresh Uncle"
  },
  {
    id: 6, name: "Tea Garden Homestay", location: "Munnar, KL",
    emoji: "🍵", price: 700, rating: 4.8, type: "cottage",
    desc: "Wake up surrounded by tea gardens, enjoy Kerala breakfast & guided plantation walks.",
    amenities: ["Tea garden", "Kerala food", "Guided walk", "Wi-Fi"],
    host: "Thomas Family"
  },
  {
    id: 7, name: "Lake House Dorm", location: "Udaipur, RJ",
    emoji: "🌊", price: 400, rating: 4.4, type: "hostel",
    desc: "Rooftop dorm with stunning lake view, perfect for solo travelers and groups.",
    amenities: ["Lake view", "Rooftop", "Cafe", "Laundry"],
    host: "Moustache Hostel"
  },
  {
    id: 8, name: "Village Farm Stay", location: "Coorg, KA",
    emoji: "🌾", price: 650, rating: 4.7, type: "farm",
    desc: "Coffee plantation stay with home-cooked Kodava food and nature trails.",
    amenities: ["Farm tour", "Home food", "Nature trail", "Coffee"],
    host: "Kaveri Aunty"
  }
];

// ===== Budget Planner Logic =====
function generateBudgetPlan(budget, travelers, from) {
  var plans = [];

  tripData.forEach(function(trip) {
    if (trip.price <= budget) {
      plans.push(trip);
    }
  });

  // Sort by best value (most days per rupee)
  plans.sort(function(a, b) {
    return (b.days / b.price) - (a.days / a.price);
  });

  return plans.slice(0, 5);
}

function formatBudgetBreakdown(trip, travelers) {
  var count = travelers || 1;
  var transportCost = parseInt(trip.transport.match(/₹(\d+)/)[1]) * count;
  var stayCost = trip.stay === "Day trip" ? 0 : parseInt(trip.stay.match(/₹(\d+)/)[1]) * (trip.days - 1) * Math.ceil(count / 2);
  var foodCost = parseInt(trip.food.match(/₹(\d+)/)[1]) * trip.days * count;
  var total = transportCost + stayCost + foodCost;

  return {
    transport: transportCost,
    stay: stayCost,
    food: foodCost,
    total: total,
    perPerson: Math.round(total / count)
  };
}

// ===== Render Functions =====
function renderTripCard(trip) {
  return '<div class="card" data-category="' + trip.category + '">' +
    '<div class="card-img">' + trip.emoji + '</div>' +
    '<div class="card-body">' +
      '<h3>' + trip.name + '</h3>' +
      '<p>' + trip.desc + '</p>' +
      '<div class="card-meta">' +
        '<span class="price">₹' + trip.price + '</span>' +
        '<span class="tag">' + trip.days + ' Day' + (trip.days > 1 ? 's' : '') + '</span>' +
        '<span class="tag tag-success">' + trip.category + '</span>' +
      '</div>' +
      '<a href="planner.html?trip=' + trip.id + '" class="btn btn-primary btn-sm mt-2" style="width:100%;justify-content:center;">View Plan</a>' +
    '</div>' +
  '</div>';
}

function renderExperienceCard(exp) {
  return '<div class="card" data-category="' + exp.category + '">' +
    '<div class="card-img">' + exp.emoji + '</div>' +
    '<div class="card-body">' +
      '<h3>' + exp.name + '</h3>' +
      '<p>' + exp.desc + '</p>' +
      '<div class="card-meta">' +
        '<span class="price">₹' + exp.price + '</span>' +
        '<span class="tag">' + exp.duration + '</span>' +
        '<span class="rating">★ ' + exp.rating + '</span>' +
      '</div>' +
      '<div class="amenities mt-2">' +
        exp.highlights.map(function(h) { return '<span class="amenity">' + h + '</span>'; }).join('') +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderHomestayCard(stay) {
  return '<div class="card" data-type="' + stay.type + '">' +
    '<div class="card-img">' + stay.emoji + '</div>' +
    '<div class="card-body">' +
      '<h3>' + stay.name + '</h3>' +
      '<p>' + stay.desc + '</p>' +
      '<div class="card-meta">' +
        '<span class="price">₹' + stay.price + '<small>/night</small></span>' +
        '<span class="tag">' + stay.location + '</span>' +
        '<span class="rating">★ ' + stay.rating + '</span>' +
      '</div>' +
      '<div class="amenities mt-2">' +
        stay.amenities.map(function(a) { return '<span class="amenity">' + a + '</span>'; }).join('') +
      '</div>' +
      '<p style="margin-top:8px;font-size:0.82rem;color:var(--text-muted);">Host: ' + stay.host + '</p>' +
    '</div>' +
  '</div>';
}

// ===== Filter Logic =====
function filterCards(container, category) {
  var cards = container.querySelectorAll('.card');
  cards.forEach(function(card) {
    var cat = card.getAttribute('data-category') || card.getAttribute('data-type');
    if (category === 'all' || cat === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
