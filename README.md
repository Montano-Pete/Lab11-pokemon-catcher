## Making a plan

## HTML Setup
1. Button
    Why? To throw poke ball.
2. Three radio buttons
    Why? To select whih Pokemon was CAUGHT.
3. Three images for radio buttons
    Why? To display which Pokemon have been encountered.

## JavaScript
1. Create pokemon objects / array
2. On load, we're:
    - rendering three pokemon
        - in a renderPokemon function:
            - going into our pokedex and using our math.random to generate three random pokemon
            - store these three choices in let variables, this will be when we're rendering the page

3. when user selects a pokemon and clicks submit button:
    - storing their choice in localStorage
    - catching the one they selected
    - matching what they selected with the ID in our pokedex
    - remember in localStorage which pokemon they've seen

    findById function:
        - when rendering pokemon, we're searching through for a match
    
    capturePokemon function
        - selection, pokedex are the paramters
        - matches selection and pokedex with findById
        - increment captured ++
        - call setPokedex to put into local storage

    encounterPokemon function
        - grap pokedex
        - takes in pokedex and displayed pokemon
        - matches stuff with findById
        - if/else statement, check if encountered pokemon are in CART, if so counter++
        - else: create (id: selectedID, captured: 0, encountered: 1)
        - setPokedex to update the CART

    getPokedex function
        - parses string
        - sets it equal to a constant
        - returnin pokedex
       

    set pokedex function
        - stringify what is in our cart
        - then we return