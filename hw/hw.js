
=======================================
Name:    Air Max 97
Price:   130.00
About:   The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes.
Category:   shoes
=======================================
Name:    Adidas NMD R1
Price:   128.00
About:   New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
Category:   shoes
=======================================
Name:    Gucci Oversize T-shirt with Interlocking G
Price:   580.00
About:   The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
Category:   shirts
=======================================
Name:    Nike Sportswear Club
Price:   18.97
About:   The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
Category:   shirts
=======================================
Name:    Spanx Flare Jeans, Vintage Indigo
Price:   148.00
About:   These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
Category:   pants
=======================================
Name:    Bonobos Premium Stretch Jeans
Price:   69.00
About:   Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
Category:   pants
=======================================

//////////////////////////////////////////////////////////////////////////////////////////////


def display_favorite_dishes(food_object):
    for food, dishes in food_object.items():
        print(f'{food} contains:')
        for dish in dishes:
            print(dish)


food_object = {
    'pizza': ['Deep Dish', 'South Side Thin Crust'],
    'tacos': ['Anything not from Taco bell'],
    'burgers': ['Portillos Burgers'],
    'ice_cream': ['Chocolate', 'Vanilla', 'Oreo'],
    'shakes': [],
    'oberwise': ['Chocolate'],
    'dunkin': ['Vanilla'],
    'culvers': ['All of them'],
    'mcDonalds': ['Sham-rock-shake'],
    'cupids_candies': ['Chocolate Malt']
}
display_favorite_dishes(food_object)



///////////////////////////////////////////////////////////////////////////////////////////////


import random


def generate_random_number():
    return random.randint(1, 13)

class GameMember:
    def __init__(self):
        self.hand = [generate_random_number(), generate_random_number()]

    def hit(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dealer(GameMember):
    def hit(self):
        if sum(self.hand) < 17:
            self.hand.append(generate_random_number())
        else:
            print("Dealer cannot hit.")

class Player(GameMember):
    def hit(self):
        if sum(self.hand) < 21:
            self.hand.append(generate_random_number())
        else:
            print("Player cannot hit more, already at or over 21.")


dealer = Dealer()
player = Player()

print("Dealer's hand:", dealer.hand)
print("Player's hand:", player.hand)

dealer.hit()
player.hit()

print("Dealer's hand after hit:", dealer.hand)
print("Player's hand after hit:", player.hand)


