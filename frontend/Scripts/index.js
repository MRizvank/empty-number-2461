var data = [
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13205278-1974885475502363.jpg",
        type: "Olaplex Healthy Hair Essentials Kit - $84.00 Value",
        MRP:60.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13230258-6024900048950270.jpg",
        type: "Dr Demis Gross ped Love Joy Set- $51.00 Value",
        MRP:34.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13277591-1814898492833701.jpg",
        type: "Vinoperfect Dark Spot Brightenning Set $117.00 Value",
        MRP:79.00,

    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/12692885-9294871307990462.jpg",
        type: "Sunday Rile Wake Up With Me: Complete Morning Skincare Routine 6 piece- $158 Value",
        MRP: 95.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/12918957-1774871297058075.jpg",
        type: "Dr Dennis Gross Skincare Dermstore Exclusive AtHome Facial Kit 3 piece- $235 Value",
      MRP: 279.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13220026-3054897151143179.jpg",
        type: "FOREO UFO 2 Skincare Secrets Gits Set- $378.95 Value",
        MRP: 279.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13097177-1964898531576103.png",
        type: "slip Holiday Bauble 2021 Night Life 1 x White Rose Gold Star 4piece",
        MRP: 30.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13176041-1904885993627893.jpg",
        type: "111SKIN The jetsetter Set(Worth $43.00)",
        MRP: 30.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/12692885-9294871307990462.jpg",
        type: "Sunday Riley Wake Up With Me: Complete Morning Skincare Routine 6 pices-$158 Value",
        MRP:199.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13280761-1824907531367318.jpg",
        type: "Sunday Riley The Big Glow Deluxe Good Genes Kit- $309 Value",
        MRP:199.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13305212-2494907534493936.jpg",
        type: "ILIA The small Wor",
        MRP:29.00,
    },
    
  ];
  var block2 = document.getElementById("block2");
  var block21 = document.createElement("div");
  block21.setAttribute("id", "block21");
  block2.append(block21);
  showProducts();

  function showProducts() {
    data.map(function (item) {
      var imageDiv = document.createElement("div");
      imageDiv.setAttribute("id", "block22")
      var img = document.createElement("img");
      img.style.width="100%"
      img.setAttribute("src", item.image_url);
      var p = document.createElement("p");
      p.textContent = item.type;

      var p2 = document.createElement("h3");
      p2.innerHTML = `$ ${item.MRP}`;

      var btn = document.createElement("button");
      btn.textContent = "QUICKBUY";
      btn.addEventListener('click',function(){
          window.location.href='product.html'
      });
      imageDiv.append(img, p, p2, btn);

      block21.append(imageDiv);
    });
  }


  var data1 = [
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg",
        type: "SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)",
        MRP:130.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/11588289-1954882134544518.jpg",
        type: "Sunday Riley C.E.O. Vitamin C Rich Hydration Cream (1.7 oz)",
        MRP:123.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/12902892-1754869141396300.jpg",
        type: "SENTÉ Dermal Repair Cream (1.7 fl. oz.)",
        MRP:164.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/11054488-6294867924186974.jpg",
        type: "First Aid Beauty Ultra Repair Cream (6 oz.)",
        MRP: 36.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/1600/1600/11833559-1824786785439269.jpg",
        type: "Perricone MD Hyaluronic Intensive Moisturizer (1 fl. oz.)",
        MRP: 279.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/11287902-1974871577184347.jpg",
        type: "iS Clinical Youth Intensive Creme (1.7 oz.)",
        MRP: 225.00,
    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/12753673-1674835033892588.jpg",
        type:"Kate Somerville KateCeuticals Total Repair Cream 1 fl. oz.",
        MRP: 120.00,

    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/11290631-5864870995720591.jpg",
        type: "SkinMedica HA5 Rejuvenating Hydrator (2 oz.)",
        MRP: 30.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/11289072-3954876993308378.jpg",
        type: "PCA SKIN Collagen Hydrator (1.7 oz.)",
        MRP:50.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/11288913-2454871572381206.jpg",
        type: "Obagi Medical Hydrate Luxe (1.7 oz.)",
        MRP:74.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/11370388-1734871896274832.jpg",
        type: "Eminence Organic Skin Care Strawberry Rhubarb Hyaluronic Serum 1 fl. oz",
        MRP:29.00,
    },
    
  ];
  var block3 = document.getElementById("block3");
  showProducts1();

  function showProducts1() {
    data1.map(function (item) {
      var imageDiv1 = document.createElement("div");
      imageDiv1.setAttribute("id", "block3_1")
      var img = document.createElement("img");
      img.style.width="100%"
      img.setAttribute("src", item.image_url);
      var p1 = document.createElement("p");
      p1.textContent = item.type;

      var p2 = document.createElement("h3");
      p2.innerHTML = `$ ${item.MRP}`;

      var btn1 = document.createElement("button");
      btn1.textContent = "QUICKBUY";
      btn1.addEventListener('click',function(){
        window.location.href='product.html'
     });
      imageDiv1.append(img, p1, p2, btn1);

      block3.append(imageDiv1);
    });
  }

  var data2 = [
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13279307-1504898790753222.jpg",
        type: "SkinCeuticals Post-Injectable System",
        MRP:190.00,
    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/10243506-1754906255177941.jpg",
        type: "Alpha-H Liquid Gold 3.4oz",
        MRP:54.00,

    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/13280902-2644900288405860.jpg",
        type: "Nuface Mini Hydrate and Contour Mini Gift Set - $268.00 Value",
        MRP:209.00,

    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/13230256-4364900044693462.jpg",
        type: "Dr Dennis Gross Let It Glow Set - $147.00 Value",
        MRP: 88.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13196078-1324889940505536.jpg",
        type: "SkinCeuticals Advanced Scar Control 1.7 fl. oz",
        MRP: 110.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13232032-1834900760920071.jpg",
        type: "HUM Nutrition Gummy Glam Set",
        MRP: 35.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13195310-1154882211375568.jpg",
        type:"First Aid Beauty Skin Fortune Kit - $95.50 Value",
        MRP: 54.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13225331-4154891688121036.jpg",
        type: "Eminence Organic Skin Care Marine Flower Peptide Concentrate 1.2 oz",
        MRP: 70.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13279308-1414898791289589.jpg",
        type: "SkinCeuticals Post-Chemical Peel System",
        MRP:200.00,

    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/13225330-1984891688004171.jpg",
        type: "Eminence Organic Skin Care Marine Flower Peptide Lip Serum 0.33 oz",
        MRP:46.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13220606-9874885742399445.jpg",
        type: "Peter Thomas Roth Pick Your Patch",
        MRP:19.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13225357-2244885550140839.jpg",
        type: "Obagi Nu-Cil Eyelash Enhancing Serum 3ml",
        MRP:120.00,
    },
    
  ];
  var block4 = document.getElementById("block4");
  showProducts2();

  function showProducts2() {
    data2.map(function (item) {
      var imageDiv1 = document.createElement("div");
      imageDiv1.setAttribute("id", "block4_1")
      var img = document.createElement("img");
      img.style.width="100%"
      img.setAttribute("src", item.image_url);
      var p2 = document.createElement("p");
      p2.textContent = item.type;

      var h3 = document.createElement("h3");
      h3.innerHTML = `$ ${item.MRP}`;

      var btn1 = document.createElement("button");
      btn1.textContent = "QUICKBUY";
      btn1.addEventListener('click',function(){
        window.location.href='product.html'
     });
      imageDiv1.append(img, p2, h3, btn1);

      block4.append(imageDiv1);
    });
  }


  var data3 = [
    {
        image_url:
        "https://static.thcdn.com/images/small/webp/widgets/208-us/21/skin-care-products-widget-085821.jpg",
        type: "Spoil Mom This Year with These Beauty Gifts",
       
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp/widgets/208-us/23/skin-care-and-makeup-products-widget-085723.jpg",
        type: "Perfect Presents to Pamper Your Bestie",
       

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp/widgets/208-us/19/1200-x-672-080319.png",
        type: "6 Winter Skin Care Tips You Need to Know",

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp/widgets/208-us/55/isclinical-products-widget-074955.jpg",
        type: "Skin Care Gifts You’ll Want to Keep for Yourself",

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp/widgets/208-us/44/peter-thomas-roth-products-widget-044244.jpg",
        type: "Our Top Gifts for Some Much-Needed Self-Care",

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp/widgets/208-us/40/skinceuticals-products-widget-110940.jpg",
        type: "7 Overnight Treatments for Super Glowy Skin",
        
    },
    
    
  ];
  var block5 = document.getElementById("block5");
  showProducts3();

  function showProducts3() {
    data3.map(function (item) {
      var imageDiv2 = document.createElement("div");
      imageDiv2.setAttribute("id", "block5_1")
      var img = document.createElement("img");
      img.style.width="100%"
      img.setAttribute("src", item.image_url);
      var p3 = document.createElement("p");
      p3.textContent = item.type;

      var btn2 = document.createElement("button");
      btn2.textContent = "QUICKBUY";
      btn2.addEventListener('click',function(){
        window.location.href='product.html'
     });
      imageDiv2.append(img, p3, btn2);

      block5.append(imageDiv2);
    });
  }

 
  let images = [
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/51/original-MicrosoftTeams-image_%286%29-090051.png",
    "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/59/original-afterpay-hp_%281%29-031359.png",
    
];





let container = document.getElementById("slidewindow");


function startslideshow() {

    let counter = 0;
    let img = document.createElement("img");
    img.src = images[0];

    container.append(img);
    counter = counter + 1;

    let interval = setInterval(function() {
        container.innerHTML = null;

        if (counter === images.length) {
            counter = 0;
        }
        let img = document.createElement("img");

        img.src = images[counter];
        container.append(img);
        counter = counter + 1;
    }, 4000);
}
startslideshow();



let img = document.createElement("img");



  
 
  
 
 
  


  
 
  
 