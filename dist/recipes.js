/* Independently authored recipe drafts; see sourcing-policy.md. */
const RECIPE_DATA = [
  {
    "id": "fried-rice",
    "name": "Simple egg fried rice",
    "cuisine": "International",
    "role": "starch",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "cooked rice",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "eggs",
        "quantity": 2.0,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "spring onion",
        "quantity": 1.0,
        "unit": "piece"
      }
    ],
    "steps": [
      "Break apart the chilled cooked rice and beat the eggs in a bowl.",
      "Heat half the oil in a wide pan over medium heat. Scramble the eggs until set, then lift them onto a clean plate.",
      "Add the remaining oil and rice. Stir and turn for 4–6 minutes, breaking up clumps, until hot throughout.",
      "Return the eggs, add the salt and stir together for one minute. Use the reheating guidance below before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tomato-pasta",
    "name": "Easy tomato & garlic pasta",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "dry pasta",
        "quantity": 180.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "pepper",
        "quantity": 0.5,
        "unit": "g"
      }
    ],
    "steps": [
      "Cook the dry pasta in boiling water according to its packet. Keep a cup of cooking water before draining.",
      "Chop the tomatoes and mince the garlic. Warm the oil in a pan, then stir the garlic for 30 seconds without browning it.",
      "Add tomatoes and salt. Simmer for 12–15 minutes, crushing the pieces as they soften.",
      "Toss in the pasta. Add a little reserved water until the sauce coats it. Serve hot."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "omelette",
    "name": "Spinach & cheese omelette",
    "cuisine": "International",
    "role": "main",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "eggs",
        "quantity": 4.0,
        "unit": "piece"
      },
      {
        "id": "spinach",
        "quantity": 80.0,
        "unit": "g"
      },
      {
        "id": "cheese",
        "quantity": 50.0,
        "unit": "g"
      },
      {
        "id": "oil",
        "quantity": 10.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Wash and chop the spinach. Beat the eggs with salt and grate the cheese.",
      "Heat half the oil in a nonstick pan. Cook spinach until wilted, then transfer to a bowl.",
      "Add the rest of the oil and pour in the eggs. Cook gently, lifting the edges so uncooked egg can flow underneath.",
      "Spread spinach and cheese over half. Fold and continue cooking gently until the center is set; follow the egg-dish temperature note below."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "potato-hash",
    "name": "Golden potato & egg hash",
    "cuisine": "International",
    "role": "main",
    "time": 30,
    "servings": 2,
    "items": [
      {
        "id": "potatoes",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "eggs",
        "quantity": 2.0,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Cut potatoes into 1 cm cubes and chop the onion. Boil potatoes for 6–8 minutes until nearly tender; drain well.",
      "Heat oil in a wide pan. Add potatoes and onion, then cook for 10–12 minutes, turning until browned and tender.",
      "Season with salt and make two spaces for the eggs. Crack an egg into each.",
      "Cover and cook gently until the whites and yolks are firm. Divide between plates."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "cucumber-salad",
    "name": "Tomato cucumber salad",
    "cuisine": "International",
    "role": "side",
    "time": 10,
    "servings": 2,
    "items": [
      {
        "id": "cucumber",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 0.5,
        "unit": "piece"
      },
      {
        "id": "lemon juice",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "oil",
        "quantity": 10.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Wash the cucumber and tomatoes and cut into bite-size pieces. Slice the onion thinly.",
      "Mix lemon juice, oil and salt in a bowl.",
      "Toss the vegetables in the dressing immediately before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "chickpea-skillet",
    "name": "Tomato chickpea skillet",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "cooked chickpeas",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "spinach",
        "quantity": 80.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Drain the cooked chickpeas. Chop the tomatoes and garlic; wash spinach.",
      "Heat oil in a pan. Stir garlic for 30 seconds, then add tomatoes and salt.",
      "Simmer for 10–12 minutes until saucy, adding a splash of water if it sticks.",
      "Add chickpeas and simmer five minutes. Fold in spinach and cook until wilted and hot."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "toast",
    "name": "Cheesy tomato toast",
    "cuisine": "International",
    "role": "starch",
    "time": 10,
    "servings": 2,
    "items": [
      {
        "id": "bread",
        "quantity": 4.0,
        "unit": "slice"
      },
      {
        "id": "tomatoes",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "cheese",
        "quantity": 60.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "pepper",
        "quantity": 0.5,
        "unit": "g"
      }
    ],
    "steps": [
      "Slice the washed tomatoes and grate the cheese.",
      "Lightly toast the bread. Cover it with tomatoes and cheese.",
      "Place under a hot grill or broiler, watching continuously, until the cheese is melted. Serve immediately."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "mushrooms",
    "name": "Garlic mushroom rice bowl",
    "cuisine": "International",
    "role": "main",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "mushrooms",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "cooked rice",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "soy sauce",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Slice the mushrooms and mince the garlic. Break apart the chilled rice.",
      "Heat oil in a wide pan and cook mushrooms for 6–8 minutes until browned.",
      "Stir in garlic for 30 seconds, then add soy sauce and the rice.",
      "Toss until the rice is steaming hot throughout, following the reheating note below."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "sinangag",
    "name": "Sinangag-style garlic rice",
    "cuisine": "Filipino",
    "role": "starch",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "cooked rice",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 5.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Break the chilled rice into loose grains and finely chop the garlic.",
      "Warm oil over medium-low heat. Stir the garlic until pale gold, then scoop half out to prevent burning.",
      "Add rice and salt to the pan. Toss and turn until fully reheated.",
      "Scatter the reserved garlic over the rice and serve. See the rice storage note below."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "chicken-adobo",
    "name": "Simple chicken adobo",
    "cuisine": "Filipino",
    "role": "main",
    "time": 45,
    "servings": 2,
    "items": [
      {
        "id": "chicken thigh",
        "quantity": 400.0,
        "unit": "g"
      },
      {
        "id": "soy sauce",
        "quantity": 30.0,
        "unit": "ml"
      },
      {
        "id": "vinegar",
        "quantity": 30.0,
        "unit": "ml"
      },
      {
        "id": "garlic",
        "quantity": 4.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 10.0,
        "unit": "ml"
      },
      {
        "id": "pepper",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "bay leaf",
        "quantity": 1.0,
        "unit": "piece"
      }
    ],
    "steps": [
      "Cut boneless chicken thigh into large pieces on a separate board. Crush the garlic.",
      "Heat oil in a saucepan and brown the chicken lightly on both sides.",
      "Add garlic, soy sauce, vinegar, pepper and 150 ml water. Bring to a boil, then cover and simmer for 20–25 minutes.",
      "Uncover and reduce the sauce for 5–10 minutes, turning the chicken. Check its internal temperature before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "pork-adobo",
    "name": "Simple pork adobo",
    "cuisine": "Filipino",
    "role": "main",
    "time": 60,
    "servings": 2,
    "items": [
      {
        "id": "pork shoulder",
        "quantity": 400.0,
        "unit": "g"
      },
      {
        "id": "soy sauce",
        "quantity": 30.0,
        "unit": "ml"
      },
      {
        "id": "vinegar",
        "quantity": 30.0,
        "unit": "ml"
      },
      {
        "id": "garlic",
        "quantity": 4.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 10.0,
        "unit": "ml"
      },
      {
        "id": "pepper",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "bay leaf",
        "quantity": 1.0,
        "unit": "piece"
      }
    ],
    "steps": [
      "Cut pork shoulder into 2 cm cubes and crush the garlic.",
      "Heat oil in a heavy saucepan and brown pork in a single layer, working in batches if needed.",
      "Add garlic, soy sauce, vinegar, pepper and 250 ml water. Bring to a boil and cover.",
      "Simmer 40–45 minutes or until tender, adding water if needed. Uncover to thicken the sauce and check the pork temperature."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "giniling",
    "name": "Tomato pork giniling",
    "cuisine": "Filipino",
    "role": "main",
    "time": 35,
    "servings": 2,
    "items": [
      {
        "id": "ground pork",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "potatoes",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "carrots",
        "quantity": 100.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Finely chop onion and garlic. Cut potatoes and carrots into small even cubes; chop tomatoes.",
      "Heat oil in a pan. Soften onion for three minutes, then add garlic and ground pork. Break the meat into small pieces.",
      "Add tomatoes, potatoes, carrots, salt and 150 ml water. Cover and simmer 15–20 minutes until vegetables are tender.",
      "Uncover to reduce excess liquid. Stir thoroughly and verify the ground pork temperature before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tortang-talong",
    "name": "Tortang talong-style eggplant omelette",
    "cuisine": "Filipino",
    "role": "main",
    "time": 35,
    "servings": 2,
    "items": [
      {
        "id": "eggplant",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "eggs",
        "quantity": 3.0,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Prick the eggplant and grill or broil, turning carefully, until its flesh is completely soft, about 15–20 minutes.",
      "Cool enough to handle, peel off the skin and flatten the flesh with a fork.",
      "Beat eggs with salt and coat the flattened eggplant in the mixture.",
      "Heat oil in a nonstick pan. Cook the eggplant with the remaining egg mixture on both sides until set throughout. Check the egg-dish temperature."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "sayote",
    "name": "Ginisang sayote",
    "cuisine": "Filipino",
    "role": "side",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "chayote",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 0.5,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Peel the chayote, remove the seed and slice the flesh thinly. Chop onion and garlic.",
      "Heat oil in a pan and soften onion for three minutes. Add garlic for 30 seconds.",
      "Add chayote, salt and 60 ml water. Cover and cook for 8–10 minutes until just tender.",
      "Remove the lid and let excess water evaporate. Serve as a vegetable side."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "cabbage-eggs",
    "name": "Ginisang repolyo with eggs",
    "cuisine": "Filipino",
    "role": "side",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "cabbage",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "eggs",
        "quantity": 2.0,
        "unit": "piece"
      },
      {
        "id": "onion",
        "quantity": 0.5,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Shred washed cabbage, chop onion and garlic, and beat the eggs.",
      "Heat oil in a wide pan. Soften onion, then briefly stir in garlic.",
      "Add cabbage, salt and 30 ml water. Stir-fry until tender but not mushy.",
      "Push cabbage aside, add eggs and scramble until set. Mix together and cook until the egg dish reaches the temperature below."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tofu-adobo",
    "name": "Tofu adobo-style skillet",
    "cuisine": "Filipino",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "firm tofu",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "soy sauce",
        "quantity": 25.0,
        "unit": "ml"
      },
      {
        "id": "vinegar",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "pepper",
        "quantity": 0.5,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Drain and pat the tofu dry. Cut into cubes and mince the garlic.",
      "Heat oil in a nonstick pan and brown tofu on several sides.",
      "Add garlic, soy sauce, vinegar, pepper and 60 ml water. Bring to a simmer.",
      "Cook gently for 5–8 minutes, turning the tofu until coated with the reduced sauce."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tinola",
    "name": "Simple chicken tinola",
    "cuisine": "Filipino",
    "role": "main",
    "time": 40,
    "servings": 2,
    "items": [
      {
        "id": "chicken thigh",
        "quantity": 400.0,
        "unit": "g"
      },
      {
        "id": "chayote",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "spinach",
        "quantity": 80.0,
        "unit": "g"
      },
      {
        "id": "ginger",
        "quantity": 20.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Cut boneless chicken into large pieces. Peel and slice chayote and ginger; chop onion and garlic.",
      "Heat oil in a saucepan. Soften onion and ginger for three minutes, then add garlic and chicken.",
      "Pour in 700 ml water and add salt. Bring to a boil, then simmer for 20 minutes.",
      "Add chayote and simmer until tender, around 8–10 minutes. Verify chicken temperature, then stir in spinach until wilted."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "arroz-caldo",
    "name": "Simple chicken arroz caldo",
    "cuisine": "Filipino",
    "role": "main",
    "time": 45,
    "servings": 2,
    "items": [
      {
        "id": "uncooked rice",
        "quantity": 100.0,
        "unit": "g"
      },
      {
        "id": "chicken thigh",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "ginger",
        "quantity": 20.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "spring onion",
        "quantity": 1.0,
        "unit": "piece"
      }
    ],
    "steps": [
      "Rinse the uncooked rice. Chop the onion, garlic and ginger; cut boneless chicken into small pieces.",
      "Heat oil in a pot. Soften onion and ginger, then add garlic and chicken.",
      "Add rice, salt and 900 ml water. Bring to a boil and simmer gently, stirring often, for 30–35 minutes.",
      "Add more water if needed for a spoonable porridge. Check chicken temperature and rice tenderness before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "sardine-tomato",
    "name": "Sardines with fresh tomatoes",
    "cuisine": "Filipino",
    "role": "main",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "canned sardines",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 10.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Drain plain canned sardines. Chop tomatoes, onion and garlic.",
      "Warm oil in a pan. Soften onion for four minutes, then stir in garlic.",
      "Add tomatoes and cook for 5–7 minutes until broken down, adding a splash of water if dry.",
      "Lay the sardines in the sauce and warm gently without breaking them up too much."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "munggo",
    "name": "Quick ginisang munggo",
    "cuisine": "Filipino",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "cooked mung beans",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "spinach",
        "quantity": 80.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Use already cooked, soft mung beans. Chop tomatoes, onion and garlic, and wash spinach.",
      "Heat oil in a saucepan. Soften onion, then add garlic and tomatoes.",
      "Cook until tomatoes soften. Add mung beans, salt and 300 ml water. Simmer for 10 minutes, crushing a few beans to thicken.",
      "Stir in spinach and cook until wilted. Adjust thickness with water."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tuna-omelette",
    "name": "Tortang tuna-style omelette",
    "cuisine": "Filipino",
    "role": "main",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "canned tuna",
        "quantity": 120.0,
        "unit": "g"
      },
      {
        "id": "eggs",
        "quantity": 3.0,
        "unit": "piece"
      },
      {
        "id": "onion",
        "quantity": 0.5,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Drain tuna well and finely chop the onion. Beat the eggs.",
      "Heat half the oil in a nonstick pan and cook onion until soft.",
      "Mix onion and tuna into the eggs. Add remaining oil to the pan and pour in the mixture.",
      "Cook gently, turn carefully using a plate if needed, and cook the second side until set throughout. Check the egg-dish temperature."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "green-beans",
    "name": "Garlic green beans",
    "cuisine": "International",
    "role": "side",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "green beans",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Trim and wash green beans. Mince garlic.",
      "Heat oil in a pan. Briefly stir garlic until fragrant, then add the beans.",
      "Add salt and 60 ml water. Cover for 5–7 minutes until beans are tender-crisp.",
      "Uncover and toss until the remaining liquid evaporates."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tomato-eggs",
    "name": "Kamatis at itlog",
    "cuisine": "Filipino",
    "role": "main",
    "time": 15,
    "servings": 2,
    "items": [
      {
        "id": "eggs",
        "quantity": 4.0,
        "unit": "piece"
      },
      {
        "id": "tomatoes",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 0.5,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Chop tomatoes and onion. Beat eggs with salt.",
      "Heat oil in a pan and soften onion for three minutes.",
      "Add tomatoes and cook until their juices thicken, about five minutes.",
      "Pour in eggs and stir gently until set throughout. Follow the egg-dish temperature note."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "broccoli-beef",
    "name": "Broccoli & minced beef stir-fry",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "broccoli",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "ground beef",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "pepper",
        "quantity": 0.5,
        "unit": "g"
      }
    ],
    "steps": [
      "Wash broccoli and cut into small florets, slicing the peeled stem thinly.",
      "Heat oil in a wide pan. Add minced beef and break it into small pieces as it cooks.",
      "Add broccoli, salt and 60 ml water. Cover for 4–6 minutes, then uncover and stir until broccoli is tender-crisp.",
      "Check the ground beef temperature and cook longer if necessary. Let extra liquid evaporate before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "broccoli-pork",
    "name": "Broccoli & minced pork stir-fry",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "broccoli",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "ground pork",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "pepper",
        "quantity": 0.5,
        "unit": "g"
      }
    ],
    "steps": [
      "Cut washed broccoli into small florets and thinly slice its peeled stem.",
      "Heat oil in a wide pan. Fry ground pork, breaking it into small pieces.",
      "Add broccoli, salt and 60 ml water. Cover for 4–6 minutes until broccoli is almost tender.",
      "Uncover and stir-fry until excess liquid evaporates. Verify the ground pork temperature before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "broccoli-tofu",
    "name": "Broccoli & tofu skillet",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "broccoli",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "firm tofu",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "soy sauce",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Drain and dry tofu, then cut it into cubes. Cut washed broccoli into small florets.",
      "Heat oil in a nonstick pan. Brown tofu on several sides and lift onto a plate.",
      "Add broccoli and 60 ml water to the pan. Cover for 4–6 minutes until tender-crisp.",
      "Return tofu, add soy sauce and toss until hot and lightly coated."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "chicken-broccoli",
    "name": "Chicken & broccoli skillet",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "chicken breast",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "broccoli",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Cut chicken into thin strips on a separate board. Cut washed broccoli into small florets and mince garlic.",
      "Heat oil in a wide pan and cook chicken, turning often.",
      "Add garlic, broccoli, salt and 60 ml water. Cover for 4–6 minutes.",
      "Uncover and stir until broccoli is tender-crisp and chicken reaches the temperature below."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "cabbage-beef",
    "name": "Cabbage & minced beef skillet",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "cabbage",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "ground beef",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Shred cabbage and chop onion.",
      "Heat oil in a wide pan and soften onion. Add beef and break it apart with a spoon.",
      "Add cabbage, salt and 50 ml water. Cover for five minutes, then stir.",
      "Cook uncovered until cabbage is tender and excess moisture evaporates. Check the ground beef temperature."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "lentil-soup",
    "name": "Everyday lentil soup",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "cooked lentils",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "carrots",
        "quantity": 150.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 250.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Dice carrots and onion finely; chop tomatoes.",
      "Heat oil in a pot. Soften onion for three minutes, then stir in carrots and tomatoes.",
      "Add cooked lentils, salt and 500 ml water. Simmer for 15–20 minutes until carrots are tender.",
      "Mash a few lentils against the side of the pot to thicken the soup before serving."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "bean-skillet",
    "name": "Tomato white-bean skillet",
    "cuisine": "International",
    "role": "main",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "cooked white beans",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Drain cooked beans. Chop tomatoes and garlic.",
      "Heat oil in a pan and briefly stir the garlic.",
      "Add tomatoes and salt. Cook for 10 minutes until saucy.",
      "Stir in beans and simmer for five minutes, adding a little water if needed."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "chickpea-salad",
    "name": "Chickpea cucumber salad",
    "cuisine": "International",
    "role": "side",
    "time": 10,
    "servings": 2,
    "items": [
      {
        "id": "cooked chickpeas",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "cucumber",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 200.0,
        "unit": "g"
      },
      {
        "id": "lemon juice",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Drain and rinse cooked chickpeas. Wash and dice cucumber and tomatoes.",
      "Whisk lemon juice, oil and salt in a serving bowl.",
      "Fold in chickpeas and vegetables. Serve immediately or refrigerate promptly."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "vegetable-rice",
    "name": "Vegetable fried rice",
    "cuisine": "International",
    "role": "starch",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "cooked rice",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "carrots",
        "quantity": 100.0,
        "unit": "g"
      },
      {
        "id": "peas",
        "quantity": 100.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "soy sauce",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Dice carrots very small and mince garlic. Separate the grains of chilled rice.",
      "Heat oil in a wide pan. Cook carrots with 30 ml water for 4–5 minutes.",
      "Add peas and garlic; stir for two minutes.",
      "Add rice and soy sauce. Toss until reheated throughout, following the rice note below."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "egg-sandwich",
    "name": "Simple egg sandwich",
    "cuisine": "International",
    "role": "main",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "eggs",
        "quantity": 3.0,
        "unit": "piece"
      },
      {
        "id": "bread",
        "quantity": 4.0,
        "unit": "slice"
      },
      {
        "id": "mayonnaise",
        "quantity": 25.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Place eggs in a saucepan, cover with water and bring to a boil. Lower to a gentle simmer and cook until both whites and yolks are firm, about 10–12 minutes.",
      "Cool eggs under cold water, peel and chop.",
      "Mix with mayonnaise. Divide between bread slices and close the sandwiches.",
      "Eat promptly or keep refrigerated."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tuna-sandwich",
    "name": "Tuna cucumber sandwich",
    "cuisine": "International",
    "role": "main",
    "time": 10,
    "servings": 2,
    "items": [
      {
        "id": "canned tuna",
        "quantity": 150.0,
        "unit": "g"
      },
      {
        "id": "cucumber",
        "quantity": 100.0,
        "unit": "g"
      },
      {
        "id": "bread",
        "quantity": 4.0,
        "unit": "slice"
      },
      {
        "id": "mayonnaise",
        "quantity": 25.0,
        "unit": "ml"
      }
    ],
    "optional": [],
    "steps": [
      "Drain tuna thoroughly and mix with mayonnaise.",
      "Wash and thinly slice cucumber. Pat slices dry.",
      "Spread tuna over half the bread, add cucumber and cover with the remaining slices.",
      "Eat promptly or refrigerate."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "mushroom-omelette",
    "name": "Mushroom omelette",
    "cuisine": "International",
    "role": "main",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "eggs",
        "quantity": 4.0,
        "unit": "piece"
      },
      {
        "id": "mushrooms",
        "quantity": 150.0,
        "unit": "g"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Slice mushrooms and beat eggs with salt.",
      "Heat half the oil in a nonstick pan. Cook mushrooms until their moisture evaporates and they begin to brown.",
      "Lift mushrooms out. Add remaining oil and beaten eggs to the pan, cooking gently.",
      "Add mushrooms to half, fold and cook until set throughout. Check the egg-dish temperature."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "spinach-pasta",
    "name": "Garlic spinach pasta",
    "cuisine": "International",
    "role": "main",
    "time": 20,
    "servings": 2,
    "items": [
      {
        "id": "dry pasta",
        "quantity": 180.0,
        "unit": "g"
      },
      {
        "id": "spinach",
        "quantity": 150.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 25.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Cook dry pasta according to its packet. Reserve a cup of cooking water before draining.",
      "Wash spinach and mince garlic.",
      "Warm oil in a skillet and stir garlic for 30 seconds. Add spinach and salt and cook until wilted.",
      "Toss in pasta and a little cooking water until glossy and hot."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "tuna-pasta",
    "name": "Tomato tuna pasta",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "dry pasta",
        "quantity": 180.0,
        "unit": "g"
      },
      {
        "id": "canned tuna",
        "quantity": 150.0,
        "unit": "g"
      },
      {
        "id": "tomatoes",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "garlic",
        "quantity": 2.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Cook pasta according to its packet, saving some cooking water. Drain tuna and chop tomatoes and garlic.",
      "Heat oil and briefly cook garlic. Add tomatoes and salt and simmer 10–12 minutes.",
      "Fold in tuna and warm gently.",
      "Add pasta and enough cooking water to coat it with sauce. Serve hot."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "lemon-chicken",
    "name": "Lemon garlic chicken",
    "cuisine": "International",
    "role": "main",
    "time": 25,
    "servings": 2,
    "items": [
      {
        "id": "chicken breast",
        "quantity": 300.0,
        "unit": "g"
      },
      {
        "id": "lemon juice",
        "quantity": 25.0,
        "unit": "ml"
      },
      {
        "id": "garlic",
        "quantity": 3.0,
        "unit": "clove"
      },
      {
        "id": "oil",
        "quantity": 20.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 1.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Slice chicken breasts horizontally into even thin cutlets. Mince garlic.",
      "Heat oil in a frying pan and cook chicken on both sides until lightly golden.",
      "Lower the heat. Add garlic, lemon juice, salt and 60 ml water.",
      "Simmer gently, turning the chicken, until it reaches the temperature below. Spoon over the pan juices."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "potato-soup",
    "name": "Potato carrot soup",
    "cuisine": "International",
    "role": "main",
    "time": 30,
    "servings": 2,
    "items": [
      {
        "id": "potatoes",
        "quantity": 350.0,
        "unit": "g"
      },
      {
        "id": "carrots",
        "quantity": 150.0,
        "unit": "g"
      },
      {
        "id": "onion",
        "quantity": 1.0,
        "unit": "piece"
      },
      {
        "id": "oil",
        "quantity": 15.0,
        "unit": "ml"
      },
      {
        "id": "salt",
        "quantity": 2.0,
        "unit": "g"
      }
    ],
    "optional": [],
    "steps": [
      "Peel and dice potatoes and carrots; chop onion.",
      "Heat oil in a saucepan and soften onion for four minutes.",
      "Add potatoes, carrots, salt and 650 ml water. Bring to a boil, then simmer for 20 minutes or until soft.",
      "Mash some vegetables with a potato masher to thicken the soup. Add water if needed."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  },
  {
    "id": "oat-porridge",
    "name": "Banana oat porridge",
    "cuisine": "International",
    "role": "main",
    "time": 10,
    "servings": 2,
    "items": [
      {
        "id": "rolled oats",
        "quantity": 100.0,
        "unit": "g"
      },
      {
        "id": "milk",
        "quantity": 400.0,
        "unit": "ml"
      },
      {
        "id": "banana",
        "quantity": 2.0,
        "unit": "piece"
      }
    ],
    "optional": [],
    "steps": [
      "Combine oats, milk and 100 ml water in a saucepan.",
      "Bring to a gentle simmer, stirring frequently. Cook for 5–7 minutes, or follow the oat packet directions.",
      "Mash one banana into the porridge. Divide between bowls and top with slices of the other banana."
    ],
    "provenance": {
      "author": "Fridge & Fork / AI-assisted draft",
      "created": "2026-10-12",
      "origin": "Independently composed for this app from general cooking methods; not copied from a recipe publication.",
      "rights": "No third-party recipe text or photos incorporated in this record. No guarantee of exclusive copyright.",
      "testingStatus": "not-kitchen-tested",
      "testDate": null,
      "reviewer": null
    }
  }
];
